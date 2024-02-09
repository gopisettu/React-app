import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-white">
          <Container fluid className="">
            <Navbar.Brand href="#home" className="col-md-6 col-xl-4 col-lg-3">
              <img src="./image/logoname.png" alt="Your Logo" className="img-fluid" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="container">
                <Nav>
                  <div className="col-lg-4">
                    <span className="text-success font-weight-bold responsive-font fs-5">Name:Dr.Arjun Rajput</span>
                  </div>
                  <div className="col-lg-2 ms-3 col-xl-2 my-1">
                    <span className="text-success font-weight-bold  responsive-font fs-5">ID: 6064</span>
                  </div>
                  <div className="col-lg-1 col-xl-1">
                    <NavDropdown title="ECR" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">ECR-1</NavDropdown.Item>
                      <NavDropdown.Item href="/Content">ECR-2</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">ECR-3</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">ECR-4</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="col-lg-1 col-xxl-1">
                    <NavDropdown title="setAF" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Journal Publication</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Confrence Publication and Presentations</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Workshop and Seminar</NavDropdown.Item>
                      <NavDropdown.Item >TechTalks to be delivered Multidiciplinary Lectures</NavDropdown.Item>
                      <NavDropdown.Item >Faculty Guest Talk in another institutions</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">NPTEL Certifications</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.5">Participation in TASTE</NavDropdown.Item>
                      <NavDropdown.Item href="#action9/3.8">e-Certificate(VIDEO LECTURE)</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.9">visit to industries,institutions</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.10">Seed Money Proposal For Research</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.11">Awards at National,International Level</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.12">Proposal Submission for Grants</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.13">Books,Chapter Authership</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.14">Consultancy and Corporate Training done for Revenue Generation</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.15">Patents Filled,Pulished,Granted</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.16">Collaborative Activities with Mou Signed Industries,institutions</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.17">Visit to the Library</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.18">Students Motivation for Paper Presentation,Project Submission,Other Contest</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.19">Professional Society Membership</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.20">Students Field Work,Internship Guidance</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="col-lg-2">
                    <NavDropdown title="SESTA" id="collapsible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">SESTA-1</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">SESTA-2</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">SESTA-3</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">SESTA-4</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="col-lg-1">
                    <a className="btn btn-outline-danger border-danger" href="#">LogOut</a>
                  </div>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       
      </div>
    </>
  );
};

export default Main;
