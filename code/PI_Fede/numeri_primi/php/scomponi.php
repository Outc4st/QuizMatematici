<?php
/**
 * Created by PhpStorm.
 * User: Federico
 * Date: 11.03.18
 * Time: 14:49
 */

$risultato = "";
$base = 2;
$esponente = 0;

function registra(){

    //se la stringa contiene qualcosa, ci aggiungiamo il segno X in linguaggio mathjax
    if (strlen($GLOBALS["risultato"]) > 0 ) $GLOBALS["risultato"] = $GLOBALS["risultato"]."*";
    //aggiungiamo il numero primo con il quale abbiamo effettuato le divisioni
    $GLOBALS["risultato"] = $GLOBALS["risultato"] . $GLOBALS["base"];
    // se abbiamo diviso più di una volta, aggiungiamo l'esponente alla stringa del risultato
    if ($GLOBALS["esponente"]>1)
        $GLOBALS["risultato"] = $GLOBALS["risultato"]."^".$GLOBALS["esponente"];
    // risettiamo l'esponente per riutilizzarlo
    $GLOBALS["esponente"] = 0;
}

function scomponi($numero) {
    //ini_set('max_execution_time', 300);
    // formattiamo le variabili di cui avremmo bisogno
    $GLOBALS["risultato"] = "";
    $dividendo = $numero;
    $n_fattori = 0;
    $GLOBALS["esponente"] = 0;
    $GLOBALS["base"]= 2;

    // finche dividendo è pari
    while(($dividendo % $GLOBALS["base"]) == 0){
        $dividendo /= 2; // si divide per 2
        $GLOBALS["esponente"]++; // incrementiamo l'esponente
        $n_fattori++; // aumentiamo il numero di fattori
    }
    // se è stata efettuata una divisione per 2 registriamo i dati nel risultato
    if ($GLOBALS["esponente"] > 0)
        registra();

    // se il dividendo è superiore ad uno, provare a dividere per 3 ed i successivi numeri dispari
    // fino alla radice quadrata de di numero

    $radice = sqrt($numero);
    $GLOBALS["base"] = 3;
    $GLOBALS["esponente"] = 0 ;

    while (($dividendo > 1) && ($GLOBALS["base"] <= $radice)) {
        if (($dividendo % $GLOBALS["base"]) == 0) {
            $n_fattori++;
            $dividendo /= $GLOBALS["base"];
            $GLOBALS["esponente"]++;
        } else {
            if ($GLOBALS["esponente"] > 0) { // se si sono trovati dei divisori
                $n_fattori++;
                registra();
            }
            $GLOBALS["base"] += 2; // aumentiamo la base
        }
    }
        if ($dividendo > 1) { // se è rimasto un numero senza divisori
            $n_fattori++;
            $GLOBALS["base"] = $dividendo;
            $GLOBALS["esponente"] = 1;
            registra();
        }else
            if ($GLOBALS["esponente"]>0) // se si sono trovati dei divisori
                registra();

        if ($n_fattori==1) // se non si sono trovati divisori
            return($numero);
        else
            return $GLOBALS["risultato"]; // se no, ritorniamo il risultato ottenuto
}

