const questions = [
  {
    question: "In 'The Legend of Zelda', who is the main protagonist?",
    answers: ["Link", "Zelda", "Ganon", "Impa"],
    correct: 0,
    images: [
      "../images/link.jpg", 
      "../images/zelda.jpg",   
      "../images/ganon.jpg", 
      "../images/impa.jpg"
    ]
  },
  {
    question: "Which game features the character 'Mario' as the main protagonist?",
    answers: [ "The Legend of Zelda", "Super Mario Bros.", "Metroid", "Donkey Kong"],
    correct: 1,
    images: [
      "../images/tloz.jpg",
      "../images/mario.jpg",
      "../images/metroid.jpg", 
      "../images/donkeykong.jpg"
    ]
  },
  {
    question: "In the Netflix animated show 'Castlevania', who is my favorite character?",
    answers: ["Dracula", "Hector", "Alucard", "Isaac", ],
    correct: 3,
    images: [
      "../images/Dracula.jpg",   
      "../images/Hector.jpg", 
      "../images/Alucard.jpg",
      "../images/Isaac.jpg"
    ]
  },
  {
    question: "Which anime features the characters 'Goku' and 'Vegeta'?",
    answers: ["Dragon Ball Z", "Naruto", "One Piece", "Attack on Titan"],
    correct: 0,
    images: [
      "../images/goku.jpg", 
      "../images/vegeta.jpg",   
      "../images/naruto.jpg", 
      "../images/onepiece.jpg"
    ]
  },
  {
    question: "Which 'Nintendo' console introduced the concept of motion controls?",
    answers: ["Wii", "Switch", "GameCube", "3DS"],
    correct: 0,
    images: [
      "../images/wii.jpg", 
      "../images/switch.jpg",   
      "../images/gamecube.jpg", 
      "../images/3ds.jpg"
    ]
  },
  {
    question: "What was the first game released in the 'Half-Life' series?",
    answers: ["Half-Life", "Half-Life 2", "Portal", "Left 4 Dead"],
    correct: 0,
    images: [
      "../images/halflife.jpg", 
      "../images/halflife2.jpg",   
      "../images/portal.jpg", 
      "../images/left4dead.jpg"
    ]
  },
  {
    question: "Which car company is known for the luxury vehicle '206'?",
    answers: ["Toyota", "Peugeot", "Mercedes-Benz", "Audi"],
    correct: 1,
    images: [
      "../images/toyota.jpg", 
      "../images/peugeot.jpg",   
      "../images/mercedes.jpg", 
      "../images/audi.jpg"
    ]
  },
  {
    question: "Which video game features a battle royale mode called 'Warzone'?",
    answers: ["Call of Duty", "Fortnite", "Apex Legends", "PUBG"],
    correct: 0,
    images: [
      "../images/cod.jpg", 
      "../images/fortnite.jpg",   
      "../images/apexlegends.jpg", 
      "../images/pubg.jpg"
    ]
  },
  {
    question: "In the 'Star Wars' universe, who is Luke Skywalker's father?",
    answers: ["Darth Vader", "Obi-Wan Kenobi", "Han Solo", "Yoda"],
    correct: 0,
    images: [
      "../images/darthvader.jpg", 
      "../images/obiwan.jpg",   
      "../images/hansolo.jpg", 
      "../images/yoda.jpg"
    ]
  },
  {
    question: "Did you enjoy this quiz?",
    answers: ["YESSSSSS!!", "Kinda?", "I mean..", "lol no"],
    correct: 0,
    images: [
      "../images/a.jpg", 
      "../images/b.jpg",   
      "../images/c.jpg", 
      "../images/d.jpg"
    ]
  },
];


let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

const quizContainer = document.getElementById("quiz-container");

function renderQuestion() {
  const question = questions[currentQuestionIndex];

  quizContainer.innerHTML = `
    <div class="question-header">
      <h3>Question ${currentQuestionIndex + 1}/${questions.length}</h3>
      <p>${question.question}</p>
    </div>
    <div class="question-container">
      ${question.answers
        .map(
          (answer, index) => `
            <button class="answer-btn" style="background-image: url('${question.images[index]}');" onclick="handleAnswer(${index})">${answer}</button>
          `
        )
        .join('')}
    </div>
    <div class="nav-btns">
      ${currentQuestionIndex > 0 ? `
        <button class="nav-btn" onclick="previousQuestion()">Précédent</button>
      ` : ''}
      
      ${currentQuestionIndex < questions.length - 1 ? `
        <button class="nav-btn" onclick="nextQuestion()">Suivant</button>
      ` : ''}
    </div>
  `;
}

function handleAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  const existingAnswerIndex = userAnswers.findIndex(
    answer => answer.question === question.question
  );

  const newAnswer = {
    question: question.question,
    selected: question.answers[selectedIndex],
    correct: question.answers[question.correct],
    isCorrect: selectedIndex === question.correct,
  };

  if (existingAnswerIndex !== -1) {
    userAnswers[existingAnswerIndex] = newAnswer;
  } else {
    userAnswers.push(newAnswer);
  }

  score = userAnswers.filter(answer => answer.isCorrect).length;

  nextQuestion();
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizContainer.innerHTML = `
    <div class="result-container">
      <h3>Résultats</h3>
      <p>Vous avez obtenu ${score}/${questions.length} points!</p>
      <ul class="list-group">
        ${userAnswers
          .map(
            (answer, index) => `
            <li class="list-group-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
              <strong>Q${index + 1}:</strong> ${answer.question}<br/>
              <strong>Votre réponse:</strong> ${answer.selected}<br/>
              <strong>Bonne réponse:</strong> ${answer.correct}
            </li>
          `
          )
          .join('')}
      </ul>
    </div>
  `;
}

renderQuestion();