console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

printOdds(101);
function printOdds(count){
    if (count >= 0)
    {
        for (n = 0; n <= count; n++)
        {
            if (n%2 == 1)
            {
                console.log(n)
            }
        }
    }
    else
    {
        for (n = count; n <= 0; n++)
        {
            if (n%2 == -1)
            {
                console.log(n)
            }
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
checkAge("Nolan", 23);

function checkAge(userName, age)
{
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16)
    {
        console.log(aboveSixteen);
    }
    else
    {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
getQuadrant(0,1);
getQuadrant(1,0);
getQuadrant(1,1);
getQuadrant(-1,1);
getQuadrant(-1,-1);
getQuadrant(1,-1);

function getQuadrant(x,y)
{
    if(x > 0 && y > 0)
    {
        console.log(`(${x},${y}) is in Quadrant 1`)
    }
    else if(x < 0 && y > 0)
    {
        console.log(`(${x},${y}) is in Quadrant 2`)
    }
    else if(x < 0 && y < 0)
    {
        console.log(`(${x},${y}) is in Quadrant 3`)
    }
    else if(x > 0 && y < 0)
    {
        console.log(`(${x},${y}) is in Quadrant 4`)
    }
    else if (x == 0)
    {
        console.log(`(${x},${y}) is on the y-axis`)
    }
    else if (y == 0)
    {
        console.log(`(${x},${y}) is on the x-axis`)
    }

}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

triangleType(1,2,2);
triangleType(1,1,2);
triangleType(1,1,1,);
triangleType(9,13,14);

function triangleType(side1,side2,side3)
{
    if (side1 + side2 <= side3)
    {
        console.log(`Sides ${side1}, ${side2}, ${side3} make an invalid triangle`);
    }
    else if (side1 == side2 && side2 == side3 && side3 == side1)
    {
        console.log(`Sides ${side1}, ${side2}, ${side3} make an equilateral triangle`);
    }
    else if (side1 == side2 || side2 == side3 || side3 == side1)
    {
        console.log(`Sides ${side1}, ${side2}, ${side3} make an isosceles triangle`);
    }
    else
    {
        console.log(`Sides ${side1}, ${side2}, ${side3} make a scalene triangle`);
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

dataPlanStatus(100,15,56);
function dataPlanStatus(planLimit, day, usage)
{
    let maxUse = (planLimit/30).toFixed(3);
    let actualUse = (usage/day).toFixed(2);
    console.log(`${day} days used, ${30 - day} days remaining`);
    console.log(`Average daily use: ${maxUse} GB/day`)
    let newMaxUse = ((planLimit - usage)/(30-day)).toFixed(2);

    if (actualUse > maxUse)
    {
        console.log(`You are EXCEEDING your average daily use (${(actualUse)} GB/day), continuing this high usage, you'll exceed your data plan by ${((actualUse*30)-planLimit).toFixed(1)} GB.`)
        console.log(`To stay below your data plan, use no more than ${newMaxUse} GB/day`);
    }
    console.log(``)
}
