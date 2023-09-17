import './accueil.css';
import { Route, Routes } from 'react-router-dom';
import {AccueilComponent} from './AccueilComponent';
import {Login} from './Login';
import {Register} from './Register.jsx';
import {NavBar} from './NavBar';
import {CreationBien} from './CreationBien';
import {DescriptionBien} from './DescriptionBien';
import {Projects} from './projects';
import {CGUPage} from './cguPage';
import { Footer } from './Footer';
import { Apropos } from './Apropos';
import {Profile} from './Profile';

const App = () => {
  
  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AccueilComponent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/cgu" element={<CGUPage/>} />
          <Route path="/apropos" element={<Apropos/>} />
          <Route path="/creationBien" element={<CreationBien/>} />
          <Route path="/descriptionBien" element={<DescriptionBien/>} />
          <Route path="/projects" element={<Projects/>} />
		  <Route path="/profile" element={<Profile/>} />
        </Routes>
        <Footer/>
      </>
            
  );
}

export default App;
