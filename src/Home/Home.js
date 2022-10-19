import './Home.css'
import './../App.css'
import React from 'react'
import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Link } from '@mui/material'



function Home(){
    const [page, setPage] = useState(1)
    function goNextPage () {
        if (page === 4) return;
        setPage(page=> page + 1);
    }
    function goPrevPage(){
        setPage (page=> page -1)
    }
return (
    <div className='homeApp'>
        <div className='sideBarDiv'>
            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1666170689/Protern_Logo_znwn8j.svg' alt='protern' />
        </div>
       <div className='mainBarDiv'>
       {page!==4 && 
        <div className='headerTitle'>
        <h1>Welcome to Protern</h1>
        <p>Congratulations on being accepted into the internship. Fill the form accordingly to create your Protern account</p>
        </div>}
        <div className='fullContainer'>
            <div className='SideBarFixed'></div>
            <form>
                {page === 1 && <OnboardingOne />}
                {page === 2 && <OnboardingTwo />}
                {page === 3 && <OnboardingThree />}
                {page === 4 && <OnboardingFour />}

                {page >= 2 && page !==4 && < div className='btnDiv'>
                     <Button variant="contained" disableElevation className='prevBtn' onClick={goPrevPage}> prev</Button></div>}

                {page !== 4 && <div className='btnDiv'>
                     <Button variant="contained" disableElevation className='nextBtn' onClick={goNextPage}> Next</Button>
                </div>}
             
            </form>
        </div>
       </div>
        {/* Each page goes in the form below */}
        
    </div>
);
}
function OnboardingOne(){
    const [value, setValue] = useState()
    return (
        <div className='containerClass'>
              <div className='progressStatusDiv'>
                    <div className='stepContainer firstStep'>
                      <div className='step current mobielActive doneStep'>1</div>
                      <h4 className='currentStep'>Personal information</h4>
                    </div>
                    <div className='stepContainer hideStep '>
                      <div className='step notDone'>2</div>
                      <h4 className='disabledStep'>Program information</h4>
                    </div>
                    <div className='stepContainer hideStep ' id='rightAlign'>
                      <div className='step notDone'>3</div>
                      <h4 className='disabledStep'>Login information</h4>
                    </div>
              </div>

              <div className='acceptanceDiv'>
                  <h2>Acceptance code</h2>
                  <p>Enter the acceptance code as seen in your acceptance letter. <span className='warningRed'>It can only be used 
                    by you once. Without it, you can’t create a Protern account. Do not share.</span> </p>
                  <input type='text' placeholder='PRT-WEJ-ALKL-APOLW' className='accessCode'/>
              </div>

              <div className='stepForm'>
                <div className='inputGroup'>
                    <div className='inputDiv'>
                        <label className='formLabel'>First name</label>
                        <input type='text' placeholder='enter first name' className='formInput' required/>
                    </div>
                    <div className='inputDiv'>
                        <label className='formLabel'>Last name</label>
                        <input type='text' placeholder='enter last name' className='formInput' required/>
                    </div>
                </div>

                <div className='inputGroup'>
                    <div className='inputDiv'>
                        <label className='formLabel'>Email</label>
                        <input type='text' placeholder='example@gmail.com' className='formInput'required/>
                    </div>
                    <div className='inputDiv phoneNumberDiv'>
                        <label className='formLabel'>Phone number</label>
                        <PhoneInput placeholder="Enter phone number" value={value} onChange={setValue}   defaultCountry="RU"/> 
                    </div>
                </div>

                <div className='inputGroup'>
                <div className='inputDiv'>
                        <label className='formLabel'>Country</label>
                        <CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>    
                    </div>

                    <div className='inputDiv'>
                        <label className='formLabel'>Address</label>
                        <input type='text' placeholder='Enter home address' className='formInput'required/>
                    </div>
                    
                </div>

                <div className='inputGroup'>
                <div className='inputDiv'>
                        <label className='formLabel'>City</label>
                        <input type='text' placeholder='e.g. Lekki' className='formInput'required/>
                    </div>

                    <div className='inputDiv'>
                        <label className='formLabel'>State</label>
                        <input type='text' placeholder='e.g. Lagos' className='formInput'required/>
                    </div>
                    
                </div>

                <div className='inputGroup'>
                <div className='inputDiv'>
                        <label className='formLabel'>Gender</label>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                         </FormControl>
                    </div>

                    <div className='inputDiv'>
                        <label className='formLabel'>Age range</label>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="18-22" control={<Radio />} label="18-22" />
                                <FormControlLabel value="23-27" control={<Radio />} label="23-27" />
                                <FormControlLabel value="28-35" control={<Radio />} label="28-35" />
                            </RadioGroup>
                         </FormControl>
                    </div>
                    
                </div>

              </div>
        </div>
    );
}

function OnboardingTwo(){
   
    return (
        <div className='containerClass'>
              <div className='progressStatusDiv'>
                    <div className='stepContainer hideStep'>
                      <div className='step  doneStep'>1</div>
                      <h4 className='currentStep hideStep'>Personal information</h4>
                    </div>
                    <div className='stepContainer'>
                      <div className='step current mobielActive doneStep'>2</div>
                      <h4 className='currentStep'>Program information</h4>
                    </div>
                    <div className='stepContainer hideStep' id='rightAlign'>
                      <div className='step notDone'>3</div>
                      <h4 className='disabledStep'>Login information</h4>
                    </div>
              </div>

             

              <div className='stepForm'>
                <div className='inputGroup'>
                    <div className='inputDiv'>
                        <label className='formLabel'>Program</label>
                         <select required>
                         <option value="value" selected disabled>Choose your program</option>
                             <option>Product design</option>
                             <option>Product management</option>
                             <option>Backend</option>
                             <option>Frontend</option>
                             <option>Mobile development</option>
                             <option>Data science</option>
                         </select>
                    </div>
                    <div className='inputDiv'>
                        <label className='formLabel'>Experience level</label>
                         <select required>
                         <option value="value" selected disabled>Choose experience level</option>
                             <option>Novice</option>
                             <option>Beginner</option>
                             <option>Intermidiate</option>
                             <option>Advanced</option>
                         </select>
                    </div>
                </div>

            

                <div className='inputGroup'>
                <div className='inputDiv'>
                        <label className='formLabel'>Educational level</label>
                         <select required>
                         <option value="value" selected disabled>Choose your level</option>
                             <option>ND</option>
                             <option>BSC/HND</option>
                             <option>MSC</option>
                             <option>No formal tertiary education</option>
                         </select>
                    </div>
                    <div className='inputDiv'>
                        <label className='formLabel'>Employment status</label>
                         <select required>
                         <option value="value" selected disabled>Select Employment status</option>
                             <option>Unemployed</option>
                             <option>Employed</option>
                             <option>Self-employed</option>
                             <option>Student</option>
                         </select>
                    </div>
                </div>
                

              </div>
        </div>
    );
}

function OnboardingThree(){
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return (
        <div className='containerClass'>
              <div className='progressStatusDiv'>
                    <div className='stepContainer hideStep'>
                      <div className='step  doneStep'>1</div>
                      <h4 className='currentStep'>Personal information</h4>
                    </div>
                    <div className='stepContainer hideStep'>
                      <div className='step doneStep'>2</div>
                      <h4 className='currentStep'>Program information</h4>
                    </div>
                    <div className='stepContainer mobileActive' id='rightAlign'>
                      <div className='step current'>3</div>
                      <h4 className='currentStep'>Login information</h4>
                    </div>
              </div>

             

              <div className='stepForm'>
              <div className='inputGroup'>
                    <div className='inputDiv fullInput'>
                        <label className='formLabel'>Username</label>
                        <input type='text' placeholder='Enter username' className='formInput' required/>
                    </div>
                </div>

                <div className='inputGroup'>
                <div className=' passwordInput'>
                        <label className='formLabel'>Choose password</label>
                        <div className='passwordDiv'>
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Set password" />
                            <div className="input-group-btn">
                                <button className="btn btn-outline-primary" onClick={togglePassword}>
                                { passwordType==="password"? <i className="far fa-eye-slash"></i> :<i className="bi bi-eye"></i> }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
        </div>
    );
}

function OnboardingFour(){
    
    return (
        <div className='containerClass'>
              <div className='progressStatusDiv hideStep'>
                    <div className='stepContainer'>
                      <div className='step  doneStep'>1</div>
                      <h4 className='currentStep'>Personal information</h4>
                    </div>
                    <div className='stepContainer'>
                      <div className='step doneStep'>2</div>
                      <h4 className='currentStep'>Program information</h4>
                    </div>
                    <div className='stepContainer' id='rightAlign'>
                      <div className='step doneStep'>3</div>
                      <h4 className='currentStep'>Login information</h4>
                    </div>
              </div>

            <div className='headerTitle congratsTitle'>
                <h1>Congrats!</h1>
                <p>Your are now ready to Learn, Grow and Earn</p>
                <img src='https://res.cloudinary.com/colt-copy/image/upload/v1666166191/confetti_colors_1_mkuhf0.png' className='confettiPng' alt='congrats'/>
            </div>

            <Link className='pryBtn' to='/dashboard'>Sign in</Link>
       
        </div>
    );
}

export default Home