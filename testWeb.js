function primes() {
    "use strict";
    document.getElementById("results").textContent = "Calculating...";
    const limit = 10000;
    var numbers = [];
    for (let i = 2; i<limit; i++)
    {
        numbers.push(i);
    }
    var x = 2;
    var start = new Date()
    while (x < (Math.floor(limit/2)))
    {
        var y = 2;
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
    document.getElementById("results").textContent = (numbers+"\n "+(new Date() - start)+"ms");
}
