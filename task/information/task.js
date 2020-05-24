var validate = function(input) {
    var strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "");
    }
    if (strip(input).length < 1)  return false;
    var r = parseFloat(input);
    if ( !isNaN(r) && 0 <= r && r <= 5) return true;
    return false;
}

var task = {
    "name": "Information Finding",
    "instruction": [
        "In this task, you will find and provide the <b>rating (stars)</b> of the store by searching it using <a href=\"http://map.google.com\" target=\"_blank\">Google Map</a>.",
        "The rating (stars) provided should be a number from 0 to 5. (e.g. 2.3 or 4.6)",
        "If there are multiple ratings available, please provide the most relevant one (in your opinion).",
        "If there is no rating available for given store, please type 0."
    ],
    "type": "free_text",
    "mandatory_question_number": 5,
    "questions": [
        {"question": ["Please provide the rating (stars) for this store:","<b>Minhas Micro Brewery</b> at city <b>Calgary</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>CK'S BBQ & Catering</b> at city <b>Henderson</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>La Bastringue</b> at city <b>Montreal</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Geico Insurance</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Action Engine</b> at city <b>Calgary</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>The Coffee Bean & Tea Leaf</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Bnc Cake House</b> at city <b>Toronto</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Thai One On</b> at city <b>Mississauga</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Filiberto's Mexican Food</b> at city <b>Avondale</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Maggie & Stella's Gifts</b> at city <b>Pittsburgh</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Sushi 8</b> at city <b>Markham</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Southern Accent Restaurant</b> at city <b>Toronto</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Original Hamburger Works</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Mysore Indian Cuisine</b> at city <b>Montreal</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>North Haven Barber Shop</b> at city <b>Calgary</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Safeway Food & Drug</b> at city <b>Calgary</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Harlow</b> at city <b>Montreal</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Citi Trends</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Nevada Title And Payday Loans</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>CakesbyToi</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Park Stone Pavers</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Rally's Hamburgers</b> at city <b>Cleveland</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Rib Shop</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Mabel's Bakery</b> at city <b>Toronto</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Salsitas</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Los Toros Numero 2</b> at city <b>Monticello</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>ADT Security Services, Inc.</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>The Coffee Mill Restaurant</b> at city <b>Toronto</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Laurier Optical</b> at city <b>Mississauga</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Teresas Pizzeria</b> at city <b>Streetsboro</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Chicken Lips</b> at city <b>Sun Prairie</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Schonheit Gardens</b> at city <b>Sun Prairie</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Subway</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Omelet House Summerlin</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Pamper Me Perfect Beauty & Wellness</b> at city <b>Cave Creek</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Crossroads Country Cafe'</b> at city <b>Middlefield</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Strickland's Ice Cream</b> at city <b>Medina</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>John John's Seafood</b> at city <b>Cleveland</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Wellsprings of Gilbert</b> at city <b>Gilbert</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Little Caesars Pizza</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Audio Express</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Dunkin Donuts</b> at city <b>Upper St Clair</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Art Bathe</b> at city <b>Markham</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Super 8 by Wyndham Toronto East ON</b> at city <b>Toronto</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Cinthya's Beauty Salon</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Aria Remodeling</b> at city <b>Las Vegas</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Kim Phat Inc</b> at city <b>Montreal</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>Manuel's Mexican Restaurant & Cantina - Bell Rd</b> at city <b>Phoenix</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>GoodLife Fitness</b> at city <b>Calgary</b>"]},
        {"question": ["Please provide the rating (stars) for this store:","<b>E R Automotive</b> at city <b>Avalon</b>"]}
    ]
}
