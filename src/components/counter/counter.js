import React from 'react';

/**
 * Component is described here.
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

/**
  * up button for counter
*/
  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  /**
   * down button for counter
   */
  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  /**
   * function to change the polarity
   * @param {*} count 
   */
  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }
  /**
   * render the section with updated count
   */
  render() {
    let classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
        <a href="#" className="down clicker" onClick={this.handleDown}>
          -
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="up clicker" onClick={this.handleUp}>
          +
        </a>
      </section>
    );
  }
}

export default Counter;
