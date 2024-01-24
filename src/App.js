import {useState} from "react"

function App() {
  
  const container = {
    display:"flex",
    justifyContent : "center",
    alignItems : "center",
    flexDirection: "column",
  }

  const buttonContainer = {
    display:"flex",
    justifyContent :"space-between",
    alignItems : "space-between",
    flexWrap: "wrap",
    width : "40vh",
  }
  const buttonStyle = {
    border:"1px solid back",
    width : "50px",
    height :"50px",
    borderRadius:"10px",
    margin:"10px",
  }
  const  [inputCal,setInputCal] = useState("")
  const [calculation,setCalculation] = useState("")
  const onClickhandle = (e)=>{
    if(e.target.value === "="){
      if(inputCal === ""){
        setCalculation("Error")
      }
      else{
        setCalculation(eval(inputCal))
      }
    }
    else if (e.target.value === "C"){
      setInputCal("")
      setCalculation("")
    }
    else{
      setInputCal((prevInput)=>{
        return prevInput + e.target.value
      })
    }
  }
  let buttonValues = ["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"]
  return (
    <div style={container}>
      <div><h1>React Calculator</h1></div>
      <div><input type="text" value={inputCal} disabled/></div>
      {calculation !== ""?<div>{calculation}</div>:null}
    <div style={buttonContainer}>
      {buttonValues.map((value,index)=>(
        <button key={index} style={buttonStyle} onClick={(e)=>{onClickhandle(e)}} value={value}>{value}</button>
      ))}
    </div>
    </div>
  );
}

export default App;
