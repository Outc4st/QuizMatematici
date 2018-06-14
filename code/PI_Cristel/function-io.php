<?php
include './include/settings.inc.php';
include './controller/function-io.controller.php';



//Used for testing. Not final

echo str_replace(" ", "+",$function->getFirstNum() . 'x ');
echo $function->getSecondNum() . '<br>';


$myForm->open_form();
echo 'f(';
$myForm->add_input("text", "userInput");
echo ')';
echo ' = ' . $function->getResult();
echo '<br>';
$myForm->add_input('submit', 'submit', 'Check');
$myForm->close_form();


//End testing

