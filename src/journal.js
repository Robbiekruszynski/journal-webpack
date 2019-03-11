export function wordCount(text) {
  return text.split(' ').length;
}

export function vowelCount(text) {
  var letters = text.toLowerCase().split('');
  var numberVowels = letters.filter(letter => 'aeiou'.includes(letter)).length;
  return numberVowels;
}

export function consonantsCount(text) {
  var letters = text.toLowerCase().split('');
  var consonants = 'bcdfghjklmnpqrstvwxyz';
  var numberConsonants = letters.filter(letter => consonants.includes(letter)).length;
  return numberConsonants;
}

export function firstSent(text) {
  var sentences = text.split(/[.?!]/);
  var words = sentences[0].split(' ');
  var firstEight=[];
  if (words.length > 7) {
    for (var i=0; i <= 7; i++){
      firstEight.push(words[i]);
    }
  } else {
    for (var j=0; j < words.length; j++){
      firstEight.push(words[j]);
    }
  }
  var teaser = firstEight.join(" ");
  teaser += "...";
  return teaser;
}
