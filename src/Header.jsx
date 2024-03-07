import { Link } from "react-router-dom"

export function Header(){
  return(
    <div >
      <nav className="navbar bg-body-tertiary justify-content-end">
 {/* NEED TO FIX HEADER WHEN CLICKING HEADER ALL STAY BLUE */}

        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/images/coffeeCup2.jpeg" width="30" height="24" className="d-inline-block align-text-top" alt="Coffee Cup"/>
            CoffeeNM
          </Link>
        </div>

        <ul className="nav nav-pills mb-3 justify-content-end" id="pills-tab" role="tablist">
          <Link to="/" className="nav-item" role="presentation">
            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
          </Link>
          
          <Link to="/soonToAdd" className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
            </Link>
          <Link to="/Login" className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Login</button>
          </Link>
        </ul>
      </nav>
    </div>
  )
}