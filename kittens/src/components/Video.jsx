import React, { Component } from "react";
class Video extends Component {
  state = {
    w: "300",
    h: "300",
  };
  componentDidMount() {
    console.log("Component Did Mount!");
  }
  render() {
    console.log("props", this.props);
    const p = this.props.details;
    const w = Math.floor(Math.random() * 501) + 200;
    const h = Math.floor(Math.random() * 300) + 200;
    const url = p.imgsrc + w + "/" + h;
    console.log("Before Render");
    return (
      <div>
        <img src={url} />
        <h1>{p.title}</h1>
        <h3>{p.author}</h3>
        <h3>{p.views}</h3>
      </div>
    );
  }
}

export default Video;
