import React from 'react'
import './Login.css'
import '../../App.css'

import { Link } from 'react-router-dom'

import video from '../../LoginAssets/videoplayback.mp4'
import logo from '../../LoginAssets/logo.png'
import { FaUserShield  } from 'react-icons/fa'
import { BsFillShieldLockFill  } from 'react-icons/bs'
import { AiOutlineSwapRight  } from 'react-icons/ai'

const login = () => {
  return (
    <div className='loginPage flex'>
      <div className='container flex'>

          <div className='videoDiv'>
              <video src={video} autoPlay muted loop></video>

              <div className='textDiv'>
                <h2 className='title'></h2>
                <p>where virtual meets reality to cultivate a greener future</p>
              </div>

              <div className='footerDiv flex'>
                <span className='text'>Dont have an account?</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button>

                </Link>

              </div>


          </div>

          <div className='formDiv flex'>
            <div className='headerDiv'>
              <img src={logo} alt="logo image" />
              <h3>Welcome Back!</h3>
            </div>

            <form action="" className='form grid'>
              

              <div className='inputDiv'>
                <label htmlFor="username">Username</label>
                <div className='input flex'>
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Enter Username'/>
                </div>
              </div>


              <div className="inputDiv">
            <label htmlFor="password">Password</label>
            <div className="input flex">
            <BsFillShieldLockFill className='icon'/>
            <input type="password" id='password' placeholder='Enter Password'/>
            </div>

            </div>

            <button type='submit' className='btn flex'>
            <span>Login</span>
            <AiOutlineSwapRight className='icon'/>

          </button>

          <span className='forgotpassword'>
            Forgot your password? <a href="">Click Here</a>
          </span>

          <a href="/dashboard">Dashboard</a>

            </form>

          </div>


      </div>

    </div>
    
  )
}

export default login