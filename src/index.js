import CodeSnippet from './code_snippet';
import flexExampleButton from './flex_example_buttons';
import flexExample from './flex_example';

const file = 'assets/code_snippets/flex_direction.html';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');

  const callback =
    response => {
      let snippet = new CodeSnippet(response);
      //reference root dom element is enclosed in callback
      root.appendChild(snippet.renderText());
      root.appendChild(snippet.render());
    }

  fetch(file)
    .then( x => x.text() ) //convert to text
    .then( response => callback(response) )
});
