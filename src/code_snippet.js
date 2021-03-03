class CodeSnippet {
  constructor(filepath) {
    this._data = this.readFile(filepath);
  }

  readFile() {
    return `
<div>
  <p>hello world!</p>
</div>`;
  }

  renderText() {
    let res = document.createElement('pre');
    let escaped = document.createTextNode(this._data);
    res.classList.add('code-raw');

    res.appendChild(escaped);
    return res;
  }

  render() {
    let res = document.createElement('div');
    res.classList.add("code-render");

    res.innerHTML = this._data;

    return res;
  }
}

export default CodeSnippet;
