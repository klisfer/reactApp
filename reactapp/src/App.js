import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <hgroup>
        <h1>Welcome to The Climber</h1>
        <h3>By Aayush Chaubey</h3>
      </hgroup>
      <form>
        <div class="group">
          <input type="email" />
          <span class="highlight" />
          <span class="bar" />
          <label>Email</label>
        </div>
        <div class="group">
          <input type="password" />
          <span class="highlight" />
          <span class="bar" />
          <label>Password</label>
        </div>
        <button type="button" class="button buttonBlue">
          Login
          <div class="ripples buttonRipples">
            <span class="ripplesCircle" />
          </div>
        </button>
      </form>
      <footer>
        <a href="http://www.polymer-project.org/" target="_blank">
          <img src="https://www.polymer-project.org/images/logos/p-logo.svg" />
        </a>
      </footer>
    </div>
    );
  }
}

export default App;
