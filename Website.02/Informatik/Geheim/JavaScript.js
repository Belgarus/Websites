//Passwortüberprüfung
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("password-form");
    const input = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const correctPassword = "ClubMate!"; // Mein festgelegtes Passwort

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Verhindert das Standard-Formularverhalten (Seitenreload)

// Überprüft, ob das Passwort korrekt ist
        if (input.value.trim() === correctPassword) {
            window.open("./Belohnung/Belohnung.html", "_blank");
        } else {
            console.error("Falsches Passwort")
            errorMessage.style.display = "block";
            errorMessage.textContent = "Falsches Passwort. Bitte erneut versuchen.";
        }
    });
});

//Umschalten der Passwortsichtbarkeit
document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
        // Umschalten des Passworttyps
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;

        // Icon entsprechend ändern
        if (type === "text") {
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });
});
