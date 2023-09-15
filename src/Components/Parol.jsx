import React, { useState, useEffect } from "react";
import "../Style/App.css";


function Parol(props) {
  const [parol, setParol] = useState("password");
  const [paroll, setParoll] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const inputVale = e.target.parols.value;
    setParoll(inputVale)
    // e.target.reset();
  }
  

  let parolData = paroll;
  let parolCheck = /[0-9]/.test(parolData);
  // console.log(parolCheck);
  let length = paroll.length;

  function showParol() {
    if (parol === "password") {
      setParol("text");
    } else {
      setParol("password");
    }
  }


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
              <div style={{display:length>0 && length<5?"block":"none", backgroundColor:'red', height:'2px', width:"80px"}}>
                <p style={{color:'red'}}>easy</p>
              </div>
              <div style={{display:length>=5 && length<=7?"block":"none", backgroundColor:'yellow', height:'2px', width:"80px"}}>
                <p style={{color:'yellow'}}>normal</p>
              </div>
              <div style={{display:length>7?"block":"none", backgroundColor:'green', height:'2px', width:"80px"}}>
                <p style={{color:'green'}}>strong</p>
              </div>
    
              </div>

          <div style={{ textAlign: "center", margin:'20px' }}>
            <input onClick={showParol} type="checkbox" />
            <p>Show parol</p>
          </div>
          <div style={{ textAlign: "center", margin:'20px' }}>
            <div style={{display:parolCheck?"block":"none", color:"white", margin:"10px"}}>
            <p>Parol include number</p>
            </div>
            <div>
            <button  >Check parol</button>
            </div>
           
          </div>
        </form>
      </div>
    </>
  );
}

export default Parol;
