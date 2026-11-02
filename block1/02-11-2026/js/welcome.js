const welcomeMessage = document.querySelector("#welcomeMessage");

function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (const item of cookies) {
      const cookie = item.trim();

			if (cookie.startsWith(name + "=")) {
				return decodeURIComponent(cookie.substring(name.length + 1));
			}
    }

    return "";
}

const visitorName = getCookie("visitorName");

if (visitorName !== "") {
    welcomeMessage.textContent = "Welcome, " + visitorName + "!";
} else {
    welcomeMessage.textContent = "Welcome! Please enter your name first.";
}