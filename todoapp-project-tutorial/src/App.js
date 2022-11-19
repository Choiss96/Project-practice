import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// redux not use

//버튼 스타일(styled-components)
const ChangeButton = styled.button`
  width: 10vw;
  height: 3vh;
  color: black;
  background-color: white;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* direction: ltr; */
  /* align-items: center; */
  /* justify-items: auto; */
`;

// 버튼 적용
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChangeButton> Learn React </ChangeButton>
        </a>
      </header>
    </div>
  );
}

export default App;
