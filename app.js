

    console.log("ready!");

    // sets score
     correct=0;
     wrong=0;

        // lets computer find a random number, backwards weird way to do it have to come up with better logic
    const random = function (maxValue) {
        day= new Date();
        hour= day.getHours();
        sec= day.getSeconds();
        min= day.getMinutes();

        mil=day.getTime();

        return (((hour*3600) + (min*60) + (sec) + mil) % maxValue);
    }
    // *end of random func

    // new number generated
    const random2 = function (maxValue) {
        day=new Date();
        mil=day.getTime();
        return((mil) % maxValue);
    }

    // *end of random2 funct

    function add() {

        // if add button clicked create if/else
            if(document.quizForm.arithmetic[0].checked)
            maxValue=15;
            else {
                if(document.quizForm.arithmetic[1].checked)
                maxValue=45;

                else{
                    maxValue=100;
                }
            }
            // makes computer know to add num1 + num2 to get num3
            num1 = random(maxValue);
            num2 = random2(maxValue);
            num3 = num1 + num2;

            answer = window.prompt( num1 + " +" + num2 + " = ", "");
            ans();
        }
        // !end of add function must repeat
        // ?good logic understand
        

            
            


         
        
        // numA=random(maxValue);
        // numB=random2(maxValue);
        // numC=numA + numB;

        // Answer = window.prompt( numA + "+" + numB + "=", "");
        // ans();
        function subtract() {
        maxValue=60;

        numA=random(maxValue);
        numB=ranom(maxValue);
        numC=numA - numB;
        Answer=window.prompt(  numA + "-"  + numB+  " = ", 0);
        ans();
}




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










