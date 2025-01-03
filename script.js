const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesClickCount = 0; // Counter to track clicks on the "Yes" button

yesBtn.addEventListener("click", () => {
  yesClickCount++;

  if (yesClickCount % 2 === 1) {
    question.innerHTML = "Yay, see you on the 19th!";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    yesBtn.textContent = "Aww";
    noBtn.style.display = "none";
    yesBtn.style.marginLeft = "0";
  } else {
    question.innerHTML = "Can't wait to see you there! Kanmani❤️";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjQ0dzRscDZjM2Y4ZGNzZTZmZXRieGJvdTE5ZDIwd2pmMWM5c3llOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eiRpSPB8OSGVcbkOIJ/giphy.webp"; // Another GIF URL
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  }
});

// Add hover animation for the "Aww" button
yesBtn.addEventListener("mouseover", () => {
  const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️"; // Add the heart emoji as content
    document.body.appendChild(heart);

    // Position the heart randomly within the button area
    const rect = yesBtn.getBoundingClientRect();
    const randomX = Math.floor(Math.random() * rect.width);
    const randomY = Math.floor(Math.random() * rect.height);
    heart.style.left = `${rect.left + randomX}px`;
    heart.style.right = `${rect.right + randomX}px`;
    heart.style.top = `${rect.top + randomY}px`;

    // Remove the heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 2000); // Adjust duration as needed
  };

  // Continuously create hearts
  const interval = setInterval(createHeart, 200);
  setTimeout(() => clearInterval(interval), 2000); // Adjust duration as needed
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
