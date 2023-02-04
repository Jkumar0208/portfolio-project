import './App.css';
import jugesh from "./images/jugesh-img.png";
import todo from "./images/todo-img.jpg";
import ipAddress from "./images/ip-address-img.jpg";
import weather from "./images/weather-app-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      {/* NAVBAR */}
      <header>
        <div className="container">
          <nav className="navbar fixed-top navbar-light nav-bar">
            <div className="navbar-brand py-4" href="#">
              <table>
                <tr>
                  <td>
                    <img src={jugesh} className="d-inline-block align-top nav-img" alt="" />
                  </td>
                  <td>
                    <span className='img-name'>Jugesh Kumar</span>
                  </td>
                </tr>
              </table>
            </div>
            <span className="navbar-text navbar-icons">
              <a className="btn btn-floating m-1 footer-linkedin" href="#!" role="button"
              ><FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#000000" }}
                /></a>

              <a className="btn btn-floating m-1 footer-linkedin" href="https://github.com/Jkumar0208" target="_blank" rel="noopener noreferrer" role="button"
              ><FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#000000" }}
                /></a>
            </span>
          </nav>
        </div>
      </header>

      {/* PROJECTS */}
      <body>
        <div className="container">
          <div className="App">
            <h1 className='h1-margin'>PROJECTS</h1>
            <hr className='hr-line'></hr>
          </div>

          {/* TO-DO APP */}
          <div className="row justify-content-md-center mt-5">
            <div className="col col-xl-6 col-sm-12 center-text">
              <div className="card" style={{ width: "31rem", height: "20rem", border: "3px solid #ffc107" }}>
                <img className="card-img-top card1-img" src={todo} alt="todo" />
              </div>
            </div>
            <div className="col col-xl-6 col-sm-12 center-text">
              <div class="card text-center border-0" style={{ width: "31rem", backgroundColor: "#F5F5F5" }}>
                <div class="card-body">
                  <h3 className='mb-4 project-name'>To-Do App</h3>
                  <a href="https://jk-todo-app.netlify.app" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-warning btn-lg button-margin btn-space custom">Live View</button>
                  </a>
                  <a href="https://github.com/Jkumar0208/to-do-app.git" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-warning btn-lg custom">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WHAT'S MY IP PROJECT */}
          <div className="row justify-content-md-center mt-5">
            <div className="col col-xl-6 col-sm-12 center-text">
              <div className="card" style={{ width: "31rem", height: "20rem", border: "3px solid #ffc107" }}>
                <img className="card-img-top card2-img" src={ipAddress} alt="ipAddress" />
              </div>
            </div>
            <div className="col col-xl-6 col-sm-12 center-text">
              <div class="card text-center border-0" style={{ width: "31rem", backgroundColor: "#F5F5F5" }}>
                <div class="card-body">
                  <h3 className='mb-4 project-name'>What's My IP</h3>
                  <button type="button" class="btn btn-warning btn-lg button-margin btn-space custom">Live View</button>
                  <button type="button" class="btn btn-warning btn-lg custom">Code</button>
                </div>
              </div>
            </div>
          </div>

          {/* WEATHER APP */}
          <div className="row justify-content-md-center mt-5">
            <div className="col col-xl-6 col-sm-12 center-text">
              <div className="card" style={{ width: "31rem", height: "20rem", border: "3px solid #ffc107" }}>
                <img className="card-img-top card3-img" src={weather} alt="weather" />
              </div>
            </div>
            <div className="col col-xl-6 col-sm-12 center-text">
              <div class="card text-center border-0" style={{ width: "31rem", backgroundColor: "#F5F5F5" }}>
                <div class="card-body">
                  <h3 className='mb-4 project-name'>Weather App</h3>
                  <a href="https://jk-weatherapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-warning btn-lg button-margin btn-space custom">Live View</button>
                  </a>
                  <a href="https://github.com/Jkumar0208/weather-app.git" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-warning btn-lg custom">Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </body>

      {/* FOOTER SECTION */}
      <footer className="bg-dark text-center text-white mt-5">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-floating m-1 footer-linkedin" href="#!" role="button"
            ><FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#FFFFFF" }}
              /></a>

            <a className="btn btn-floating m-1 footer-linkedin" href="https://github.com/Jkumar0208" target="_blank" rel="noopener noreferrer" role="button"
            ><FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#FFFFFF" }}
              /></a>
          </section>
        </div>

        <hr className='footer-hr'></hr>

        <div className="text-center p-3 pb-4">
          © {year} Copyright. Made by {""}
          <a className="text-white footer-name" href="https://mdbootstrap.com/">Jugesh Kumar</a>
        </div>

      </footer>
    </div>
  );
}

export default App;