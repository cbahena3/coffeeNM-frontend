import axios from "axios";

export function Logout(){
  const handleClick = (event) =>{
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  }

  return(
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}