import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import Welcome from './Components/Welcom';
import MemsList from './Components/MemsList';
const MemsData = require('./data/data.json');


function App() {

  return (
    
    <>
      <h1>welcome to ASAC</h1>
      <p>this is python course </p>
      <FirstComponent />
      <Welcome name='lama' favColor='blue' />
      <Welcome name='yousef' favColor='red' />
      {
        MemsData.map(meme => {
          return (
            <MemsList
              img={meme.image}
              alt={meme.bottomText}
              title={meme.name}
            />
          );
        })

      }


      
    </>
  
  
  );
}

export default App;
