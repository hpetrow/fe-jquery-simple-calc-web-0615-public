$(function(){

  // write your solution here.
  var num1 = 0, num2 = 0, oper = '+', result = 0;

  $('#number1 > .incr').click(function() {
    num1++;
    $('#number1 > .number').text(num1);
  });

  $('#number1 > .decr').click(function() {
    num1--;
    $('#number1 > .number').text(num1);
  });

  $('#number2 > .incr').click(function() {
    num2++;
    $('#number2 > .number').text(num2);
  });

  $('#number2 > .decr').click(function() {
    num2--;
    $('#number2 > .number').text(num2);
  });

  $('#add').click(function() {
    oper = '+'
    $('#operation').text(oper);
  });

  $('#sub').click(function() {
    oper = '-'
    $('#operation').text(oper);
  });

  $('#mult').click(function() {
    oper = '*'
    $('#operation').text(oper);
  });

  $('#div').click(function() {
    oper = '/'
    $('#operation').text(oper);
  });

  $('#equals').click(function() {
    switch(oper) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    $("#result").text(result);
  });
});
