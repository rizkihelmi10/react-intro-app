import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from './Home'
import React, {use, useState} from "react";
import { useNavigate } from "react-router-dom";
import image from '../assets/image.png';

function LoginPage(){

        const [email, setEmail] = useState(""); 
        const [password, setPassword] = useState("");
        const [login, setLogin] = useState(false);
        const HasUppercase = /[A-Z]/.test(password);
        const minLength = 8;    
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        let navigate = useNavigate();
        const routeChange = () => {
            let path = '/home';
            navigate(path);
        }
        const handleEmail = (e) => {
            setEmail(e.target.value);
        }
        const handlePassword = (e) => {
            setPassword(e.target.value);
        }
        const validatePassword = () => {
            if(password.length < minLength){
                alert("Password must be at least 8 characters");
            }else if(!HasUppercase){
                alert("Password must contain at least one uppercase letter");
            }else if(!hasSpecialChar){
                alert("Password must contain at least one special character");
            }
            else{
                return true;
            }
        }

        const handleLogin = (e) => {
            if(validatePassword() && (email === "admin@gmail.com" && password === "Admin123@") && validateEmail(email)){ 
                alert("Login Success");
                setLogin(true);
                // window.location.href = "/home";
                routeChange();
            }else{
                alert("Login Failed");
            }
        }
        
          const validateEmail = (email) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
          };

    return(
        <>
        <div style={{marginRight:"800px", alignItems:"center"}}>
        {!login && <h1>Login Page</h1>}
        </div>
        <div style={{marginRight:"800px", alignItems:"center"}}>
            {!login && <form>
                <input style={{width:'411px', height: '60px', borderRadius:'5%', border: 'solid'}} type="email" placeholder="Email" onChange={handleEmail} />
                <br></br>
                <input style={{marginTop:"20px", width:'411px', height: '60px', borderRadius:'5%', border: 'solid'}} type="password" placeholder="Password" onChange={handlePassword}/>
                <br></br>
                <button onClick={handleLogin} style={{color:"white", backgroundColor:"#0061FF", marginTop:"20px",  width:'411px', height: '60px'}} type="submit">Submit</button>
            </form>}
           
        </div>     
           <div>
        <Routes>
            <Route path = "/home" element = {<HomePage/>}></Route>
            
            </Routes> 
        </div>
        <div style={{marginLeft:"800px", marginTop:"-400px"}}>
            {!login && <img src={image} alt="image" style={{width:"100%", height:"100%"}}/>}
        </div>

        </>
    )
}

export default LoginPage;