import React from 'react'; 

export default React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  }, 
  
  // Typing changes the state of the component. onChange allows change by saving it in the state, rather than the component. 
  onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  }, 
  
  onKeyDown: function(event) {
    if (event.key === "Enter") {
      var value = this.state.value;
      this.props.onSubmit(value);
      this.setState({value: ''});
    }
  }, 

  render: function () {
    return(
      <input
        value={this.state.value}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
      />
    ); 
  }
});