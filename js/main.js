var count = 0;
var audio = $("#mysoundclip");
$(function() {
    var bingo = {
      selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
      generateRandom: function() {
        var randomIndex = Math.floor(Math.random()*bingo.selectedNumbers.length);
        return randomIndex;
      },
      boardReset: function(){
        $("td").removeClass("selected");
        bingo.selectedNumbers=[1,2,3,4,5,6,7,8,9,10];
        $(".bigNumberDisplay span").text("0");
      },
      houseCompleted: function(randomIndex){
        randomSelectedNumber=bingo.selectedNumbers[randomIndex];
        $(".bigNumberDisplay span").text(randomSelectedNumber);
        $('td.cell' + randomSelectedNumber).addClass('selected');
        if (randomIndex > -1) {
          bingo.selectedNumbers.splice(randomIndex, 1);
        }
        console.log("Length of array: " + bingo.selectedNumbers.length);
        console.log(bingo.selectedNumbers);
      },
    };
    $('td').each(function() {
        var concatClass = this.cellIndex+ ""+ this.parentNode.rowIndex;
        var numberString = parseInt(concatClass, 10)+1;
        $(this).addClass("cell" + numberString).text(numberString);
    });

    $("#calculator").on("click", function(){

        var collection = $("#totalcollection").val();
        console.log(collection/4);
        $(".dividends").append("<p>Early five : "+"$"+collection/16+"</p>");
        $(".dividends").append("<p>Top Line : "+"$"+collection/16+"</p>");
        $(".dividends").append("<p>Middle Line : "+"$"+collection/16+"</p>");
        $(".dividends").append("<p>Bottom Line : "+"$"+collection/16+"</p>");
        $(".dividends").append("<p>Out House : "+"$"+collection/4+"</p>");
        $(".dividends").append("<p>Full House : "+"$"+collection/2+"</p>");
        $( "p" ).on({
  click: function() {
    var text = $(this).text();
    $( this ).toggleClass( "active" );
  }, mouseenter: function() {
    $( this ).addClass( "inside" );
  }, mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});
    });

    $("#btnGenerate").on("click", function(event){
        if ((bingo.selectedNumbers.length)===0) {
            bingo.boardReset();
            count +=1;
            alert ("House " + count + " Completed");
            $(".gameCounter span").text(count);
        } else {
            var randomIndex = bingo.generateRandom();
            bingo.houseCompleted(randomIndex);
            console.log(randomIndex);
            }
    });
});
