import React, { Component } from 'react';

import './style.scss';

class Application extends Component {
  render() {
    return (
      <div className="application">
        <div className="container">
          <div className="header">
            <h1>Rem-bem-scss demo</h1>
          </div>
          <div className="content">
            <div className="topic">
              <div className="topic__title">
                Layout
              </div>
              <div className="topic__data">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
