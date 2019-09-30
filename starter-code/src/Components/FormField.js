import React, { Component } from 'react'

export default class FormField extends Component {
  render() {
    return (
      <div>
      <p>{this.props.title}</p>
      <input label="Name" type={this.props.type} placeholder="e.g Alex Smith"></input>
      </div>
    )
  }
}
