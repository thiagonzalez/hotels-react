import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header id="main-top">
        <nav id="main-menu">
          <ul className="container">
            <li><a href="{}">The Queen City</a></li>
            <li><a href="{}">My Reservations</a></li>
            <li><a href="{}">Guide</a></li>
          </ul>
        </nav>

        <div id="presentation">
          <h1>Welcome to <strong>Charlotte</strong> The Queen City</h1>
        </div>
      </header>
    );
  }
}

export default Header;
