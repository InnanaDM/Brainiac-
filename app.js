(() => {

    console.log("ready!");

    var correct=0;
    var wrong=0;

    const random = function (maxValue) {
        day= new Date();
        hour= day.getHours();
        sec= day.getSeconds();
        min= day.getMinutes();

        mili=day.getTime();

        return (((hour*3600) + (min*60) + (sec) + milli) % maxValue);
    }
    const random2 = function (maxValue) {
        day=new Date();
        mil=day.getTime();
        return((mil) % maxValue);
    }

    function add() {
        var maxValue=60;

        numA=random(maxValue);
        numB=random2(maxValue);
        numC=numA + numB;

        Answer = window.prompt( numA + "+" + numB + "=", "");
        ans();
    };

    // !FUNCTION CHECK END OF GAME

    function check() {
        if ((correct+wrong) != 0) {
        score = "" + ((correct / (correct + wrong)) * 100);
        score = score.substring(0,4) + "%";
        alert("YOUR SCORE:  " + score + "\n"
        + correct + " correct\n"
        + wrong + " incorrect")
        }
        else alert("You haven't answered anything yet.");
        }
        function ans() {
        if (Answer == numC) {
        correct++;
        msg = "Hey, Braniac! Your answer is correct.";
        }
        else {
        wrong++;
        msg = "LOL  " + Answer + " is incorrect.\n\n"
        + "Obviously the correct answer was " +numC + ".";
           }
        score = "" + ((correct / (correct + wrong)) * 100);
        score = score.substring(0,4) + "%";
        alert(msg + "\n\nYOUR SCORE:  " + score + "\n"
        + correct + " correct\n"
        + wrong + " incorrect")
        }
        
    
    






})();