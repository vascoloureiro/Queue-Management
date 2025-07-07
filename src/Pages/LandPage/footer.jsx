import './CSS/footer.css'
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

export default function Footer() {

  return( <>
    <footer>
      <div className="f-main">
        <div>
          <h1>
            <span id="red">Q:</span>
            <span>BETTER</span>
          </h1>
          <div>
            <h4>Get to know us</h4>
          </div>
          <div className="email-cmp">
          <h4>info@q-better.com</h4> 
      
          </div>
        </div>


      </div>

      <div className="f-secundary">
        {/* 1 coluna */}
        <div className="lista-um">
          <h3>Management</h3>
          <div className="opt-list">
            <a>Bloom</a>
            <a>Qube</a>
            <a>Qube API</a>
            <a>QR-Queue</a>
            <a>About</a>


          </div>
        </div>

        {/*2coluna */}
        <div className="lista-um">
          <h3>Legal </h3>
          <div className="opt-list">
            <a>Team</a>
            <a>About us</a>
            <a>FAQ</a>
            <a>Term Privacy</a>
          </div>
        </div>

        {/* 3 coluna */}
        <div className="lista-tres">
          <div className="title-bx" >
          <h2>Social  </h2>
          </div>
          <div className="icons-bx">
            <GrInstagram size="30px" />
            <FaLinkedin size="30px" />
            <FaYoutube size="30px" />
          </div>
          <div className="email-bx">
            <h2>Newsletter </h2>
            <h6>Don’t miss to subscribe to our new feeds, kindly fill the form below</h6>
            <div className="email-inp">
              <input type="email" id="email" name="email" placeholder='Email'/>
              <button className="btn-submit"><i><FaPaperPlane color="white"/></i></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="cpy-bx">
      <h6>Copy right @2024 All rights reserve by Team Project 50/10</h6>
    </div>
  </>
  )
}