var validate = function(input) {
    var strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
    }
    if (strip(input).length < 1)  return false;
    var options = ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"];
    var flag = false;
    options.forEach(function(e) {
        if (strip(e) == strip(input)) flag = true;
    });
    return flag;
}

var task = {
    "name": "Image Classification",
    "instruction": ["Study the image and determine which animal the image contains, then select the option relating to the shown image."],
    "type": "multiple_options",
    "mandatory_question_number": 5,
    "questions": [
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_0.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_1.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_2.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_3.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_4.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_5.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_6.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_7.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_8.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_9.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_10.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_11.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_12.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_13.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_14.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_15.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_16.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_17.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_18.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_19.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_20.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_21.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_22.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_23.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_24.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_25.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_26.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_27.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_28.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_29.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_30.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_31.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_32.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_33.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_34.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_35.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_36.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_37.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_38.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_39.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_40.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_41.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_42.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_43.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_44.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_45.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_46.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_47.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_48.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]},
        {"question": ["Which animal is present in the image?","<img src=\"task/image/animal/image_49.jpg\">"],"options": ["Butterfly","Crocodile","Dolphin","Panda","Pigeon","Rooster"]}
    ]
}
