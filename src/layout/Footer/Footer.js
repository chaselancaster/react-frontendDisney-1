import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css'


export const Footer= () =>(
    // <!-- Footer -->
    <footer class="page-footer font-small blue pt-4">
      {/* <!-- Footer Links --> */}
      <div class="container-fluid text-center text-md-left">
        {/* <!-- Grid row --> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-md-6 mt-md-0 mt-3">
            {/* <!-- Content --> */}
            <h5 class="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
          </div>
          {/* <!-- Grid column --> */}
          <hr class="clearfix w-100 d-md-none pb-3"></hr>
          {/* <!-- Grid column --> */}
          <div class="col-md-3 mb-md-0 mb-3">
            {/* <!-- Links --> */}
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column -->
          <!-- Grid column --> */}
          <div class="col-md-3 mb-md-0 mb-3">
            {/* <!-- Links --> */}
            <h5 class="text-uppercase">Dev Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
            <Row className = "footerrow" >
              <Col lg={true}>
                  <div class="footer-copyright text-center py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                    </div>
            </Col>
            </Row>
   
    </footer>
 
)
export default Footer