
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Alat } from './components/Alat'
import {  Deskripsi } from './components/Deskripsi';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Alat />
      <Deskripsi />
    </div>
  );
}

export default App;
