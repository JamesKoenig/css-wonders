import CodeSnippet from './code_snippet';

document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName("body")[0];

  let welcomeHeader = document.createElement("h1")
  welcomeHeader.innerText = "dynamically generated html!";
  body.appendChild(welcomeHeader);
  let snippet = new CodeSnippet("testPath");
  body.appendChild(snippet.renderText());
  body.appendChild(snippet.render());
});
