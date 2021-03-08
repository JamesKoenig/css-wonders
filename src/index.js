import CodeSnippet from './code_snippet';
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
  const callbacks = [
    response => {
      let snippet = new CodeSnippet(response);
      body.appendChild(snippet.renderText());
      body.appendChild(snippet.render());
    },
    response => {
      let snippet = new CodeSnippet(response);
      body.appendChild(snippet.renderText());
      body.appendChild(snippet.render());
      body.appendChild(flexExampleButton("row"));
      body.appendChild(flexExampleButton("row-reverse"));
      body.appendChild(flexExampleButton("column"));
      body.appendChild(flexExampleButton("column-reverse"));
    },
  ]

  files.map((filePath,idx) =>
    fetch(filePath)
      .then(x => x.text())
      .then(response => callbacks[idx](response))
  );

  let button = document.createElement('button');
  button.innerText = "create other buttons";
  button.onclick = () => {
    body.appendChild(flexExampleButton("row"));
    body.appendChild(flexExampleButton("row-reverse"));
    body.appendChild(flexExampleButton("column"));
    body.appendChild(flexExampleButton("column-reverse"));
  };
  body.appendChild(button);
});
