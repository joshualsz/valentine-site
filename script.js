const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = "YAYYY 🥰 I love you ❤️";
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 700 - 300;
  const y = Math.random() * 400 - 200;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
  
    heart.innerHTML = "❤️";
  
    heart.style.left = Math.random() * 100 + "vw"; // random horizontal
    heart.style.top = Math.random() * 100 + "vh";  // random vertical
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 4 + 4) + "s";
  
    heartsContainer.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 8000);
  }
  

// spawn every 300ms
setInterval(createHeart, 300);
