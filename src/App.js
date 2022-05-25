import logo from './logo.svg';
import './App.css';
import Hook from './modules/api';
import Head from './modules/header';
import Foot from './modules/foot';

function App() {
  return (
    <div className="Mundo">
      <Head/>

      <div className='titulo'>
        <center>
          <h2>POSTS</h2>
        </center>
      </div>
      <div className='postss'>
        <Hook/> {/* Conectado el módulo */} 
      </div>
      <div className="Footer">
        <Foot/>
      </div>
    </div>
  );
}

export default App;
