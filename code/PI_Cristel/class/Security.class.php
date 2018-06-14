<?php

class Security
{
    static function AccessControl($redirect)
    {

        if (!isset($_SESSION['user'])) {
            if (!headers_sent()) {
                header('Location:' . $redirect);
            } else {
                echo '<meta htttp-equiv="refresh" content="0;URL=' . $redirect . '">';
            }

        }
    }

    static function sessionDestroyer() {
        if(isset($_GET['logout'])){
            unset($_SESSION);
            session_destroy();
            Security::redirectTo("index.php");
        }
    }

    static function redirectTo($redirect){
        if(!headers_sent()) {
            header('Location:' . $redirect);
        }else {
            echo '<meta http-equiv="refresh" content="0;URL=' . $redirect . '">';
        }
    }


    static function loginCheck($redirect){
        if (isset($_POST['username'])) {
            //E' possibile riprendere i dati in modo che non mi crasha
            //Mi prende dal vettore POST e mi mette dentro queste variabili, pulendo i caratteri speciali
            $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_SPECIAL_CHARS);
            $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_SPECIAL_CHARS);

            //Una volta che ho le variabili, le posso verificare
            //Creato in Utente
            if ($userid = Utente::authVerify($username, $password)) {
                //Mi cambia la pagina da visualizzare
                $user = new Utente($username, $password);
                $user->setId($userid);
                // $user->setNome('Gianni');
                $user->setNomeutente($username);
                $user->loadFromDB();
                // $user->setCognome('Rossi');
                //Ho creato una variabile di sessione per l'utente
                $_SESSION['user'] = serialize($user);

                self::redirectTo($redirect);
            }else{
                //Svuota il POST
                unset($_POST);
                ?>
                <script>
                    alert("Credenziali errate.");
                </script>
                <?php

            }
        }
    }
}