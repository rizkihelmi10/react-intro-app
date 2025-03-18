import React, {useState} from "react";
function Form(){
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        if(email === "admin@gmail.com" && password === "admin123"){
            alert("Login Success");
        }else{
            alert("Login Failed");
        }
    }
    return (
        <div>
            <form>
                <input type="email" placeholder="Email" onChange={handleEmail} />
                <br></br>
                <input style={{marginTop:"20px"}} type="password" placeholder="Password" onChange={handlePassword}/>
                <br></br>
                <button onClick={handleLogin} style={{color:"white", backgroundColor:"black", marginTop:"20px"}} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;