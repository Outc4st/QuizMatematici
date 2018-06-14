$(document).ready(function () {
    function Scomponi(numero) {

        var divisore = numero;

        var risultato = "";
        // cicliamo per trovare la soluzione
        for (divisore; divisore > 0; divisore--) {
            // se il resto corrisponde a 1 allora abbiamo il risultato
            if (numero === 1) {
                document.write(risultato);
            } else if (math.isPrime(divisore)) { // se invece è superiore, controliamo che il divisore sia prima
                if (isInt((numero / divisore))) { // se è primo controliamo che il risultato della divisione sia un intero
                    numero /= divisore;
                    risultato += divisore.toString(); // lo aggiungiamo alla stringa
                }
            }ß
        }
    }
});