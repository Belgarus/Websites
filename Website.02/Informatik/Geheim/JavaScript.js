    const form = document.getElementById("password-form");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const togglePassword = document.getElementById("toggle-password");
    const correctPassword = "ClubMate!"; // mein Passwort

    // Passwortüberprüfung
    form.addEventListener("submit", (e) => { // Code wird ausgeführt, wenn Benutzer auf den Button klickt
        e.preventDefault();                                    //Verhindert das die Seite neu lädt
        if (passwordInput.value === correctPassword) {
            window.open("./Belohnung/Belohnung.html", "_blank");
        } else {
            errorMessage.style.display = "block";
        }
    });

    // Umschalten der Passwortsichtbarkeit
    togglePassword.addEventListener("click", () => {
        const type = passwordInput.type === "password" ? "text" : "password"; //berprüft, ob der aktuelle Text versteckt ist
        passwordInput.type = type;

        if (type === "text") {
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });