const quiz = [
    {
      question: "Quelle est la capitale de la France ?",
      reponses: ["Paris", "Lyon", "Marseille", "Toulouse"],
      bonneReponse: "Paris"
    },
    {
      question: "Quel langage est principalement utilisé pour le développement web côté client ?",
      reponses: ["Python", "C++", "JavaScript", "PHP"],
      bonneReponse: "JavaScript"
    },
    {
      question: "Combien de continents existe-t-il sur Terre ?",
      reponses: ["5", "6", "7", "8"],
      bonneReponse: "7"
    },
    {
      question: "Qui a écrit *Les Misérables* ?",
      reponses: ["Victor Hugo", "Emile Zola", "Albert Camus", "Molière"],
      bonneReponse: "Victor Hugo"
    },
    {
      question: "Quelle est la formule chimique de l'eau ?",
      reponses: ["H2O", "CO2", "O2", "NaCl"],
      bonneReponse: "H2O"
    },
    {
      question: "En quelle année a eu lieu la Révolution française ?",
      reponses: ["1789", "1848", "1914", "1661"],
      bonneReponse: "1789"
    },
    {
      question: "Quel est le plus grand océan du monde ?",
      reponses: ["Atlantique", "Indien", "Arctique", "Pacifique"],
      bonneReponse: "Pacifique"
    },
    {
      question: "Quel est l’élément chimique dont le symbole est 'Fe' ?",
      reponses: ["Fer", "Fluor", "Francium", "Phosphore"],
      bonneReponse: "Fer"
    },
    {
      question: "Qui a peint la Joconde ?",
      reponses: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Van Gogh"],
      bonneReponse: "Léonard de Vinci"
    },
    {
      question: "Quel est le résultat de 8 x 7 ?",
      reponses: ["54", "56", "64", "58"],
      bonneReponse: "56"
    }
  ];
  

let validate = document.querySelector('button')

let question = document.querySelector('h2');
let reponses = document.querySelectorAll('.reponse-case p');






function generateAnswer(quiz){
    let random = Math.floor(Math.random() * quiz.length)

    question.innerHTML = quiz[random].question;
    
    for(let i in quiz[random].reponses){
        console.log(reponses[i].innerHTML = quiz[random].reponses[i])
    }

}

validate.addEventListener('click', () =>  {
    generateAnswer(quiz);
})

reponses.forEach(rep => {
    rep.addEventListener('click', (quiz) => {
        console.log('Tu as cliquer sur : ' + rep.textContent)

        console.log(quiz[random].question)


    })
})




// if (reponses[i] == quiz[random].bonneReponse){
//     console.log('Bonne reponse')
// }





generateAnswer(quiz);






