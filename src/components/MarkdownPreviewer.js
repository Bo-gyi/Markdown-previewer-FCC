import React from "react";
import { marked } from "marked";

class MarkDownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.value
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    // parse to markdown format text
    const markedText = marked.parse(this.state.input, { breaks: true });
    function createMarkup() {
      return { __html: markedText };
    }
    return (
      <div className="container">
        <div className="editor-container">
          <div className="bar">
            <p>Editor</p>
          </div>
          <textarea
            id="editor"
            type="text"
            value={this.state.input}
            onChange={this.changeHandler}
          />
        </div>
        <div className="preview-container">
          <div className="bar">
            <p>Preview</p>
          </div>
          <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      </div>
    );
  }
}

export default MarkDownPreviewer;
