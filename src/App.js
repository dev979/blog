import React, {useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import FormText from './component/FormText';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";
function App() {
  const [ mode, setmode] = useState("light"); 
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
       setTimeout(() => {
         setalert(null);
       }, 1500);     
  }
  const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');

        document.body.style.backgroundColor='grey';
        document.body.style.color='white';
        showAlert("! Dark Mode is Enabled","success");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("! Light Mode is Enabled","success");
      }
  }
  const changeBg=(color)=>{
    console.log('called');
    document.body.style.backgroundColor=color;
  }
  return (
    <>
<Router>
<Navbar title='Blogger' about='About Blogger' mode={mode} toggleMode={toggleMode} changeBg={changeBg}/>
   <Alert alert={alert}/>
      
<div className="container my-5">
<Routes>
<Route path="/about" element={<About />}></Route>
<Route path="/" element={<FormText showAlert={showAlert} heading='This is the analyze Box'/>}/>
      
 </Routes>
</div>
        </Router>
        </>
   
  );
}

export default App;
