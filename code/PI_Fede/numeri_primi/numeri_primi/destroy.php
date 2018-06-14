<?php
/**
 * Created by PhpStorm.
 * User: Federico
 * Date: 21.03.18
 * Time: 09:29
 */
session_start();
unset($_SESSION['obj']);
session_destroy();
header("Location: index.php");