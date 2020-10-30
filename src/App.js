// import logo from './logo.svg';               - test
// import './App.css';
// import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: red;
//   width: 10px;
//   `

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//               <Title>
//                 Hello World!
//               </Title>
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// ------------------------------
// import React from 'react'
// import Counter from './Counter'

// const App = () => {
//   return <Counter />
// }

// export default App;

// import React from 'react'             - 기본 설정
// import Info from './Info'

// const App = () => {
//   return <Info />
// }

// export default App

// import React, { useState } from 'react'            -Info 컴포넌트 숨기기, 보이기
// import Info from './Info'

// const App = () => {
//   const [visible, setVisible] =  useState(false)
//   return (
//     <div>
//       <button 
//       onClick={() => {
//         setVisible(!visible)
//       }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   )
// }

// export default App

// import React from 'react'                - useReducer로 돌린 Counter 실행문
// import Counter from './Counter'

// const App = () => {
//   return <Counter />
// }

// export default App
 
// import React from 'react'                  - input 상태관리 실행창
// import Info from './Info'

// const App = () => {
//   return <Info />
// }

// export default App

// import React from 'react'                    -useMemo 사용하여 Average 구하기
// import Average from './Average'

// const App = () => {
//   return <Average />
// }

// export default App