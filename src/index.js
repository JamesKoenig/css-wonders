
document.addEventListener('DOMContentLoaded', () => {
  body = document.getElementsByTagName("body")[0];

  welcomeHeader = document.createElement("h1")
  welcomeHeader.innerText = "dynamically generated html!";
  body.appendChild(welcomeHeader);
});
