import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return(
    <div>
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="row g-3 " onSubmit={handleSubmit}>
        <div className="col-md-8 ">
          <label htmlFor="email" className="form-label">Email: </label>
          <input name= "email" type="email" className="form-control " id="email" placeholder="user@test.com" autoComplete="email"/>
        </div>
        <div className="col-md-8">
          <label htmlFor="password" className="form-label">Password:</label>
          <input name= "password" type="password" className="form-control" id="password" placeholder="8-20 Characters" maxLength={20}/>
        </div>            
        <div className="col-12">
          <button type="submit" className="btn btn-primary shadow">Login</button>
        </div>
        <div className="col-8">
        <>No Account? </> 
          <Link to="/signup" className=" icon-link icon-link-hover" style={{ '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)' }}> 
         Sign Up!
          </Link>
        </div>
      </form>
    </div>
  )
}