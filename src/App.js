import './App.css';
import Card from './components/Card/Card';
import { projects } from './components/data';


function App() {
  return (
    <div className=''>
     {projects.map((project ,index)=>{
      return(<Card {...project} key={index} i={index}/>)
     })}
    </div>
  );
}

export default App;
