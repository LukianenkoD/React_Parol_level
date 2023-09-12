import React, { useState, useEffect } from "react";
import "../Style/App.css";
// import ModalWindow from './ModalWindow';

function Parol(props) {
  const [parol, setParol] = useState("password");
  const [paroll, setParoll] = useState('');
  const [blockRed, setBlockRed] = useState('none');
  const [blockYellow, setBlockYellow] = useState('none');
  const [blockGreen, setBlockGreen] = useState('none');

// console.log(blockRed);

// console.log(blockYellow);
// console.log(blockGreen);

  function handleSubmit(e){
    e.preventDefault();
    const inputVale = e.target.parols.value;
    setParoll(inputVale)
    // e.target.reset();
  }
  // if(paroll.length>0){
  //   setBlock('block')
  // }
  let length = paroll.length;
  // console.log(length);

  function changeBlock(){
  if(length<3){
   setBlockRed('block')
   setBlockGreen('none')
   setBlockYellow('none')
    }
  else if(length>=3 && length<6){
  setBlockYellow('block')
  setBlockRed('none')
  setBlockGreen('none')
  }else if(length>=6){
   setBlockGreen('block')
   setBlockYellow('none')
   setBlockRed('none')
    }
  }

  // const changer = props.func;
  function showParol() {
    if (parol === "password") {
      setParol("text");
    } else {
      setParol("password");
    }
  }

  // function hideParol(){
  //   setParol('password')

  //   }
  // useEffect(function changeBlock(){
  //   if(length>=0){
  //    return setBlockRed('block')
  //     }
  //   else if(length>=3 && length<=6){
  //    return setBlockYellow('block');
  //   }else{
  //     return setBlockGreen('block')
      
  //     }
  //   },[])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <form onSubmit={handleSubmit}  className="parol" action="">
          <h1 style={{ margin: "60px" }}>Enter parol</h1>
          <div style={{ textAlign: "center" }}>
            <input   name="parols"
              onMouseOver={() => {
                props.func("block");
              }}
              onMouseDown={() => {
                props.func("none");
              }}
              onMouseOut={() => {
                props.func("none");
              }}
              style={{ margin: "20px" }}
              type={parol}
              placeholder="Enter parol" required
            />
            
          </div>
          
  
              <div style={{display:"flex", justifyContent:"center"}}>
              <div style={{display:blockRed, backgroundColor:'red', height:'2px', width:"80px"}}>
                <p style={{color:'red'}}>easy</p>
              </div>
              <div style={{display:blockYellow, backgroundColor:'yellow', height:'2px', width:"80px"}}>
                <p style={{color:'yellow'}}>normal</p>
              </div>
              <div style={{display:blockGreen, backgroundColor:'green', height:'2px', width:"80px"}}>
                <p style={{color:'green'}}>strong</p>
              </div>
    
              </div>

          
            
             
            
         

          

          <div style={{ textAlign: "center", margin:'20px' }}>
            <input onClick={showParol} type="checkbox" />
            <p>Show parol</p>
          </div>
          <div style={{ textAlign: "center", margin:'20px' }}>
            <button onClick={changeBlock}  >Check parol</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Parol;
