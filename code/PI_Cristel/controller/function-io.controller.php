<?php

//Abilitates the dynamic form
$myForm = new Form('function', 'function', $_SERVER["PHP_SELF"], 'POST', 'function-check');

//Checks if there has been 4 right answers
if(isset($_SESSION['right']) && $_SESSION['right'] >= 4){
    $_SESSION['right'] = 0;
    $_SESSION['wrong'] = 0;
}

//If the function is not present in the current session, creates one and serializes it
if(!isset($_SESSION['function'])){
    $function = new FunctionCore();
    $_SESSION['function'] = serialize($function);
}

//-------------------------- Answer control ------------------------------------
if(isset($_SESSION['function'])){

    $function = unserialize($_SESSION['function']);

    if(isset($_POST['userInput'])){

        //Checks if the x given by the user, matches the function present in the session
        if($function->getX() == $_POST['userInput']){
            //var_dump("giusto"); //DEBUGGING
            $function = new FunctionCore();
            $_SESSION['function'] = serialize($function);

            //If answer is correct and variable "right" present in session vector
            if(isset($_SESSION['right'])){
                $_SESSION['right']++;
            }else{
                //If not present in the session, inizializes it
                $_SESSION['right'] = 1;
            }
            //var_dump($_SESSION['right']); //DEBUGGING

        }else{
            //var_dump("sbagliato"); //DEBUGGING

            //If answer is incorrect and variable "wrong" present in session vector
            if(isset($_SESSION['wrong'])){
                $_SESSION['wrong']++;
            }else{
                //If not present in the session, inizializes it
                $_SESSION['wrong'] = 1;
            }
            //var_dump($_SESSION['wrong']); //DEBUGGING
        }
    }
}
//---------------------------- End answer control ---------------------------------



