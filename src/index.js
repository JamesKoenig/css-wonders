import CodeSnippet from './code_snippet';
import loadFiles from './load_files';
import flexExampleButton from './flex_example_buttons';

const files = [
  "hello_world.html",
  "flex_direction.html",
].map( path => `assets/code_snippets/${path}` );

document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName("body")[0];

  let welcomeHeader = document.createElement("h1")
  welcomeHeader.innerText = "dynamically generated html!";
  body.appendChild(welcomeHeader);

  const callback = response => {
    let snippet = new CodeSnippet(response);
    body.appendChild(snippet.renderText());
    body.appendChild(snippet.render());
  }

  loadFiles(callback,files)/* .then(() => {
  }); */

  let button = document.createElement('button');
  button.innerText = "create other buttons";
  button.onClick = () => {
    body.appendChild(flexExampleButton("row","row"));
    body.appendChild(flexExampleButton("row-reverse","row-reverse"));
  };
  body.appendChild(button);
});
