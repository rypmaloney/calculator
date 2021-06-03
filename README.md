# calculator

This project is a calculator that runs on JavaScript. 

Each button is tagged by a class of 'operator,' 'operand,' or 'equals.' The decimal point for my purposes was a number with special properties. When the user clicks a button, the main function runs. If the user clicks a number (.operand) and the operator has not been defined, it is logged and concatenated to any previously clicked numbers. If an operator is clicked. Any number previously logged will be the first operand. This process repeats to define the second operand, once the equals sign is clicked or a second operator is clicked. 

The main sticking point I had on this projects was what would happen if multiple operations are strung together. Obviously, the result of the first operation would become operand1. But the various input combinations made my code confusion. Utimately, what helped me was breaking things down into results of the three main inputs (.operator, .operand, and .equals) and nesting the various situations beneath these. 


[Live preivew](https://raw.githack.com/rypmaloney/calculator/43e0b11753ccc1ba11741ee76a645c9cfe8329f3/index.html)
