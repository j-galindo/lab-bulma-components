import React, { Component } from 'react'
import FormField from './FormField'
import CoolButton from './CoolButton'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <FormField title= "Email" type = "email"  />       
        <FormField title= "Password" type = "password" />
        <CoolButton/>
      </div>
    )
  }
}
