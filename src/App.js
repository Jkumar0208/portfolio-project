import './App.css';
//import jugesh from "./images/jugesh-image.png";
import jugesh from "./images/jugesh-img-transparency.png";
import todo from "./images/todo-img.jpg";
import ipAddress from "./images/ip-address-img.jpg";
import weather from "./images/weather-app-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>

      <header>
        <div className="container">
          <nav className="navbar fixed-top navbar-light nav-color">
            <div className="navbar-brand py-4 nav-img-margin" href="#">
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

              <a className="btn btn-floating m-1 footer-linkedin" href="#!" role="button"
              ><FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "#000000" }}
                /></a>

            </span>
          </nav>
        </div>
      </header>

      <body>
        <div className="container">
          <div className="App">
            <h1 className='h1-margin'>PROJECTS</h1>
            <hr className='hr-line'></hr>
          </div>

          <div className="row justify-content-md-center mt-5">
            <div className="col col-6 center-text">
              <img src={todo} class="d-inline-block align-top project-img" alt="" />
            </div>
            <div className="col col-6 project-discription">
              <div>
                <h3>To-Do App</h3>
              </div>
              <div className='project-buttons'>
                <button type="button" class="btn btn-warning btn-lg button-margin">Live View</button>
                <button type="button" class="btn btn-warning btn-lg">Code</button>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center mt-5">
            <div className="col col-6 center-text">
              <img src={ipAddress} class="d-inline-block align-top project-img" alt="" />
            </div>
            <div className="col col-6 project-discription">
              <div>
                <h3>What's My IP</h3>
              </div>
              <div className='project-buttons'>
                <button type="button" class="btn btn-warning btn-lg button-margin">Live View</button>
                <button type="button" class="btn btn-warning btn-lg">Code</button>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center mt-5">
            <div className="col col-6 center-text">
              <img src={weather} class="d-inline-block align-top project-img" alt="" />
            </div>
            <div className="col col-6 project-discription">
              <div>
                <h3>Weather App</h3>
              </div>
              <div className='project-buttons'>
                <button type="button" class="btn btn-warning btn-lg button-margin">Live View</button>
                <button type="button" class="btn btn-warning btn-lg">Code</button>
              </div>
            </div>
          </div>

        </div>



      </body>

      <footer className="bg-dark text-center text-white mt-5">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-floating m-1 footer-linkedin" href="#!" role="button"
            ><FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#FFFFFF" }}
              /></a>

            <a className="btn btn-floating m-1 footer-linkedin" href="#!" role="button"
            ><FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#FFFFFF" }}
              /></a>

          </section>

        </div>

        <hr className='footer-hr'></hr>

        <div className="text-center p-3 pb-4">
          © {year} Copyright. Made by {""}
          <a className="text-white" href="https://mdbootstrap.com/">Jugesh Kumar</a>
        </div>

      </footer>

    </div>

  );
}

export default App;
