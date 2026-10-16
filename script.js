const $ = (id) => document.getElementById(id);

$("startBtn").addEventListener("click", () => {
  $("safezone").scrollIntoView({behavior:"smooth"});
  showModal("WELCOME, PLAYER 2 ♡", "Has desbloqueado tu lugarcito seguro. No hay prisa, no hay presión. Solo un montón de amor de parte de tu Ferchis.");
});

function showModal(title, message) {
  $("modalTitle").textContent = title;
  $("modalText").textContent = message;
  $("modal").hidden = false;
  $("closeModal").focus();
}
function closeModal(){ $("modal").hidden = true; }
$("closeModal").addEventListener("click", closeModal);
$("modalOk").addEventListener("click", closeModal);
$("modal").addEventListener("click", (event) => { if(event.target === $("modal")) closeModal(); });
document.addEventListener("keydown", (event) => { if(event.key === "Escape") closeModal(); });

document.querySelectorAll(".loot-item").forEach((item) => {
  item.addEventListener("click", () => {
    $("lootMessage").textContent = item.dataset.message;
    item.style.borderColor = "var(--mint)";
    item.querySelector(".loot-art").textContent = "♥";
  });
});

// Mini-game: tap falling hearts; it stops after 20 seconds or at 10 points.
let gameScore = 0;
let gameActive = false;
let gameTimeout = null;
let spawnInterval = null;
function endGame(won=false) {
  gameActive = false;
  clearTimeout(gameTimeout);
  clearInterval(spawnInterval);
  document.querySelectorAll(".falling-heart").forEach(el => el.remove());
  $("gameResult").textContent = won
    ? "ACHIEVEMENT UNLOCKED: 10 corazones reunidos. Premio: un abrazo enorme de Ferchis. 🏆💗"
    : `Terminó la misión con ${gameScore} corazón(es). ¡Te ganaste un apapacho igual!`;
  $("gameStart").textContent = "↻ PLAY AGAIN";
}
function spawnHeart() {
  if (!gameActive) return;
  const board = $("gameBoard");
  const heart = document.createElement("button");
  heart.className = "falling-heart";
  heart.type = "button";
  heart.textContent = ["♥","♡","💗"][Math.floor(Math.random()*3)];
  heart.setAttribute("aria-label","Atrapar corazón");
  heart.style.left = `${Math.random()*88+2}%`;
  heart.style.animationDuration = `${2.3 + Math.random()*1.7}s`;
  heart.addEventListener("click", () => {
    if (!gameActive) return;
    gameScore++;
    $("score").textContent = String(gameScore).padStart(2,"0");
    heart.remove();
    if (gameScore >= 10) endGame(true);
  });
  heart.addEventListener("animationend", () => heart.remove());
  board.appendChild(heart);
}
$("gameStart").addEventListener("click", () => {
  clearTimeout(gameTimeout); clearInterval(spawnInterval);
  document.querySelectorAll(".falling-heart").forEach(el => el.remove());
  gameScore = 0; gameActive = true;
  $("score").textContent = "00";
  $("gameWelcome").hidden = true;
  $("gameResult").textContent = "¡Atrápalos! Toca los corazones antes de que se vayan.";
  $("gameStart").textContent = "PLAYING… ♥";
  spawnHeart();
  spawnInterval = setInterval(spawnHeart, 650);
  gameTimeout = setTimeout(() => { if(gameActive) endGame(false); }, 20000);
});

document.querySelectorAll(".photo-slot input[type=file]").forEach((input) => {
  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const img = $(input.dataset.photo);
    const placeholder = input.parentElement.querySelector(".photo-placeholder");
    img.src = URL.createObjectURL(file);
    img.hidden = false;
    placeholder.hidden = true;
  });
});

$("openPlaylist").addEventListener("click", () => {
  const urlText = $("playlistUrl").value.trim();
  try {
    const url = new URL(urlText);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("bad protocol");
    window.open(url.href, "_blank", "noopener,noreferrer");
  } catch {
    showModal("PLAYLIST NOT FOUND ♫", "Pega un enlace válido de Spotify, YouTube u otro servicio para abrir tu playlist.");
  }
});

$("voiceFile").addEventListener("change", () => {
  const file = $("voiceFile").files && $("voiceFile").files[0];
  if (!file) return;
  const player = $("voicePlayer");
  if (player.dataset.objectUrl) URL.revokeObjectURL(player.dataset.objectUrl);
  const objectUrl = URL.createObjectURL(file);
  player.src = objectUrl;
  player.dataset.objectUrl = objectUrl;
  player.hidden = false;
  player.load();
});

const hugs = [
  "⊂(・▽・⊂) ABRAZO PIXELADO ENTREGADO 💗",
  "MUA MUA MUA × 999. Besos enviados con éxito. 😚",
  "Tu Ferchis te recuerda: pausa, agüita y respirito. No tienes que hacerlo todo hoy. 🫂",
  "Achievement unlocked: eres muy, muy querido. ♡"
];
$("hugBtn").addEventListener("click", () => {
  $("hugResult").textContent = hugs[Math.floor(Math.random()*hugs.length)];
});
