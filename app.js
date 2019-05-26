

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
            // makes computer know to add num1 and num2 to get num3
            num1 = random(maxValue);
            num2 = random2(maxValue);
            num3 = num1 + num2;

            // will display num1 + num2 and give real/correct answer
            answer = window.prompt( num1 + " +" + num2 + " = ", "");
            ans();
        }
        // !end of ADD function must repeat
        // ?good logic understood

        var subtract = function() {
            if(document.quizForm.arithmetic[0].checked) {
                maxValue=15;
            }
            else {
                if(document.quizForm.arithmetic[1].checked) {
                    maxValue = 45;
                }
                else {
                    maxValue = 70;
                }
            }

            num1 = random(maxValue);
            num2 = random2(maxValue);
            num3 = num1 - num2;

           
            answer = window.prompt( num1 + " -" + num2 + " = ", "");
            ans();

            

        }
        // !end of SUB func

        var divide = function () {
            if(document.quizForm.arithmetic[0].checked) {
                maxValue = 15;
            }
            else {
                if(document.quizForm.arithmetic[1].checked) {
                    maxValue = 45;
                }
                else {
                    maxValue = 70;
                }
            }

            // *rounding nums to make easier plus was getting weird numbers from random funct

            num1=random(maxValue)+1;
            num2=random2(maxValue)+1;
            num3=num2 / num2;
            num3=Math.round(num3)
            window.alert("Please round your answer:\n"
            +".5 or higher rounds one number up\n"
            +".4 or lower rounds one number down");
            answer = window.prompt(  num1 + "÷"  + num2 +  " = ", 0);
            ans();
        }
        // !end of DIVIDE funct!

        var multiply = function() {
            if(document.quizForm.arithmetic[0].checked) {
                maxValue=15;
            }
            else {
                if(document.quizForm.arithmetic[1].checked) {
                    maxValue = 45;
                }
                else {
                    maxValue = 70;
                }
            }

            num1 = random(maxValue);
            num2 = random2(maxValue);
            num3 = num1 * num2;

           
            answer = window.prompt( num1 + " *" + num2 + " = ", "");
            ans();
        }
        // !end of MULTIPLY funct



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

// sets answer
function ans() {
    if (answer == num3) {
        correct++;
        msg = "Hey, Braniac! Your answer is correct.";
    }
    else {
        wrong++;
        msg = "LOL  " + answer + " is incorrect.\n\n"
        + "Obviously the correct answer was " +num3 + ".";
    }
    score = "" + ((correct / (correct + wrong)) * 100);
    score = score.substring(0,4) + "%";
    alert(msg + "\n\nYOUR SCORE:  " + score + "\n"
    + correct + " correct\n"
    + wrong + " incorrect")
}










