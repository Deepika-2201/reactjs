import React,{useState} from 'react'
function App() {
  const[num1,setNum1]=useState("")
  const[num2,setNum2]=useState("")

  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1>Real-Time calculator</h1>
        <input type="number" placeholder='Enter the First Value' onChange={(e)=>setNum1(e.target.value)}/>
        <input type="number" placeholder='Enter the Second Value' onChange={(e)=>setNum2(e.target.value)}/>
        <div style={{height:"200px",
        width:"300px",
        border:"5px inset black",
        marginLeft:"300px",
        marginTop:"20px",
        backgroundColor:"aliceblue"}}>
          <h3>Result :</h3>
          <p><strong>Addition :</strong>{a+b}</p>  
          <p><strong>Subtraction :</strong>{a-b}</p>
          <p><strong>Multiplication :</strong>{a*b}</p>
          <p><strong>Divison :</strong>{b==0 ?"can't divided by zero":a/b}</p>
          
        </div>
        
    </div>
  )
}

export default App
