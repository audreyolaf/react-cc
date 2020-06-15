import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";

function App() {
  const videoprop = [
    {
      w: "300",
      h: "200",
      imgsrc: "http://placekitten.com/",
      title: "Cute Kitten",
      author: "Kitty Queen",
      views: "1M",
      a1: "abc",
    },
    {
      w: "400",
      h: "300",
      imgsrc: "http://placekitten.com/",
      title: "Fierce Kitten",
      author: "Kitty Monster",
      views: "600K",
      a1: "abc",
    },
    {
      w: "300",
      h: "300",
      imgsrc: "http://placekitten.com/",
      title: "Tiger kitten",
      author: "Mama Kitty",
      views: "100M",
      a1: "abc",
    },
    {
      w: "300",
      h: "500",
      imgsrc: "http://placekitten.com/",
      title: "Sleepy Kitten",
      author: "Lazy Cat",
      views: "1.5M",
      a1: "abc",
    },
  ];

  return (
    <div className="App">
      {videoprop.map((v) => (
        <Video details={v} />
      ))}
    </div>
  );
}

export default App;
