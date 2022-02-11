import React, {useState} from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
  
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '배고파']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        title.map((a) => {
          return (<div className="list">
        <h3> {a} </h3>
        <p>2월 12일 발행</p>
        <hr/>
      </div>)
        })
      }
    </div>
  );
}

export default App;
