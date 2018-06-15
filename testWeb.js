function primes() {    
    "use strict";
    document.getElementById("results").innerText("Calculating...");
    const limit = 10000;
    var numbers = new Array();
    for (let i = 2; i<limit;i++) {numbers.push(i);}
    //console.log(numbers);
    var x = 2;
    var start = new Date()
    while (x < (Math.floor(limit/2))) 
    {
        var y = 2;
        while ((x*y) <= limit) 
        {
            if (numbers.includes(x*y)) {numbers.splice(numbers.indexOf(x*y),1);}
            y+=1
            //console.log(numbers);
        }
        x += 1;
    }
    //console.log(numbers);
    //console.log((new Date() - start));
    document.getElementById("results").innerText(numbers+"\n "+(new Date() - start)+"ms");
}