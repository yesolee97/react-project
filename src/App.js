import React from "react";
import "./App.css";

function Header(props){
  console.log('props', props, props.title);
  return <header>{props.title}</header>
}

function Article(props){
  console.log('props', props, props.title, props.body);
  return  <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Nav(props){
  const lis=[
    <li><a href="">html</a></li>,
    <li><a href="">css</a></li>,
    <li><a href="">javascript</a></li>
  ]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li><a href={"read"+t.id}>{t.title}</a></li>)
  }
  return  <nav>
    <ul>
      {lis}
    </ul>
  </nav>
}
function App() {
  const topics =[
    {id:1, title:'html', body:'html is...'},
    {id:1, title:'css', body:'html is...'},
    {id:1, title:'javascript', body:'html is...'}
  ]
  return (
    <div>
        <Header title="WEB"></Header>
        <Article title="Welcome" body="Hello, WEB"></Article>
        <Article title="해당내용이 바뀌면" body="다르게 출력됌"></Article>
        <Nav topics={topics}></Nav>
    </div>
  );
}

export default App;
