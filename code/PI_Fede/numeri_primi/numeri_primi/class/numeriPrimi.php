<?php
/**
 * Created by PhpStorm.
 * User: Federico
 * Date: 13.03.18
 * Time: 19:21
 */

class numeriPrimi
{
    public $sbagliate = 0;
    public $corrette = 0;
    public $risultato = "";
    public $base = 2;
    public $esponente = 0;
    public $numero = 0;

    public function __construct()
    {

    }

    function restart(){
        $this->corrette = 0;
        $this->sbagliate = 0;
    }

    function getCorrette() {
        return $this->corrette;
    }

    function getSbagliate() {
        return $this->sbagliate;
    }

    function generaNumero($min, $max)
    {
        $this->numero = rand($min, $max);
        return $this->numero;
    }

    public function registra()
    {

        //se la stringa contiene qualcosa, ci aggiungiamo il segno X in linguaggio mathjax
        if (strlen($this->risultato) > 0)
            $this->risultato = $this->risultato . "*";

        //aggiungiamo il numero primo con il quale abbiamo effettuato le divisioni
        $this->risultato = $this->risultato . $this->base;

        // se abbiamo diviso più di una volta, aggiungiamo l'esponente alla stringa del risultato
        if ($this->esponente > 1)
            $this->risultato = $this->risultato . "^" . $this->esponente;

        // risettiamo l'esponente per riutilizzarlo
        $this->esponente = 0;
    }

    public function scomponi()
    {
// formattiamo le variabili di cui avremmo bisogno
        $this->risultato = "";
        $dividendo = $this->numero;
        $n_fattori = 0;
        $this->esponente = 0;
        $this->base = 2;

        // finche dividendo è pari
        while (($dividendo % $this->base) == 0) {
            $dividendo /= 2; // si divide per 2
            $this->esponente++; // incrementiamo l'esponente
            $n_fattori++; // aumentiamo il numero di fattori
        }
        // se è stata efettuata una divisione per 2 registriamo i dati nel risultato
        if ($this->esponente > 0)
            $this->registra();

        // se il dividendo è superiore ad uno, provare a dividere per 3 ed i successivi numeri dispari
        // fino alla radice quadrata de di numero

        $radice = sqrt($this->numero);
        $this->base = 3;
        $this->esponente = 0;

        while (($dividendo > 1) && ($this->base <= $radice)) {
            if (($dividendo % $this->base) == 0) {
                $n_fattori++;
                $dividendo /= $this->base;
                $this->esponente++;
            } else {
                if ($this->esponente > 0) { // se si sono trovati dei divisori
                    $n_fattori++;
                    $this->registra();
                }
                $this->base += 2; // aumentiamo la base
            }
        }
        if ($dividendo > 1) { // se è rimasto un numero senza divisori
            $n_fattori++;
            $this->base = $dividendo;
            $this->esponente = 1;
            $this->registra();
        } else
            if ($this->esponente > 0) // se si sono trovati dei divisori
                $this->registra();

        if ($n_fattori == 1) // se non si sono trovati divisori
            return ($this->numero);
        else
            return $this->risultato; // se no, ritorniamo il risultato ottenuto
    }

   public function verifica() {
        if (isset($_POST['risposta']))
            if ($this->scomponi() == $_POST['risposta']) {
                $this->corrette++;
                return true;
            }else {

                $this->sbagliate++;
                return false;
            }
}

}