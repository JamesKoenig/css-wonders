import CodeSnippet from './code_snippet';

const filePath = "assets/code_snippets/flex_direction.html";

export default async htmlElement => {
  let exampleRoot = document.createElement("div");

  let source = await fetch(filePath).then(res => res.text());

  let snippet = new CodeSnippet(source);

  let invis = snippet.render();

  invis.style.visibility = "hidden";
  invis.style.position   = "absolute";

  htmlElement.appendChild(snippet.renderText());
  htmlElement.appendChild(invis);
  htmlElement.appendChild(snippet.render());
}
