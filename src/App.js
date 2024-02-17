
import { useState } from 'react';
import './App.css';

function App() {
  const [signupData,  setSignupData] = useState({email:"",password:"",confirmPassword:"",})

  function signupDetails (e){
    console.log(e.target.value)
    if(e.target.name === "email"){


    } else if(e.target.name === "password"){
      if(e.target.value < 8){
        console.log("password is small")
      }
      
    } else{

    }




   setSignupData({...signupData, [e.target.name]: e.target.value})

  }
  function signup(e){
    e.preventDefault();
  
    
    alert("form submitted successfully")
  }



  return (
    <div className="form-container">
        <form onSubmit={signup}>
          <label>Email :</label>
          
          <input type='email' required 
          name='email'
          id='email'
          
          onChange={signupDetails}
          />
          
          <label>Password :</label>
          
          <input type='passowrd'
          name='password'
          id='password'
         
          onChange={signupDetails}
          />
          
          <label>Confirm Password :</label>
          
          <input type='passowrd' 
          name='confirmPassword'
          id='confirmPassword'
         
          onChange={signupDetails}
          />
          
          <button className='signup'>Signup</button>
        </form>
    </div>
  );
}

export default App;
