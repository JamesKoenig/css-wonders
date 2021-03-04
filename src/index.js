import CodeSnippet from './code_snippet';

document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName("body")[0];

  let welcomeHeader = document.createElement("h1")
  welcomeHeader.innerText = "dynamically generated html!";
  body.appendChild(welcomeHeader);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'assets/code_snippets/hello_world.html', true);
  xhr.onload = function () {
    let snippet = new CodeSnippet(this.response);
    body.appendChild(snippet.renderText());
    body.appendChild(snippet.render());
  }
  xhr.send();
});
