loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Jayce" && password === "D4gcXVvXGaih7YsW9LhQsWoEe") {
        document.location.href = "https://hudware-console.github.io/UserPortal";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
