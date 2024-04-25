const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
	console.log(darkModeToggle.checked);
	if (darkModeToggle.checked) {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

function enableDarkMode() {
	document.body.classList.remove("light-theme");
}

function disableDarkMode() {
	document.body.classList.add("light-theme");
}
