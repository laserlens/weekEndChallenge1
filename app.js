//remix angular 1
var app = angular.module('basicApp', []);

app.controller('BasicController', function () {
  console.log('BasicController loaded');

  var worker = this; // holds the value of this
  worker.employees = []; // hold all of our created cohorts
  worker.totalSalary = 0;

  worker.createEmployee = function () {
    console.log('Submitted employee ', worker.employee);

    // make a copy of object instead of storing object itself
    worker.employees.push(angular.copy(worker.employee));
    worker.calcSal();
    console.log('calcSal', worker.totalSalary);
  };

  worker.Delete = function() {
    var index = worker.employees.indexOf(item);
    worker.employees.splice(index, 1);
  }

  worker.calcSal = function () {
    worker.totalSalary = 0
    worker.employees.forEach(function(i) {
      var value = parseInt(i.salary);
      var total = worker.totalSalary;
      worker.totalSalary = value + total;
    });
  }
//worker.Delete = function (index) {
//  console.log('whats the index', index);
//  worker.employees.splice(worker.employee);
//        };

});//end of controller


//old mix jquery
/*$(document).ready(function () {

// function will not allow empty input fields on click and then get your attention to the empty ones
   $('#theButton').click(function(e) {

        var isValid = true;

        $('input[type="text"]').each(function() {

            if ($.trim($(this).val()) == '') {
                isValid = false;
                $(this).css({
                    "border": "1px solid red",
                    "background": "#FFCECE"
                });
            } else {
                $(this).css({
                    "border": "",
                    "background": ""
                });
            }
        });
        if (isValid == false) {
            e.preventDefault();
        }
    });


  $("#salary").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

  $('.employee-info').on('submit',function (event) {
    event.preventDefault();//prvents page from creating a new web page

    $('#result').css({
      'margin': 0,
      'padding': '5px',
      'border-top': 'solid',
      'border-bottom': 'solid',
      'border-color': 'red'
    });

    var employee = {};//empty object

    var fields = $('.employee-info').serializeArray(); //turns imput into array name and value
    console.log('fields',fields);

    fields.forEach(function (element, index) {//used to turn array into object
      employee[element.name] = element.value;//takes name value pairs and puts to object

    });

    console.log('employee object', employee);

    $('.employee-info').find('input[type=text]').val('');//by putting (someithing) in side chages the value of item

    //appending to dom
    appendDom(employee);
    calcSal();
  });

  /*
  function appendDom(emp) {
    $('employee-data').append('<div class="employee"></div>');
      var $el = $('employee-data').children().last();

      $el.append('<p>' + emp['employee-first-name'] + '' + emp['employee-last-name']);
*/
/*function appendDom(emp) {
  var $emp = $('<tr></tr>');
  $emp.append('<td>' + emp['employee-first-name'] + ' ' + emp['employee-last-name']);
  $emp.append('<td>' + emp['employeeId'])
  $emp.append('<td>' + emp['jobTitle'])
  $emp.append('<td class="empSal">' + emp['salary'])
  $emp.append('<td>'+ '<input type="button" class="btnDelete" value="Delete">')
  $('#theData tr:last').after($emp);// creating new row at bottom of table
}
function calcSal() {
  var sum = 0;
// iterate through each td based on class and add the values
$(".empSal").each(function() {

  var value = $(this).text();
  // add only if the value is number
  if(!isNaN(value) && value.length >= 0) {
      sum += parseInt(value);
  }
});
$('#result').text('$' + ((sum/12).toFixed(2)));
}
//following function on button push delete will remove tr and return calcSal function
$("#theData").on('click', '.btnDelete', function () {
    $(this).closest('tr').remove();
    calcSal();
});
});*/
