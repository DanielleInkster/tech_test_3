const a = React.createElement;

class OrderForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      item: '',
      amount: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { item, value } = event.target
  
    this.setState({
      [item]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }


  render() {
    const { item, amount } = this.state;
  
    return a(
      <form>
        <label>Item</label>
        <input
          type="text"
          name="item"
          value={item}
          onChange={this.handleChange} />
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
const domContainer = document.querySelector('#order_form_container');
ReactDOM.render(a(OrderForm), domContainer);