import { Link } from "react-router-dom";
import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import EmployerList from "../pages/dashboardPages/EmployerList";
import JobPositionList from "../pages/dashboardPages/JobPositionList";
import LanguageList from "../pages/dashboardPages/LanguageList";
import ProgrammingLanguageList from "../pages/dashboardPages/ProgrammingLanguageList";
import SchoolList from "../pages/dashboardPages/SchoolList";
import SocialMediaList from "../pages/dashboardPages/SocialMediaList";
import CityList from "../pages/dashboardPages/CityList";
import EmployeeList from "../pages/dashboardPages/EmployeeList";
import JobSeekerList from "../pages/dashboardPages/JobSeekerList";
import WorkingTimeList from "../pages/dashboardPages/WorkingTimeList";
import WorkingTypeList from "../pages/dashboardPages/WorkingTypeList";
import JobPostingSystemVerificationList from "../pages/dashboardPages/JobPostingSystemVerificationList";

export default function Dashboard() {
  return (
    <div>
      <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand ps-3" href="index.html">
            Admin Panel
          </a>

          <button
            class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="#!"
          >
            <i class="bi bi-person-circle"></i>
          </button>

          <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user fa-fw"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#!">
                    Home Page
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
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
              class="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div class="sb-sidenav-menu">
                <div class="nav">
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    USER LIST
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <Link to="/employeelist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-person-badge"></i>
                          </div>
                          Employee List
                        </a>
                      </Link>

                      <Link to="/employerlist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-briefcase-fill"></i>
                          </div>
                          Employer List
                        </a>
                      </Link>

                      <Link to="/jobseekerlist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-person-circle"></i>
                          </div>
                          Job Seeker List
                        </a>
                      </Link>
                    </nav>
                  </div>

                  {/****************************************************************/}

                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayoutsTwo"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    JOB LIST
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayoutsTwo"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <Link to="/jobpositionlist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-award"></i>
                          </div>
                          Job Position List
                        </a>
                      </Link>

                      <a class="nav-link">
                        <div class="sb-nav-link-icon">
                          <i class="bi bi-list-check"></i>
                        </div>
                        Job Posting List
                      </a>
                    </nav>
                  </div>

                  {/****************************************************************/}
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayoutsThree"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    OTHER LIST
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayoutsThree"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <Link to="/citylist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-building"></i>
                          </div>
                          City List
                        </a>
                      </Link>

                      <Link to="/languagelist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-translate"></i>
                          </div>
                          Language List
                        </a>
                      </Link>

                      <Link to="/programminglanguagelist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-terminal"></i>
                          </div>
                          Prog. Language  List
                        </a>
                      </Link>

                      <Link to="/schoollist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-book"></i>
                          </div>
                          School List
                        </a>
                      </Link>

                      <Link to="/socialmedialist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-journal-richtext"></i>
                          </div>
                          Social Media List
                        </a>
                      </Link>

                      <Link to="/workingtimelist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-journal-richtext"></i>
                          </div>
                          Working Time List
                        </a>
                      </Link>

                      <Link to="/workingtypelist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-journal-richtext"></i>
                          </div>
                          Working Type List
                        </a>
                      </Link>
                    </nav>
                  </div>



                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayoutsFour"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    SYSTEM VERIFICATION LIST
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayoutsFour"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <Link to="/jpsverificationlist">
                        <a class="nav-link">
                          <div class="sb-nav-link-icon">
                            <i class="bi bi-award"></i>
                          </div>
                          J.P.S Verification List
                        </a>
                      </Link>

                      <a class="nav-link">
                        <div class="sb-nav-link-icon">
                          <i class="bi bi-list-check"></i>
                        </div>
                        Employer Verification List
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
              </div>
            </nav>
          </div>
          <div
            id="layoutSidenav_content"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <main>
              <Route path="/citylist" component={CityList} />
              <Route path="/socialmedialist" component={SocialMediaList} />
              <Route path="/jobpositionlist" component={JobPositionList} />
              <Route path="/languagelist" component={LanguageList} />
              <Route path="/programminglanguagelist" component={ProgrammingLanguageList}/>
              <Route path="/schoollist" component={SchoolList} />
              <Route path="/employeelist" component={EmployeeList} />
              <Route path="/employerlist" component={EmployerList} />
              <Route path="/jobseekerlist" component={JobSeekerList} />
              <Route path="/workingtimelist" component={WorkingTimeList} />
              <Route path="/workingtypelist" component={WorkingTypeList} />
              <Route path="/jpsverificationlist" component={JobPostingSystemVerificationList} />
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}
