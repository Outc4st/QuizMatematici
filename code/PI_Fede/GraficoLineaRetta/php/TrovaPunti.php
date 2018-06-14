<?php
/**
 * Created by PhpStorm.
 * User: Federico
 * Date: 12.06.18
 * Time: 08:53
 */

class TrovaPunti
{

    public $x;
    public $y;
    public $n1;
    public $n2;
    public $n3;
    public $segno;
    public $corretti;
    public $sbagliati;


    public function generaNumero($min,$max){
        $this->n1 = rand($min,$max);
        $this->n2 = rand($min,$max);
        $this->n3 = rand($min,$max);
        $this->segno = rand(1,2);
    }

    public function getImplicita(){
        switch ($this->segno) {
            case 1:
                echo "$this->n1 x + $this->n2 y = $this->n3";
                break;
            case 2:
                echo "$this->n1 x - $this->n2 y = $this->n3";
                break;
        }
    }

    public function getEsplicita(){
        switch ($this->segno) {
            case 1:
                echo "$this->n1 x = $this->n2 y - $this->n3";
                break;
            case 2:
                echo "$this->n1 x = $this->n2 y + $this->n3";
                break;
        }

    }

    public function calcolaX(){
        switch ($this->segno){
            case 1:
                $this->x = $this->n3 / $this->n1 - $this->n2 / $this->n1;
                break;
            case 2:
                $this->x = $this->n2 / $this->n1 - $this->n3 / $this->n1;
                break;
        }

    }

    public function calcolaY(){
        switch ($this->segno){
            case 1:
                $this->y = $this->n3 / $this->n2 - $this->n1 / $this->n2;
                break;
            case 2:
                $this->y = $this->n1 / $this->n2 - $this->n3 / $this->n2;

        }
    }

    public function verifica($x, $y){
        if ($x = $this->x && $y = $this->y){
            $this->corretti++;
        }else {
            $this->sbagliati++;
        }
    }

    public function generateHint(){
        switch ($this->segno){
            case 1:
                return array("calcoliamo la X : $this->x = $this->n3 / $this->n1 - $this->n2 / $this->n1",
                             "calcoliamo la y : $this->y = $this->n3 / $this->n2 - $this->n1 / $this->n2;");
                break;
            case 2:
                return array("calcoliamo la X : $this->x = $this->n2 / $this->n1 - $this->n3 / $this->n1",
                             "calcoliamo la y : $this->y = $this->n1 / $this->n2 - $this->n3 / $this->n2;");
                break;
        }

    }

}