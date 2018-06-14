<?php


class Form
{
    //Dichiarazione var di classe
    public $id;
    public $name;
    public $action;
    public $method;
    public $class;

    /**
     * Form constructor.
     * @param $id
     * @param $name
     * @param $action
     * @param $method
     * @param $class
     */
    //Costruttore, solo action e method sono obbligatori
    public function __construct($name, $id, $action, $method = 'POST', $class = null, $extra = null) {
        $this->name = $name;
        $this->id = $id;
        $this->action = $action;
        $this->method = $method;
        $this->class = $class;
        $this->extra = $extra;
    }


    //Apertura del <form>
    public function open_form($extra=NULL)
    {
        echo '<form action="'.$this->action.'" method="'.$this->method.'" id="'.$this->id.'"  name="'.$this->name.'" class="'.$this->class.'" '.$extra.'>';
    }

    //Chisura => </form>
    public function close_form()
    {
        echo  '</form>';
    }

    //Aggiunge gli input, tipo e nome sono obbligatori
    public function add_input($type,$name,$value=NULL,$class=NULL)
    {
        echo '<input class="' . $class . '" type="'.$type.'" name="'.$name.'" value="'.$value.'" placeholder="'.ucfirst($name).'" />' ;
    }
    public function add_req_input($type,$name,$value=NULL,$class=NULL)
    {
        echo '<input class="' . $class . '" type="'.$type.'" name="'.$name.'" value="'.$value.'" placeholder="'.ucfirst($name).'" required/>' ;
    }

    //??
    public function add_select()
    {
    }

    public function  addTextArea(){
        echo '<textarea name="message" id="message" class="form-control" rows="4" cols="25"
              required="required" placeholder="Message"></textarea>';
    }
}

//var_dump($mioForm);


//$mioForm = new Form('../getpost.php','POST','','nome');
//$mioForm1 = new Form('../getpost.php','POST','ciao');
//$mioForm1 = new Form('../getpost.php','POST','ciao','test');
//$mioForm1 = new Form('../getpost.php','POST','ciao','test','form');
//$mioForm1 = new Form('../getpost.php','POST','ciao','test','form');
//$mioForm1->open_form('onsubmit=alert(\'ciao\')');
//var_dump($mioForm1);
