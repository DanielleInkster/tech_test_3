'use strict';

const e = React.createElement;

class CompleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { completed: false };
  }

  render() {
    if (this.state.completed) {
      return 'You have completed your order.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ completed: true }) },
      'Complete Order'
    );
  }
}

const domContainer = document.querySelector('#enter_button_container');
ReactDOM.render(e(CompleteButton), domContainer);