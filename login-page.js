loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Jayce" && password === "D4gcXVvXGaih7YsW9LhQsWoEe") {
        alert("You have successfully logged in.");
        window.location.href = "/GOOD/index.html";
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
