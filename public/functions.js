var blissData = {
  "smoothies": [
    {"name": "Flu Fighter", "picPath": "../images/smoothie1.jpg", "ingredients": "lots of stuff", "blurb": "Very quick pick me up", "nutInfo": "Yea its really good", "count": 37, "rating": "yea"},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2},
    {"name": "", "picPath": "", "ingredients": "", "blurb": "", "nutInfo": "", "count": 2, "rating":2}
  ],
  "vibes": [
    {"name": "chilly", "id": 1},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23},
    {"name": "", "id": 23}
  ]
}



$(document).ready(function() {
  $('.choice').on('click', function(evt){
    var vibe = $(this).attr('class').split(' ')[1]
    passVibe(vibe)
    determineSmoothie(vibe)
  });
});

//function to pass to switch statement
function passVibe(vibe) {
  return vibe
}

//switch statement
function determineSmoothie (vibe) {
  switch (vibe) {
    case "chilly":
      smoothieSuggestion = "Flu Fighter"
      break;
    case "blue":
      smoothieSuggestion = "Berry Booster"
      break;
    case "stressed":
      smoothieSuggestion = "Elixir"
      break;
    case "full":
      smoothieSuggestion = "Happy Belly"
      break;
    case "weak":
      smoothieSuggestion = "Protein Punch"
      break;
    case "hungover":
      smoothieSuggestion = "Liver Lover"
      break;
    case "sleepy":
      smoothieSuggestion = "Extreme Energy"
      break;
    case "spacey":
      smoothieSuggestion = "Dopamine Delight"
      break;
    case "starved":
      smoothieSuggestion = "Cacao Cocktail"
      break;
    case "tempting":
      smoothieSuggestion = "Peanut Butter Cup"
      break;
  }
  return smoothieSuggestion
}

function displayInfo (smoothieSuggestion) {
  for (var i = 0; i < blissData.smoothies.length; i++) {
    if (smoothieSuggestion === blissData.smoothies[i].name) {
      console.log(blissData.smoothies[i])
      return blissData.smoothies[i];
    }
  }
}
