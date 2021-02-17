const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textbox = document.getElementById('textbox');

function imageMode(colour) {
	image1.src = `./img/undraw_proud_coder_${colour}.svg`;
	image2.src = `./img/undraw_feeling_proud_${colour}.svg`;
	image3.src = `./img/undraw_conceptual_idea_${colour}.svg`;
};

function toggleMode(isDark) {
	nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
	textbox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
	toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
	isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
	isDark ? imageMode('dark') : imageMode('light');
	header.textContent = isDark ? 'Dark' : 'Light';
};

function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		toggleMode(true);
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		toggleMode(false);
	};
};

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		toggleMode(true);
	};
};

toggleSwitch.addEventListener('change', switchTheme);