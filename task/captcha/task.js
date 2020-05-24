var validate = function(input) {
    var strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
    }
    if (strip(input).length > 1)  return true;
    return false;
}

var task = {
    "name": "CAPTCHA Recognition",
    "instruction": ["Look at the image and determine what letters and numbers the image contains, and then write the letters and numbers (in the same order) as they appear in the image."],
    "type": "free_text", // or free_text
    "mandatory_question_number": 5,
    "questions": [
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha0.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha1.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha2.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha3.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha4.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha5.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha6.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha7.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha8.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha9.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha10.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha11.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha12.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha13.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha14.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha15.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha16.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha17.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha18.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha19.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha20.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha21.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha22.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha23.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha24.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha25.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha26.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha27.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha28.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha29.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha30.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha31.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha32.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha33.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha34.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha35.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha36.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha37.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha38.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha39.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha40.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha41.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha42.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha43.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha44.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha45.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha46.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha47.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha48.png\">"]},
        {"question": ["Please type the characters in the image.","<img src=\"task/captcha/images/captcha49.png\">"]}
    ]
}
