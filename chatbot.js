var answers = [];
var question_id = 0;
var max_question_id = 0;
var id_offset = 0;
var mandatory_question_number = 3;
var maximum_question_number = 3;
var edit_intro = false;
var review_process = false;
var optional_questions = false;
var ans_string = "";
var userid = Date.now().toString(36) + Math.random().toString(36).substr(3, 12);
var task = {};
var conversation = {};
var j_count = 0;
var style_balance = 0;
var style = {};
var if_align = false;
var chat_history = {userid: userid, conversation:[]};

window.onload = function()
{
    var url = location.search;
    var task_type = "captcha";
    Object.assign(style, stylei);
    task = document.createElement("script");

    if (url.indexOf("?") != -1)
    {
        var str = url.substr(1);
        var strs = str.split("&");
        for ( var i = 0 ; i < strs.length ; i ++ )
        {
            var params = strs[i].split('=');
            if ( params.length < 2 ) continue;
            if ( params[0] == "task"){
                if (["captcha","image","information","sentiment"].includes(params[1]))
                    task_type = params[1];
            }
            if ( params[0] == "style"){
                if ( params[1].includes("c") ) Object.assign(style, stylec);
            }
            if ( params[0] == "align") {
                if ( params[1]=="true" ) if_align = true;
            }
            if ( params[0] == "qid"){
                id_offset = parseInt(params[1]);
                if (isNaN(id_offset) || id_offset < 0 || id_offset > 50) id_offset = 0;
            }
            if ( params[0] == "tag"){
                userid = params[1] + userid;
            }
        }
    }
    task.src = "./task/"+task_type+"/task.js";
    if (if_align) {
        if (id_offset % 2 == 0) Object.assign(style, stylei);
        else Object.assign(style, stylec);
    }

    document.body.appendChild(task);
    task.onload = function () {
        load_task();
        talk(conversation);
    };
}

var chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
    inputCallbackFn: function(o) {

        var strip = function(text) {
            return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
        }

        // how to answer
        var input = "";
        if (typeof o.input === "undefined") {
            input = o.answer;
            add_to_history("U[B]:" + input);
        }else{
            input = o.input;
            add_to_history("U[T]:" + input);
        }

        if (o.standingAnswer == "optional") {
            if (strip(input).includes("yes") || strip(input).includes("continue")) {} else
            if (strip(input).includes("no") || strip(input).includes("stoptask"))
                maximum_question_number = max_question_id; // force to end
            else { talk(conversation,"optional");return; }
            push_question();
            return;
        }

        if (optional_questions && strip(input).includes("stoptask")) {
            if (typeof answers[max_question_id] === "undefined") max_question_id -= 1;
            maximum_question_number = max_question_id; // force to end
            push_question();
            return;
        }

        if (!review_process && strip(input).includes("instruction")) {
            talk(conversation, "instruction");
            return;
        }

        if (o.standingAnswer == "ice" || o.standingAnswer == "greeting2") {
            if (typeof o.input === "undefined") {
                // involvement: style_balance + 1, consideration: style_balance - 1
                if (input[input.length-1] == "i") style_balance += 1; else style_balance -= 1;
                // Align style
                if (if_align) {
                    if (style_balance > 1) Object.assign(style, stylei);
                    if (style_balance < -1) Object.assign(style, stylec);
                    update_style();
                }
                talk(conversation, input.substring(0,input.length-1));
            }
            else talk(conversation, o.standingAnswer);
            return;
        }

        if (o.standingAnswer == "greeting3") {
            if (typeof o.input === "undefined") {
                // involvement: style_balance + 1, consideration: style_balance - 1
                if (input[input.length-1] == "i") style_balance += 1; else style_balance -= 1;
                // Align style
                if (if_align) {
                    style_balance > 0 ? Object.assign(style, stylei) : Object.assign(style, stylec);
                    update_style();
                }
                if (strip(input).includes("ready")) push_question();
                else if (strip(input).includes("instruction")) talk(conversation, "instruction");
            } else talk(conversation, o.standingAnswer);
            return;
        }

        if (o.standingAnswer == "instruction") {
            if (strip(input).includes("ok") || strip(input).includes("got") || strip(input).includes("ready")) {
                if (max_question_id > 0) max_question_id--;
                push_question();
            } else talk(conversation, "repeat_ready");
            return;
        }

        if (o.standingAnswer == "review") {
            if (strip(input).includes("submit")) {
                // jQuery.ajax({
                //     url: "",
                //     type: "POST",
                //     crossDomain: true,
                //     data: {data:JSON.stringify(chat_history)},
                //     dataType: "json",
                //     success:function(response){
                //         if (response)
                            talk(conversation, "bye");
                //         else talk(conversation, "review");
                //     },
                //     error:function(e){
                //         talk(conversation, "review");
                //     }
                // });
                return;
            }
            else if (strip(input).includes("review")) {
                push_question(); // repeat review
                return;
            }
            else {
                if (!isNaN(input.toLowerCase().replace("q", ""))) { // eliminate the influence of "Q": Q1 = 1
                    id = parseInt(input.toLowerCase().replace("q", ""));
                    if (0 < id && id <= maximum_question_number) {
                        question_id = id;
                        show_question(true);
                        return;
                    }
                }
                talk(conversation, "review");
                return;
            }
        }

        if (!review_process && max_question_id > 1 && strip(input).includes("editanswer")) {
            max_question_id--;
            question_id = max_question_id;
            show_question(1);
            return;
        }

        if (o.standingAnswer == "break") {
            show_question();
            return;
        }

        if (o.standingAnswer == "row") {
            if ( !validate(input) ) {
                show_question(2);
                return;
            }
            answers[question_id - 1] = input;
            push_question();
            return;
        }
    }
});

var show_question = function(condition = 0) { //0:normal, 1:edit, 2:invalid
    var intro = [];
    if (condition == 1) {
        intro = intro.concat(style["previous_question"]);
    } else if (condition == 2) {
        intro = intro.concat(style["wrong_answer"]);
    } else {
        intro = intro.concat(style["next_question"]);
        if (question_id == 2 && !edit_intro) {
            intro = intro.concat(style["edit_question"]);
            edit_intro = true;
        }
        if (question_id == 1) Object.assign(intro, style["first_question"]);
    }

    var question = {
        "row": {
            "says": intro,
            "reply": []
        }
    };
    // get content about question
    var qid = (question_id + id_offset - 1) % maximum_question_number + 1;
    task["questions"][qid - 1]["question"].forEach(function(e, i) {
        if (!i) question["row"]["says"].push("<b>Q" + question_id + ":</b> " + e);
        else question["row"]["says"].push(e);
    });

    // get options
    if (task["type"] == "multiple_options")
        task["questions"][qid - 1]["options"].forEach(function(e) {
            question["row"]["reply"].push({
                "question": e,
                "answer": e
            });
        });
    talk(question, "row");
}

var push_question = function() {
    if ( !optional_questions && max_question_id == mandatory_question_number) {
        optional_questions = true;
        talk(conversation, "optional");
        return;
    }
    if (max_question_id >= maximum_question_number) {
        ans_string = "";
        review_process = true;
        for (var i = 0; i < max_question_id; i++)
            ans_string += "<br/><b>Q" + (i + 1) + ":</b> " + answers[i];
        var review_convo = {
            "review": {
                "says": [],
                "reply": [
                    {"question": "Submit answers","answer": "submit"},
                    {"question": "Review answers again","answer": "review"}
                ]
            }
        };
        review_convo["review"]["says"] = review_convo["review"]["says"].concat(style["review"]);
        for ( var i = 0 ; i < review_convo["review"]["says"].length ; i ++ )
            review_convo["review"]["says"][i] = review_convo["review"]["says"][i].replace("_ANSWER_",ans_string);
        review_convo["review"]["says"] = review_convo["review"]["says"].concat(style["submit"]);
        talk(review_convo, "review");
        return;
    }
    max_question_id += 1;
    question_id = max_question_id;
    if ( max_question_id > 1 && max_question_id % 10 == 1 ) {
        talk({"break":{
            "says":[style["break"],style["joke"][j_count]],
            "reply":[
                {"question": "Continue","answer": "continue"},
                {"question": "Stop task","answer": "stop task"}
            ]}},"break");
        j_count = (j_count + 1) % style["joke"].length;
    } else show_question();
}

var add_to_history = function(content) {
    var data = {
        "time": Date.now() + "",
        "conv": encodeURIComponent(content)
    };
    chat_history["conversation"].push(data);
}

var talk = function(conv, key = "ice") {
    chatWindow.talk(conv, key);
    // if ( key=="ice" ) send(location.search);
    // if ( key=="review" ) send(userid+ans_string);
    if ( key=="ice" ) add_to_history(location.search);
    if ( key=="review" ) add_to_history(userid+ans_string);
    // sending to server
    // var content = "M:";
    // conv[key]["says"].forEach(function(e) {
    //     content += e + "<br/>";
    // });
    // send(content);
}

var load_task = function() {
    maximum_question_number = task["questions"].length;
    mandatory_question_number = task["mandatory_question_number"];
    update_style();
}

var update_style = function() {

    if ( style["greeting1"][0][0] == 'H' ) chatWindow.setPace(100,1);
    else chatWindow.setPace(200,2);

    for ( var i = 0 ; i < style["greeting1"].length ; i ++ )
        style["greeting1"][i] = style["greeting1"][i].replace("_TASK_NAME_",task["name"]);

    for ( var i = 0 ; i < style["bye"].length ; i ++ )
        style["bye"][i] = style["bye"][i].replace("_USERID_",userid);

    conversation = {
        "ice": {
            "says": style["greeting1"],
            "reply": [
                {"question": "Sure!","answer": "greeting2i"},
                {"question": "Hmm... Let me have a look.","answer": "greeting2c"},
            ]
        },
        "greeting2": {
            "says": style["greeting2"],
            "reply": [
                {"question": "Absolutely.","answer": "greeting3i"},
                {"question": "Well... It should be enough.","answer": "greeting3c"},
            ]
        },
        "greeting3": {
            "says": style["greeting3"],
            "reply": [
                {"question": "Give me instructions","answer": "instructioni"},
                {"question": "Let me think... I need instructions","answer": "instructionc"},
                {"question": "Skip instructions","answer": "readyi"},
                {"question": "Mhm... I don&acute;t think I need it.","answer": "readyc"}
            ]
        },
        "instruction": {
            "says": style["instruction"].concat(task["instruction"]),
            "reply": [
                {"question": "Got it","answer": "ready"},
                {"question": "I am ready","answer": "ready"}
            ]
        },
        "optional": {
            "says": style["finish_mandatory"],
            "reply": [
                {"question": "Yes","answer": "continue"},
                {"question": "No","answer": "stop task"}
            ]
        },
        "review": {
            "says": style["repeat_submit"],
            "reply": [
                {"question": "Submit answers","answer": "submit"},
                {"question": "Review answers again","answer": "review"}
            ]
        },
        "bye": {
            "says": style["bye"]
        }
    };
}
