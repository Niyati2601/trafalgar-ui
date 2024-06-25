import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
   <div className='app' style={{overflow:'hidden'}}>
    <Header />
    <Main />
    <Footer />
   </div>
  );
}

export default App;
