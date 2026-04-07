const BIRTH_DATE = "2008-05-15"; // ENTER BIRTHDAY HERE (YYYY-MM-DD)

function updateCountdown() {
    const start = new Date(BIRTH_DATE);
    const now = new Date();
    const diff = now - start;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();
