// `<span class=${}>${data}</span>`
class HtmlHightlighter {
  constructor(html_raw_text) {
    this._raw_data = html_raw_text;
    this.result = "";
    this.htmlHighlight();
  }

  enspan(className, str) {
    return `<span class="${className}">${str}</span>`;
  }

  htmlHighlight() {
    let rest = this._raw_data;
    while(rest.indexOf("&lt;") > -1) {
      let startPos = rest.indexOf("&lt;"),
          endPos   = rest.indexOf("&gt;") + 4;
      let substr = rest.substring(startPos,endPos);
      let head   = rest.substring(0,startPos);
      this.result += head + this.enspan("wicked",substr);
      rest = rest.substring(endPos);
    }
    this.result += rest;
  }

  tagHighlight() {
  }

  render() {
    return this.result;
  }
}

export default HtmlHightlighter;
