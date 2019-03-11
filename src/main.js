import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { wordCount, vowelCount, consonantsCount, firstSent } from "./journal.js";
import $ from 'jquery';
import './sass/styles.scss';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    $("#teaser").empty();
    var entry = $("#body").val();
    // var title = $("#title").val();
    var wordNum = wordCount(entry);
    var vowelNum = vowelCount(entry);
    var consonantsNum = consonantsCount(entry);
    var firstSentence = firstSent(entry);
    $("#teaser").append("<li> The number of words is: " + wordNum  + "</li>");
    $("#teaser").append("<li> The number of vowels is: " + vowelNum  + "</li>");
    $("#teaser").append("<li> The number of consonants is: " + consonantsNum  + "</li>");
    $("#teaser").append("<li> The first sentence of your message is: " + firstSentence + "</li>");
    var x = typeof firstSentence;
    console.log(x);
  });
});
