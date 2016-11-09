var count = 0;

$(function() {
    var bingo = {
        selectedNumbers: [],
        generateRandom: function() {
            var min = 1;
            var max = 99;
            var random = Math.floor(Math.random() * (max - min + 1)) + min;
            return random;

        },
        boardReset: function(){
            $("td").removeClass("selected");
            bingo.selectedNumbers=[];
            $(".bigNumberDisplay span").text("0");


        },

        houseCompleted: function(random){
            bingo.selectedNumbers.push(random);
            console.log("Length of array: " + bingo.selectedNumbers.length);
            console.log(bingo.selectedNumbers);
        }

    };
    $('td').each(function() {
        var concatClass = this.cellIndex+ ""+ this.parentNode.rowIndex;
        var numberString = parseInt(concatClass, 10);
        $(this).addClass("cell" + numberString).text(numberString);
    });


    $("#btnGenerate").on("click", function(){
        if ((bingo.selectedNumbers.length)===5) {
            bingo.boardReset();
            count +=1;
            alert ("House " + count + " Completed");
            $(".gameCounter span").text(count);
        } else {
            var random = bingo.generateRandom();
            bingo.houseCompleted(random);
            console.log(random);
            $(".bigNumberDisplay span").text(random);
            $('td.cell' + random).addClass('selected');
        }
    });
});
