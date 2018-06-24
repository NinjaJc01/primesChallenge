"use strict";
function primes() {
    const limit = 10000;
    let numbers = [];
    for (let i = 2; i<limit; i++)
    {
        numbers.push(i);
    }
    let x = 2;
    let start = new Date()
    while (x < (Math.floor(Math.sqrt(limit))))
    {
        let y = 2;
        while ((x*y) <= limit)
        {
            if (numbers.includes(x*y))
            {
                numbers.splice(numbers.indexOf(x*y),1);
            }
            y+=1
        }
        x += 1;
    }
    //document.getElementById("results").textContent = ;
    $("#results").text((numbers+"\n "+(new Date() - start)+"ms"))
}
function handler() {
    $("#results").text("Calculating...");
    window.setTimeout(() => {
        primes();
      }, 0);
}

