import { Link } from "react-router-dom";
import React from "react";
import {BrowserRouter , Router, Route} from "react-router-dom"
import EmployerList from "../pages/dashboardPages/EmployerList";
import JobPositionList from "../pages/dashboardPages/JobPositionList";
import LanguageList from "../pages/dashboardPages/LanguageList";
import ProgrammingLanguageList from "../pages/dashboardPages/ProgrammingLanguageList";
import SchoolList from '../pages/dashboardPages/SchoolList'
import SocialMediaList from '../pages/dashboardPages/SocialMediaList'
import CityList from "../pages/dashboardPages/CityList";
import EmployeeList from "../pages/dashboardPages/EmployeeList";
import JobSeekerList from "../pages/dashboardPages/JobSeekerList";

export default function Dashboard() {
  return (
    <div>
      <body className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a className="navbar-brand ps-3" href="index.html">
            Admin Panel
          </a>

          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="#!"
          >
            <i class="bi bi-person-circle"></i>
          </button>

          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user fa-fw"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    Home Page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">User Lists</div>

                  <Link to="/employeelist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-person-badge"></i>
                    </div>
                    Employee List
                  </a>
                  </Link>

                  <Link to="/employerlist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-briefcase-fill"></i>
                    </div>
                    Employer List
                  </a>
                  </Link>

                  <Link to="/jobseekerlist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i className="bi bi-person-circle"></i>
                    </div>
                    Job Seeker List
                  </a>
                  </Link>

                  {/****************************************************************/}
                  <div className="sb-sidenav-menu-heading">Job Lists</div>


                  <Link to="/jobpositionlist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-award"></i>
                    </div>
                    Job Position List
                  </a>
                  </Link>


                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-list-check"></i>
                    </div>
                    Job Posting List
                  </a>
                  
                  {/****************************************************************/}
                  <div className="sb-sidenav-menu-heading">Other Lists</div>

                  <Link to="/citylist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-building"></i>
                    </div>
                    City List
                  </a>
                  </Link>

                  <Link to="/languagelist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-translate"></i>
                    </div>
                    Language List
                  </a>
                  </Link>


                  <Link to="/programminglanguagelist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-terminal"></i>
                    </div>
                    Programming Language List
                  </a>
                  </Link>


                  <Link to="/schoollist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-book"></i>
                    </div>
                    School List
                  </a>
                  </Link>


                  <Link to="/socialmedialist">
                  <a className="nav-link">
                    <div className="sb-nav-link-icon">
                    <i class="bi bi-journal-richtext"></i>
                    </div>
                    Social Media List
                  </a>
                  </Link>


                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Start Bootstrap
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content" style={{marginTop:"20px",marginLeft:"20px",marginRight:"20px"}}>
                <main>
                    <Route path="/citylist" component={CityList}/>
                    <Route path="/socialmedialist" component={SocialMediaList}/>
                    <Route path="/jobpositionlist" component={JobPositionList}/>
                    <Route path="/languagelist" component={LanguageList}/>
                    <Route path="/programminglanguagelist" component={ProgrammingLanguageList}/>
                    <Route path="/schoollist" component={SchoolList}/>
                    <Route path="/employeelist" component={EmployeeList}/>
                    <Route path="/employerlist" component={EmployerList}/>
                    <Route path="/jobseekerlist" component={JobSeekerList}/>
                </main>
            </div>
        </div>
        
      </body>
    </div>
  );
}
