import axios from "axios"
import { useState } from "react"

export function Signup(){
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    console.log("Form Data:", params);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return(
    <div id="signup">
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name: </label>
          <input name= "name" type="name" className="form-control" id="name" placeholder="First & Last Name" autoComplete="name"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email: </label>
          <input name= "email" type="email" className="form-control" id="email" placeholder="user@test.com" autoComplete="email"/>
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">Password: </label>
          <input name= "password" type="password" className="form-control" id="password" maxLength={20} placeholder="8-20 Characters"/>
        </div>
        <div className="col-md-12">
          <label htmlFor="password_confirmation" className="form-label">Confirmation Password: </label>
          <input name= "password_confirmation" type="password" className="form-control" id="password_confirmation" maxLength={20} placeholder="Re-Enter Password"/>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="image" className="form-label">Profile Photo: </label>
          <input name= "image" className="form-control" type="file" id="image"/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary shadow">Sign Up</button>
        </div>
      </form>
    </div>
  )
}