// Respostas corretas para o quiz
const correctAnswers = {
  q1: "B",
  q2: "B",
  q3: "A",
};

// Evento ao clicar no botão "Enviar Respostas"
document.getElementById('submit-btn').addEventListener('click', function () {
  let score = 0; // Contador de acertos
  const form = document.getElementById('quiz-form');
  const formData = new FormData(form);

  // Itera sobre as respostas corretas e verifica as respostas do usuário
  for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
      if (formData.get(question) === correctAnswer) {
          score++;
      }
  }

  // Exibe o resultado na tela
  const totalQuestions = Object.keys(correctAnswers).length;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;

  // Mensagem adicional com feedback
  if (score === totalQuestions) {
      resultDiv.textContent += " Parabéns, você é um expert em sustentabilidade!";
  } else if (score > totalQuestions / 2) {
      resultDiv.textContent += " Bom trabalho! Continue aprendendo sobre sustentabilidade.";
  } else {
      resultDiv.textContent += " Que tal revisar os conceitos e tentar novamente?";
  }
});
