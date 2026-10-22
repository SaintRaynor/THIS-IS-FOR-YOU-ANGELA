// Function to generate floating hearts and kisses continuously
function spawnFloatingItems() {
  const item = document.createElement('div');
  item.classList.add('floating-item');
  
  const symbols = ['❤️', '💋', '💖', '💕', '💘', '😘', '💗'];
  item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
  
  item.style.left = Math.random() * window.innerWidth + 'px';
  item.style.fontSize = (Math.random() * 20 + 16) + 'px';
  item.style.animationDuration = (Math.random() * 3 + 3) + 's';
  
  document.body.appendChild(item);
  
  setTimeout(() => {
    item.remove();
  }, 6000);
}

// Spawn a new heart or kiss every 300 milliseconds
setInterval(spawnFloatingItems, 300);

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