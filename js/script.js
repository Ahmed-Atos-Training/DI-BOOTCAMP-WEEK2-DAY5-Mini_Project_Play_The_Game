let numberOfTrials = undefined;
let computerNumber = undefined;


/**
 * 
 * @param {Number} entry 
 */
function checkNumber(entry) {
    let repeat = false;

    // Conversion de la saisie en nombre
    entry = Number(entry);
    if (!isNaN(entry)) {
        // Si la saisie est un nombre
        if (entry >= 0 && entry <= 10) {

            // Si la valeur saisie est bien compris entre 0 et 10
            compareNumbers(entry, computerNumber)
        } else {
            while (!repeat) {
                let getNumber = prompt('Enter a number between 0 and 10');
                checkNumber(getNumber);
            }
            // La saisie est un nombre qui n'est pas entre 0 et 10
            // alert('Sorry it’s not a good number, Goodbye')
        }

    } else {
        // Si la saisir ne correspond pas a un nombre on stoppe avec le message : Sorry Not a number, Goodbye
        alert('Sorry Not a number, Goodbye')
    }
}


// First Part
/**
 * Cette fonction permet de :
 *  1. Demander l'avis de l'utilisateur pour debuter le jeu
 *  2. Demander un nombre a l'utilisateur compris entre 0 et 10
 *  3. genere un nombre aleatoire compris entre 0 et 10
 */
function playTheGame() {

    // Demander a l'utilisateur s'il veut bien jouer
    let answers = confirm("Do you want to start the game?");
    numberOfTrials = 0
    if (answers == false) {
        // Si la demande est refusée on stoppe le jeu avec le message  : 'No problem, Goodbye
        alert('No problem, Goodbye')
    } else {
        // Demander a l'utilisateur de fournir un nombre entre 0 et 10
        let getNumber = prompt('Enter a number between 0 and 10');
        computerNumber = Math.floor(Math.random() * 11);

        checkNumber(getNumber);
    }

}

//Second Part
/**
 * 
 * @param {Number} userNumber 
 * @param {Number} computerNumber 
 */
function compareNumbers(userNumber, computerNumber) {

    // numberOfTrials++;
    console.log(numberOfTrials);
    numberOfTrials++;
    if (numberOfTrials >= 4) {
        alert('out of chances')
    } else if (userNumber == computerNumber) {
        alert('WINNER');
    } else if (userNumber > computerNumber) {
         alert('Your number is bigger then the computer’s, guess again');
         let getNumber = prompt('Enter a number between 0 and 10');
 
         checkNumber(getNumber);
    } else if (userNumber < computerNumber) {
        alert('Your number is smaller then the computer’s, guess again');
        let getNumber = prompt('Enter a number between 0 and 10');
 
         checkNumber(getNumber);
    }

}