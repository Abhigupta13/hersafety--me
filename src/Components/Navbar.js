import React from 'react'
import '../App.css'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light" style={{height:'60px'}}>
  <div className="container-fluid">
    <a  className="navbar-brand mx-5" href="/home"><img src="https://play-lh.googleusercontent.com/YI0x2uebd60h9h6v3jnMv3b4RlGSP2CwxUyNhlDDp0PbWKeNgm1CiF_L51hRZtdzIL0" width="60px" alt=""/> HerSafety</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link active" href="/shared">Shared Incidents and Tips</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link active" href="/analytics">Analytics</a>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link active" href="/ngo">Top NGOs</a>
        </li>
        <li className="nav-item dropdown mx-4">
          <a className="nav-link dropdown-toggle active" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/faqs">FAQs</a></li>
            <li><hr className='dropdown-divider'/></li>
            <li><a className="dropdown-item" href="/sex">Sexual Violence Laws</a></li>
            <li><hr className='dropdown-divider'/></li>
            <li><a className="dropdown-item" href="/fir">FIR filing</a></li>
            <li><hr className='dropdown-divider'/></li>
            <li><a className="dropdown-item" href="/chatbot">Chat & Video Call Support</a></li>
          </ul>
        </li>
        {/* <li>
        <a className="nav-link active bg-danger ms-5 border-round" href="/help">Help &#9888;</a>
        </li> */}
      </ul>
      <a class="btn btn-danger" href="/help" role="button">Help &#9888;</a>
      <a class="btn btn-danger ms-5" href="/video" role="button">video </a>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar