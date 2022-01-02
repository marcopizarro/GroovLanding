/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React from "react";
import React from 'react'

// reactstrap components
import {
  Button,
  // Card,
  // CardBody,
  // CardFooter,
  // CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";



function LandingPage() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main" >
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h1 className="title">What we do.</h1>
                <h5 className="description">
                Hey! We're Groov, a cloud-tech music startup streamlining online collaboration with music software, enhancing organizational structure for audio projects, and bringing server-grade hardware to producers.
                </h5>
                <h5 className="description">
                As more and more billboard charting hits start to come out of bedroom closets, it is clear that the emphasis in creating music is no longer in the equipment that one has, but the ability to collaborate with like minded individuals. However, even as digital audio workstation technology advancements are being made, there is little to no progress on the inefficacies faced by musicians when collaborating with one another through an online medium.
                </h5>
                {/* <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button> */}
              </Col>
            </Row>
            <br />
            <br />
            
          </Container>
        </div>

        <div className="section text-center">
          <Container>
            <h1 className="title">What we're solving.</h1>
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info" >
                    <i className="nc-icon nc-time-alarm" style={{color:"#FF0060"}} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Inefficient Collaboration</h4>
                    <p className="description">
                    Online music collaboration is tedious and time-consuming
                    </p>
                    {/* <Button className="btn-link" color="info">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-layout-11" style={{color:"#010088"}} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Minimal Organization/Structure</h4>
                    <p>
                    Enterprise-level music edit consolidation and version control is non-existent
                    </p>
                    {/* <Button className="btn-link" color="info" href="#groovdepot">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-money-coins" style={{color:"#5E0072"}} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Costly Hardware/Software</h4>
                    <p>
                    An industry grade production suite costs thousands of dollars and takes up 100s of GBs
                    </p>
                    {/* <Button className="btn-link" color="info" href="#groovdeck">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section landing-section text-center">
          <Container id="solutions">
            <h1 className="title text-center" >How we're solving it.</h1>

            <div id = "groovsync" style={{borderStyle:"solid",borderWidth:"5px",borderColor:"#FF0060", width: '100%', borderRadius: '25px', padding:'20px', margin:'20px'}}>
            <h2>GroovSync</h2>
            <h3>"Figma for Music"</h3>
            <h4>GroovSync allows musicians to collaborate pre-export, and get rid of the pesky need to send mp3s for high-fidelity audio monitoring. By syncing project files and their dependencies, GroovSync offers low-latency real-time host to host editing for industry grade software.</h4>
            </div>

            <div id = "groovdepot" style={{ borderStyle:"solid",borderWidth:"5px",borderColor:"#010088", width: '100%', borderRadius: '25px', padding:'20px', margin:'20px'}}>
            <h2>GroovDepot</h2>
            <h3>"Github for Music"</h3>
            <h4>GroovDepot provides centralized communication for production teams and music labels. By providing scheduling functionality, version control technology, and software-less audio monitoring, GroovDepot allows teams to have peace of mind when collaborating on large-scale projects.</h4>
            </div>

            <div id = "groovdeck" style={{borderStyle:"solid",borderWidth:"5px",borderColor:"#5E0072", width: '100%', borderRadius: '25px', padding:'20px', margin:'20px'}}>
            <h2>GroovDeck</h2>
            <h3>"Google Stadia for Music"</h3>
            <h4>GroovDeck enables musicians to create without limits. Access to server-grade VM hardware along with pre-licensed rent-to-own synthesizers, equipment and sound banks shifts the focus to making music rather than struggling with filled up hard drives and software crashes.</h4>
            </div>
            
          </Container>
        </div>

        <div className="section landing-section">
          <Container id="signUp">
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Joing our waitlist!</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col  className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
