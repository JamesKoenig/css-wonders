import HtmlHighlighter from './html_highlight';

class CodeSnippet {
  constructor(data) {
    this._data = data;
  }

  renderText() {
    let res = document.createElement('code');
    res.innerText = this._data
    let highlighter = new HtmlHighlighter(res.innerHTML);

    res.classList.add('code-raw');

    res.innerHTML = highlighter.render();
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
