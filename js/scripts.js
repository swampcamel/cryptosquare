$(function () {

  var groupLetters = function (phrase) {
    var sentence = phrase;
    var fiveCharGroup = '';
    for (var i = 0; i < sentence.length; i += 5) {
      var sub = sentence.substring(i, i+5);
      fiveCharGroup = fiveCharGroup.concat(sub + " ");
    }
    return fiveCharGroup;
  }



  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputPhrase = $("#numInput").val();
    inputPhrase = inputPhrase.replace(/\W/g, '');

    var columns;
    var rows;
    var codeMatrix = [];
    var charIndex = 0;
    var result = [];

    if (Math.sqrt(inputPhrase.length)%1 === 0) {
      columns = Math.sqrt(inputPhrase.length);
      console.log(columns);
      rows = columns;
    } else {
      columns = Math.ceil(Math.sqrt(inputPhrase.length));
      rows = Math.floor(Math.sqrt(inputPhrase.length));
      console.log(rows);
      console.log(columns);
    }

    for(var i = 0; i <= columns; i++) {
      for(var j = 0; j <= rows; j++) {
      codeMatrix[[i,j]] = inputPhrase.charAt(charIndex);
      charIndex++;
      console.log(codeMatrix)
    }
  }

    for (var i = 0; i <= columns; i++) {
      for (var j = 0; j <= rows; j++) {
        result.push(codeMatrix[[j,i]]);
        console.log(result);
      }
    }
    var toGroup = result.join("");
    console.log(codeMatrix);
    toGroup = groupLetters(toGroup);
    $("#result").text(toGroup);
  });

});
