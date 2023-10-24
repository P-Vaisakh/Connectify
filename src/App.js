import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';
import View from './pages/View';
import Header from './components/Header';



function App() {
  return (
   <>
   <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='view/:ph' element={<View></View>}></Route>
      </Routes>
   </>
  
  );
}

export default App;
