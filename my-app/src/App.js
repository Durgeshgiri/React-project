
import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react';
function App() {
  const [text, setText] = useState("");
function generateQR(e){
  setText()
}
function handleChange(e){
  setText(e.target.value)
}
  return (
    <>
    <center><nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://durgesoftware.com/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <h1> QR Code</h1>
    <QRCode value={text}/>
    <div className='inpute-here'>
      <p>
        Enter your text here
      </p>
      <input type="text" value={text} onChange={(e)=>
      {handleChange()}} />
      <button>generate</button>
    </div>
    </center>
    
    </>
  );
}

export default App;
