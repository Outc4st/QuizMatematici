<?php
/**
 * Created by PhpStorm.
 * User: Federico
 * Date: 28.03.18
 * Time: 08:28
 */
if (isset($_SESSION['obj'])){
    $prova = unserialize($_SESSION['obj']);
    if (isset($_POST['risposta']) && !empty($_POST['risposta'])) {
        if ($prova->verifica()) {
            unset($_SESSION['obj']);
            session_destroy();
        }
    }
}else {
    $prova = new numeriPrimi();
    $prova->generaNumero(1,100);
    $_SESSION['obj'] = serialize($prova);
    $_SESSION['numero'] = $prova->numero;
}