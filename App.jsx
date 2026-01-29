import React, { useState } from 'react'

function Calculator() {
  const[num1,setNum1]=useState("");
  const[num2,setNum2]=useState("");

  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1 style={{textDecoration:"underline"}}></h1>
      <input type="number" placeholder='Enter the first value'
      onChange={(e)=>setNum1(e.target.value)} />
      <input type="number" placeholder='Enter the second value'
      onChange={(e)=>setNum2(e.target.value)} />
       <div style={{height:"250px",
        width:"300px",
        border:"1px inset black",
        marginLeft:"280px",
        marginTop:"20px",
        backgroundColor:"lightblue",
        textAlign:"left"}}>
          <h3>Result</h3>
          <p><strong>Addition :</strong>{a+b}</p>
          <p><strong>Subtraction :</strong>{a-b}</p>
          <p><strong>Mulitiplication :</strong>{a*b}</p>
          <p><strong>Division:</strong></p>
          {b==0 ?"can't divide by zero":a/b}
        </div> 
    </div>
  )
}

export default Calculator
