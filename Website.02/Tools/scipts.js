document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("password-form");
    const input = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const correctPassword = "meinpasswort"; // Dein festgelegtes Passwort

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Verhindert das Standard-Formularverhalten (Seitenreload)

        // Überprüfe, ob das Passwort korrekt ist
        if (input.value.trim() === correctPassword) {
            console.log("Passwort korrekt! Öffne neue Seite...");
            // Öffne die Belohnungsseite in einem neuen Fenster/Tab
            window.open("./Belohnung/Belohnung.html", "_blank");
        } else {
            console.log("Falsches Passwort");
            // Fehlernachricht anzeigen
            errorMessage.style.display = "block";
            errorMessage.textContent = "Falsches Passwort. Bitte erneut versuchen.";
        }
    });
});
