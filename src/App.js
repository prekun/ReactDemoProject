import React from 'react';
import './App.css';
import Post from './Post';
import Post1 from './Post1';
import Child1 from './Child1';
import Comment from './Comment';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>  {
  const Test1 = 70;
  const Test2 = 70;
  const Name1 = "Jooo";
  const Score1 = " 30";
  // const Name2 = "Kooo";
  const RandomNum = Math.random();
  return (
    <div className='App'>
      <p>{Test1 + Test2}</p>

      {
          RandomNum < 0.5 ?
          <div>you lose</div>:
          <div>you win</div>
      }
      <p>{RandomNum}</p>
      <div className='Child1'>
      <Child1 FirstName = "Prempree" score = '56'/>
      <Child1 FirstName = "Lunpila" score = '70'/>
      <Child1 FirstName = {Name1 + Score1}/>
      </div>

      <div className='Post'>
      <Post myId="1">hellssso</Post>
      <Post myId="2">hi</Post>
      </div>

      <div className='Post1'>
      <Post1 myId="1">rdthygjuchs</Post1>
      <Post1 myId="2"><h1>OOOPPPP</h1></Post1>
      <Post1 myId="3">
        <Comment userId = "1" data = "5 Stars"/>
        <Comment userId = "2" data = "10 Stars"/>
      </Post1>
      </div>

        <form  className='Form'>
        <h1>Login</h1>
        <label htmlFor = "name">User</label>
        <input type = "text"></input>
        <label>password</label>
        <input type = "password"></input>
        <button>OK</button>
        <Comment/>
        </form>
    </div>
  );
}

export default App;
