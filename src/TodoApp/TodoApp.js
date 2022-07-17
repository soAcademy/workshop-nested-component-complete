import React from 'react'

class TodoApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          items: [],
          text: ''
        }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        if (this.state.text.length === 0) {
            return
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }
  
    render() {
      return (
        <div>
            <h3>TODO</h3>
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <div>What needs to be done?</div>
            <input
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>
              Add #{this.state.items.length + 1}
            </button>
        </div>
      )
    }
}

export default TodoApp