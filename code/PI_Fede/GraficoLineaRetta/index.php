<?php
    include_once "php/TrovaPunti.php";


if (isset($_SESSION['obj']) && !empty($_SESSION['obj'])){
    $prova = unserialize($_SESSION['obj']);

    $_SESSION['obj'] = serialize($prova);
}else {
    $prova = new TrovaPunti();
    $prova->generaNumero(5,15);
    $_SESSION['obj'] = serialize($prova);
    $_SESSION['numeri'] = array($prova->n1,$prova->n2,$prova->n3, $prova->segno);
}
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>raphael test</title>
    <style>
        #paper {
            height: 400px;
            width: 400px;
            margin: 0 auto;
        }
    </style>
    <script src="js/raphael.min.js"></script>
    <script src="js/graficoLineaRetta.js"></script>
    <!--<script src="js/grigliaGrafico.js"></script> -->
</head>
<body>

    <div>Data la seguente funzione determina la retta corrispondente</div>
    <div> funzione : <?php $prova->getImplicita() ?></div>

    <div id="paper"></div>
    
</body>
</html>