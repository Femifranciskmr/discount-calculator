
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';




function App() {
  const [amount,setAmount]=useState(0);
  const [discount,setDiscount]=useState(0);
  const [paid,setPaid]=useState(0);
  const [saved,setSaved]=useState(0);

const calculate=(e)=>{
  if(!amount||!discount){
    alert("please fill the form")
  }
  else{
    const youpaid=amount-(amount*discount/100)
    const discountprice=amount-youpaid;
    console.log(youpaid);
    console.log(discountprice);
    setPaid(youpaid)
    setSaved(discountprice)
  }
}
const reset=(e)=>{
  setAmount(0)
  setDiscount(0)
  setPaid(0)
    setSaved(0)
}

  return (
    <div className="App">
      <div className="bodysec">
        <div className="head">
          <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">calculate with us</Navbar.Brand>
            <Nav className="me-auto">
          </Nav>
          </Container>
          </Navbar>
        </div>
          <div className="bannersec">
            <div className="left">
            <img src="leftbannerimg.gif" alt="" width={300} height={300}/> 
            </div>
           
            <div className="right">
                <h1>discount calculator</h1>
                <div className="discountsec">
                    <div className="disleft">
                      <TextField id="outlined-basic" onChange={(e)=>setAmount(e.target.value)} value={amount||''} label="amount" variant="outlined" />
                      <Button variant="contained" onClick={e=>calculate(e)}>calculate</Button>
                    </div>
                    <div className="disright">
                      <TextField id="outlined-basic" onChange={(e)=>setDiscount(e.target.value)} value={discount||''} label="discount" variant="outlined" />
                      <Button variant="outlined"onClick={e=>reset(e)} >reset</Button>
                    </div>
                </div>
                <div className="resultsec">
                    <div className="resultdisc">
                    <h1>you paid:&#x20B9;{paid}</h1>
                    </div>
                    <div className="amountsec">
                    <h3>you saved:&#x20B9;{saved}</h3>
                    <h3>orginal price:&#x20B9;{amount}</h3>
                    </div>

                </div>
            </div>
          </div>
        <div className="footersec">
          <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="#home">copy right</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default App;
