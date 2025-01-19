document.addEventListener("DOMContentLoaded", () => {
    // Fragt den Benutzer nach seiner Entscheidung
    const userResponse = confirm("Akzeptierst du deinen Cookie?");
    
    // Wählt die Elemente und erstelle neue Inhalte
    const imageContainer = document.getElementById("image-container");
    
    const heading = document.createElement("h1");
    const img = document.createElement("img");
    
    // Ändert Inhalte basierend auf der Antwort
    if (userResponse) {
      heading.textContent = "Lass dir deinen Cookie schmecken!";
      img.src = "cookie-hacker.webp";
      img.alt = "Cookie Hacker";
    } else {
      heading.textContent = "Kein Cookie für dich... :(";
      img.src = "no-cookie-hacker.webp";
      img.alt = "No Cookie Hacker";
    }
    
    // Fügt die Überschrift und das Bild zur Seite hinzu
    imageContainer.appendChild(heading);
    imageContainer.appendChild(img);
  });
  