import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.tagline}</h3>
      </div>
    );
  }
});