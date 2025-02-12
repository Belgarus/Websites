// Fragt den Benutzer nach seiner Entscheidung
const userResponse = confirm("Akzeptierst du deinen Cookie?");

// Holt die Elemente aus dem DOM
const heading = document.getElementById("header");
const img = document.getElementById("picture");

// Ändert Inhalte basierend auf der Antwort
if (userResponse) {
  heading.textContent = "Lass dir deinen Cookie schmecken!";
  img.src = "cookie-hacker.webp";
} else {
  heading.textContent = "Kein Cookie für dich... :(";
  img.src = "no-cookie-hacker.webp";
}