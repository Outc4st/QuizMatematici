<?php
session_start();

spl_autoload_register(function ($class_name) {
    include './class/' . $class_name . '.class.php';
});

/*if(isset($_SESSION) && !empty($_SESSION)){
    $user = unserialize($_SESSION['user']);
}*/



