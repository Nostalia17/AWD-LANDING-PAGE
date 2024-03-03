var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = null;
var operand2 = null;
var operator = null;


for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.innerText;


        if(value == 'C') {
            display.textContent = '';
            operand1 = null;
            operand2 = null;
            operator = null;
        } else if(value == '=') {
            var parts = display.textContent.split(operator);
            operand1 = parseFloat(parts[0]);
            operand2 = parseFloat(parts[1]);
            display.textContent = eval(operand1 + ' ' + operator + ' ' + operand2);
            operand1 = null;
            operand2 = null;
            operator = null;
        } else if(value == '+' || value == '-' || value == '*' || value == '/') {
            if(operand1 == null) {
                operand1 = parseFloat(display.textContent);
            } else if (operator) {
                var parts = display.textContent.split(operator);
                operand1 = parseFloat(parts[0]);
                operand2 = parseFloat(parts[1]);
                operand1 = eval(operand1 + ' ' + operator + ' ' + operand2);
                display.textContent = operand1;
            }
            operator = value;
            display.textContent += value;
        } else {
            display.textContent += value;
        }
    });
}
