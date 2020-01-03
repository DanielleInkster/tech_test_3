'use strict';

const e = React.createElement;

class EnterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enter: false };
  }

  render() {
    if (this.state.entered) {
      return 'You entered your payment.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ entered: true }) },
      'Enter'
    );
  }
}

const domContainer = document.querySelector('#enter_button_container');
ReactDOM.render(e(EnterButton), domContainer);