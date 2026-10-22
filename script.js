// Switches between stages when clicking YES or NO on the first question
function handleWrongAnswer(answer) {
  document.getElementById('stage-1').classList.add('hidden');
  
  if (answer === 'yes') {
    document.getElementById('stage-yes').classList.remove('hidden');
  } else {
    document.getElementById('stage-no').classList.remove('hidden');
  }
}

// Makes the "NO" button run away randomly when hovered or clicked
function moveNoButton() {
  const noBtn = document.getElementById('no-btn');
  const container = document.querySelector('.container');
  
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width - 20;
  const maxY = containerRect.height - btnRect.height - 20;

  const randomX = Math.floor(Math.random() * maxX) - (containerRect.width / 2) + (btnRect.width / 2);
  const randomY = Math.floor(Math.random() * maxY) - (containerRect.height / 2) + (btnRect.height / 2);

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Triggers the success/forgiven screen
function handleForgive() {
  showSuccessStage();
}

function showSuccessStage() {
  document.getElementById('stage-1').classList.add('hidden');
  document.getElementById('stage-yes').classList.add('hidden');
  document.getElementById('stage-no').classList.add('hidden');
  document.getElementById('stage-success').classList.remove('hidden');
}