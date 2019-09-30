import React, { Component } from 'react'
import FormField from './FormField'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <FormField title= "Email" type = "email"  />       
        <FormField title= "Password" type = "password" />
      </div>
    )
  }
}
