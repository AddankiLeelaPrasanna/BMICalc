import React,{useState} from 'react'
import './Bmi.css'
function Bmi() {
  
  const [height, setHeightValue] = useState('');
  const [weight, setWeightValue] = useState('');
  const [result, setResult] = useState('');
  

  const calculateBmi = () => {
      if (height===0 || weight===0) {
        alert('enter valid weight and height');
        return;
      }else{
          const heightInMeters = height *0.01;
          const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
          setResult(bmi);
      }     
    };
    return (
        <body>
        <div class="container">
            <h1>BMI Calculator</h1>
            <div class="input1">
              Height(cm): <input type="number" value={height} onChange={(e) => setHeightValue(e.target.value)} />
            </div>
            <div class="input2">
                Weight(kg):<input type="number"  value={weight} onChange={(e) => setWeightValue(e.target.value)}/>
            </div>
            <button  onClick={calculateBmi}> Click to Calculate BMI </button>
            
                <div id="result">
                    <p>
                        Your BMI: {result}
                    </p>
                </div>
                </div>
                <h3>Body Mass Index Chart</h3>
                <img src="https://www.medindia.net/patients/calculators/images/body-mass-index-bmi-chart.jpg"  width="40%"/>
            
            </body>
    )
}
export default Bmi