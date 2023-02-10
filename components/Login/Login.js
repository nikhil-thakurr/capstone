import React from 'react'
import pic from './undraw_login_re_4vu2 (1).svg'
import {useState} from 'react';
import Icon from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed'
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'
// import './validation.js'
import './Validation.js'
import './style.css'
// import { MDBValidation } from 'mdb-react-ui-kit';
function Login() {
  const [type, setType] = useState('password');

  // validated states
  const [lowerValidated, setLowerValidated]=useState(false);
  const [upperValidated, setUpperValidated]=useState(false);
  const [numberValidated, setNumberValidated]=useState(false);
  const [specialValidated, setSpecialValidated]=useState(false);
  const [lengthValidated, setLengthValidated]=useState(false);

  const handleChange=(value)=>{
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})')
    if(lower.test(value)){
      setLowerValidated(true);
    }
    else{
      setLowerValidated(false);
    }
    if(upper.test(value)){
      setUpperValidated(true);
    }
    else{
      setUpperValidated(false);
    }
    if(number.test(value)){
      setNumberValidated(true);
    }
    else{
      setNumberValidated(false);
    }
    if(special.test(value)){
      setSpecialValidated(true);
    }
    else{
      setSpecialValidated(false);
    }
    if(length.test(value)){
      setLengthValidated(true);
    }
    else{
      setLengthValidated(false);
    }
  }

  return (
    <div>

      {/* <h1>hey</h1> */}
      <section className='Form my-4 mx-5'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-5 '>
              <img src={pic}
                className='img-fluid img' alt='image' />
            </div>
            <div className='col-lg-7 px-5 pt-5'>
              {/* <h2 className='font-weight-bold py-3'>Hey</h2> */}
              <h3 style={{ color: "#536DFE" }}><span >Sign</span> Into Your Account</h3>

              <form className="needs-validation" novalidate>
                <div className='form-row'>

                  <div className='col-lg-7'>


                    <input type="email" required placeholder='Email' className='form-control my-3 p-2' />

                    <div className=' col-lg-7 input-with-icon-div form-control'>
          <input  placeholder="********" className='custom-input ' type={type}
          onChange={(e)=>handleChange(e.target.value)}/>
          {type==="password"?(
            <span className='icon-span' onClick={()=>setType("text")}>
              <Icon icon={basic_eye_closed} size={18}/>
            </span>
          ):(
            <span className='icon-span' onClick={()=>setType("password")}>
              <Icon icon={basic_eye} size={18}/>
            </span>
          )}
        </div>
        <main className='tracker-box'>
          <div className={lowerValidated?'validated':'not-validated'}>
            {lowerValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one lowercase letter
          </div>
          <div className={upperValidated?'validated':'not-validated'}>
            {upperValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one uppercase letter
          </div>
          <div className={numberValidated?'validated':'not-validated'}>
            {numberValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one number
          </div>
          <div className={specialValidated?'validated':'not-validated'}>
            {specialValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one special character
          </div>
          <div className={lengthValidated?'validated':'not-validated'}>
            {lengthValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least 8 characters
          </div>
        </main>
                  </div>
                </div>
               
                {/* <div className='form-row'>
                  <div className='col-lg-7'>
                    <input type="Password" placeholder='******' className='form-control my-3 p-2' required />
                   
                  </div>
                </div> */}
                <div className='form-row'>
                  <div className='col-lg-7'>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Login</button>

                  </div>
                </div>
                <a href='#' style={{ textDecoration: "none" }}>Forgot Password</a>
                <p>Don't Have An Account ? <a style={{ textDecoration: "none" }} href='#'>Register Here</a></p>
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}


export default Login