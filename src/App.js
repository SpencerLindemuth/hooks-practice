import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './components/useForm'
import Card from './components/card'

function App() {

  const [values, handleChange] = useForm({firstName: '', lastName: '', email: '', phone: '', businessName: ''})
  

  return (
    <div className="App">
      <p>Let's make you a business card!</p>
      <label >Business Name</label>
      <br />
      <input value={values["businessName"]} onChange={handleChange} name="businessName" />
      <br />
      <label >Full Name</label>
      <br />
      <input value={values["fullName"]} onChange={handleChange} name="fullName" />
      <br />
      <label >Email</label>
      <br />
      <input value={values["email"]} onChange={handleChange} name="email" />
      <br />
      <label >Phone Number</label>
      <br />
      <input value={values["phone"]} onChange={handleChange} name="phone" />
      <br />
      <br />
      <Card fullName={values.fullName} email={values.email} phone={values.phone} businessName={values.businessName}/>
    </div>
  );
}

export default App;
