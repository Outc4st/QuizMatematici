<?php
    SESSION_START();
    ?>
    <script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
MathJax.Hub.Config({
  TeX: {
    Macros: {
      RR: '{\\bf R}',
      bold: ['{\\bf #1}', 1]
    }
  }
});
</script>
    <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/latest.js?config=TeX-MML-AM_CHTML"></script>
<?php
    include "class/numeriPrimi.php";

if (isset($_SESSION['obj']) && !empty($_SESSION['obj'])){
    $prova = unserialize($_SESSION['obj']);
    if (isset($_POST['risposta']) && !empty($_POST['risposta'])) {
        if ($prova->verifica()){
            echo "corretto!";
            $prova->generaNumero(100,200);
            if ($prova->getCorrette() == 4)
                $prova->restart();
        }else
            echo "sbagliato";
    }
    $_SESSION['obj'] = serialize($prova);
}else {
    $prova = new numeriPrimi();
    $prova->generaNumero(1,100);
    $_SESSION['obj'] = serialize($prova);
    $_SESSION['numero'] = $prova->numero;
}


echo "</br >";


echo 'Scomponi in fattori primi il seguente numero : '. $prova->numero;

    echo "<br/>";


    echo '<form method="POST" action="index.php">';
    echo '<input type="text" placeholder="risposta" name="risposta" autofocus >';
    echo '<input type="submit" value="invia">';
    echo '</form>';

    echo 'risposte corrette: '. $prova->getCorrette();
    echo "<br/>";
    echo 'risposte sbagliate : '. $prova->getSbagliate();

    echo "<br/>";
    echo ' (da togliere in produzione) <a href="destroy.php"> distruggi sessione </a>';