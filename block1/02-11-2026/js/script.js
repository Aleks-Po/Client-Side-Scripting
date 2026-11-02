const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#visitorName");
const errorMessage = document.querySelector("#errorMessage");

function saveVisitorName(event) {
    event.preventDefault();

    const visitorName = nameInput.value.trim();

    if (visitorName === "") {
			errorMessage.textContent = "Please enter your name.";
			return;
    }

    document.cookie = "visitorName=" + encodeURIComponent(visitorName) + "; max-age=3600; path=/; SameSite=Lax";

    window.location.href = "welcome.html";
}

nameForm.addEventListener("submit", saveVisitorName);