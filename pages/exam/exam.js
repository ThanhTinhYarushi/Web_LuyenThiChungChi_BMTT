const question = [
  {
    questions: 'Biến trong lập trình dùng để làm gì?',
    answers: [
      { text: 'Lưu trữ dữ liệu', correct: true },
      { text: 'Vẽ giao diện', correct: false },
      { text: 'Chạy chương trình', correct: false },
      { text: 'Tạo website', correct: false },
    ],
  },
  {
    questions: 'Câu lệnh nào dùng để khai báo biến trong JavaScript?',
    answers: [
      { text: 'let', correct: true },
      { text: 'var', correct: false },
      { text: 'declare', correct: false },
      { text: 'int', correct: false },
    ],
  },
  {
    questions: 'Trong một hàm, từ khóa nào dùng để trả về giá trị?',
    answers: [
      { text: 'return', correct: true },
      { text: 'break', correct: false },
      { text: 'exit', correct: false },
      { text: 'end', correct: false },
    ],
  },
  {
    questions: 'Lệnh nào dùng để kiểm tra điều kiện trong lập trình?',
    answers: [
      { text: 'if', correct: true },
      { text: 'while', correct: false },
      { text: 'for', correct: false },
      { text: 'switch', correct: false },
    ],
  },
  {
    questions: 'Cấu trúc nào là đúng để tạo một vòng lặp for trong JavaScript?',
    answers: [
      { text: 'for (let i = 0; i < 10; i++)', correct: true },
      { text: 'for (let i = 0; i < 10)', correct: false },
      { text: 'for (i = 0; i <= 10; i++)', correct: false },
      { text: 'for (let i = 0, i < 10, i++)', correct: false },
    ],
  },
  {
    questions: 'Dữ liệu kiểu boolean có mấy giá trị?',
    answers: [
      { text: 'Hai giá trị: true và false', correct: true },
      { text: 'Một giá trị: true', correct: false },
      { text: 'Ba giá trị', correct: false },
      { text: 'Chỉ có false', correct: false },
    ],
  },
  {
    questions: 'Câu lệnh nào dùng để in ra màn hình trong JavaScript?',
    answers: [
      { text: 'console.log()', correct: true },
      { text: 'print()', correct: false },
      { text: 'echo()', correct: false },
      { text: 'alert()', correct: false },
    ],
  },
  {
    questions: 'Cách khai báo một mảng trong JavaScript là gì?',
    answers: [
      { text: 'let arr = []', correct: true },
      { text: 'let arr = {}', correct: false },
      { text: 'let arr = ()', correct: false },
      { text: 'let arr = ""', correct: false },
    ],
  },
  {
    questions: 'Trong lập trình, thuật toán sắp xếp nào là cơ bản nhất?',
    answers: [
      { text: 'Sắp xếp nổi bọt (Bubble Sort)', correct: true },
      { text: 'Sắp xếp nhanh (Quick Sort)', correct: false },
      { text: 'Sắp xếp chọn (Selection Sort)', correct: false },
      { text: 'Sắp xếp hòa hợp (Merge Sort)', correct: false },
    ],
  },
  {
    questions: 'Hàm nào dùng để lấy độ dài của một mảng trong JavaScript?',
    answers: [
      { text: 'arr.length', correct: true },
      { text: 'arr.size', correct: false },
      { text: 'arr.count', correct: false },
      { text: 'arr.getSize()', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.questions;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectBtn.classList.add('correct');
    score++;
  } else {
    selectBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${question.length}`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
