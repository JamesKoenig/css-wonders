class CodeSnippet {
  constructor(data) {
    this._data = data;
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
