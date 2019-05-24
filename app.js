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

    var add = function() {
        var maxValue=60;

        numA=random(maxValue);
        numB=random2(maxValue);
        numC=numA + numB;

        Answer = window.prompt( numA + "+" + numB + "=", "");
        ans();
    }

    






})();