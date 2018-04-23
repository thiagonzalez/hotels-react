import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer id="main-footer">
        <nav className="social">
          <ul>
            <li className="icon-facebook"><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li className="icon-twitter"><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li className="icon-instagram"><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </nav>

        <span>&copy; 2004-2018 Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202</span>
      </footer>
    );
  }
}

export default Footer;
