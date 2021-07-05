import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Button from './Button';

function App() {

  return (
      <div className="App">
         <Header/>
         <Sidebar/>
         <Body/>
         <Footer/>
      </div>
  );
}

export default App;
