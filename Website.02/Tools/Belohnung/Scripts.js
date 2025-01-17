document.addEventListener("DOMContentLoaded", () => {
    // Frage den Benutzer nach seiner Entscheidung
    const userResponse = confirm("Akzeptierst du deinen Cookie?");
    
    // Wähle das passende Bild basierend auf der Antwort
    const imageContainer = document.getElementById("image-container");
    const img = document.createElement("img");
    
    if (userResponse) {
      img.src = "cookie-hacker.webp";
      img.alt = "Cookie Hacker";
    } else {
      img.src = "no-cookie-hacker.webp";
      img.alt = "No Cookie Hacker";
    }
    
    // Füge das Bild zur Seite hinzu
    imageContainer.appendChild(img);
  });
  