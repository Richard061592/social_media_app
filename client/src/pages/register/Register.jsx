import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [inputs, setInputs] = useState ({
    username: "",
    email: "",
    password:"",
    name: "",
  });

  const [err, setErr] = useState (null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]:e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try{
      await axios.post("http://localhost:8800/api/auth/register/", inputs);
      navigate("/login");
    }catch (err) {
      setErr(err.response.data);
    };
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>My-Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do You Have An Account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
