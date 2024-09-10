import Input from "./Input"
import { useState } from "react"
import { calculateInvestmentResults } from "../src/util/investment";
import Results from "./results";

export default function Header(){
    const [initial, setInitial] = useState(0);
    const [annual, setAnnual] = useState(0)
    const [expected, setExpected] = useState(0)
    const [duration, setDuration] = useState(0)
    
    
    function handleInitial(event){
        setInitial(Number(event.target.value));
      
    }
    function handleAnnual(event){
        setAnnual( event.target.value);
    }
    function handleExpected(event){
        setExpected( event.target.value);
    }
    function handleDuration(event){
        setDuration( event.target.value);
    }
    let investment = { initialInvestment: initial,
         annualInvestment: Number(annual),
         expectedReturn:  Number(expected),
        duration: Number(duration) }
  //  console.log(initial,annual,expected,duration);
    
    //console.log(initial+annual+expected+duration)
    return(<header id ="header">
            <img src = "..\public\investment-calculator-logo.png"></img>
            <h1> Investment Calculator</h1>
            <div id ='user-input' >
                <div className="input-group">
                    <Input  onChange={handleInitial} type="number" label="Initial investment" />
                    <Input  onChange={handleAnnual} type="number" label="Annual investment" />
                </div>
               <div className="input-group"> 
               <Input  onChange={handleExpected} type="number" label="Expected Return" />
               <Input  onChange={handleDuration} type="number" label="Duration" />
               </div>
                
            </div>
            {investment.duration<1 && <p className="center">Please enter a duration more than or equal to 1</p>}
     {investment.duration>=1 && <Results investment={investment}/>  }
        </header>
    )
}