import React, { Component } from 'react' //Class Component

class Post1 extends Component {
  state = {
    id: '2',
    name: 'Pooremkopd'
  }
  render() {
    return (
      <div>
        {this.state.id}<br/>
        {this.state.name}
        <h3>Post : {this.props.myId}</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
export default Post1;