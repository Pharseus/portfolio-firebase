// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css';

import App from './App.tsx'
// import Navbar from './components/Navbar.tsx'
// import { Footer } from './components/Footer.tsx'

import 'remixicon/fonts/remixicon.css'
// import { PreLoader } from './components/PreLoader.tsx'

import "animate.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Test from './content/App/Test.tsx';
import Main from './pages/Main.tsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root!).render (
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/home' element={<App/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/galeri' element={<Main/>} />
    </Routes>
  </Router>
);

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <PreLoader/>
//     <div className='container mx-auto px-4'>
//       <Navbar />
//       <App2 />
//       <Footer/>
//     </div>
//   </StrictMode>,
// )

// import { Navigate } from 'react-router-dom';

// const main = () => {
//   const navigate = useNavigate();
//   return (
//     <h3>About</h3>
//     <button onClick={() => navigate('about')}> Check about</button>
//   )
// }
