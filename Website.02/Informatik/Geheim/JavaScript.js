document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("password-form");
    const passwordInput = document.getElementById("password"); // Korrigierte Variable
    const errorMessage = document.getElementById("error-message");
    const togglePassword = document.getElementById("toggle-password");
    const correctPassword = "ClubMate!";

    // Passwortüberprüfung
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (passwordInput.value.trim() === correctPassword) {
            window.open("./Belohnung/Belohnung.html", "_blank");
        } else {
            errorMessage.style.display = "block";
        }
    });

    // Umschalten der Passwortsichtbarkeit
    togglePassword.addEventListener("click", () => {
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;

        if (type === "text") {
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });
});