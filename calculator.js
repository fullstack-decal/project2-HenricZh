let total = 0;
let strbuffer = "0";
let operator = "";

/*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
    Uncomment and fill in the blank spaces. */
function calculations() {
    const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
    if (operator === "+") {
        total += intBuffer;
    } else if (operator === "÷") {
        total /= intBuffer;
    } else if (operator === "x") {
        total *= intBuffer;
    } else if (operator === "-") {
        total -= intBuffer;
    }
    strbuffer = total;
}

/*   FUNC DESCRIPTION: If user input is a number, create the function. */
function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer = strbuffer.concat(value);
    }
}

/*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */

function makesSymbol(symbol) {
    //make functionality for symbol C
    //make functionality for symbol ← Hint: .substring might be helpful! 
    //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
    if (symbol === "C") {
        strbuffer = "0";
    } else if (symbol === "←") {
        strbuffer = strbuffer.substring(0, strbuffer.length - 1);
    } else if (symbol === "=") {
        calculations();
    } else { //make functionality if symbol is an operator
        const intBuffer = parseInt(strbuffer);
        if (total === 0) {
            total = intBuffer;
        } else {
            total = intBuffer;
        }
        operator = symbol;
        strbuffer = "0";
    }
}

/*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
    This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
function setListeners() {
    //Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
    let but = document.querySelectorAll('.buttons');
    for (item of but) {
        item.addEventListener('click', function (event) {
            buttonClicked(event.target.innerText);
        });
        //Hint: addEventListener might be useful.
        //Hint: event.target.innerText might be helpful. innerText return type is a string
    }
}

//Make sure to call setListeners!!!
setListeners();

/*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
        //Hint: call a function we just created!
        makesSymbol(valueClicked);
    } else {
        //Hint: call a function we just created!
        makesNumber(valueClicked);
    }
    document.querySelector('.result-screen').innerText = strbuffer;
    // Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
}