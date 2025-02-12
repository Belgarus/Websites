    const userResponse = confirm("Akzeptierst du deinen Cookie?");     // Fragt den Benutzer nach seiner Entscheidung

    const PicturePlace = document.getElementById("image-container");    
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
    
    // Fügt die Überschrift und das Bild zur Seite hinzu
    imageContainer.appendChild(heading);
    imageContainer.appendChild(img);
  