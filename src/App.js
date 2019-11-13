import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './components/useForm'
import Card from './components/card'

function App() {

  const [values, handleChange] = useForm({firstName: '', lastName: '', email: '', phone: '', businessName: ''})
  

  return (
    <div className="App">
      <p>Let's make you a business card!</p>
      <input value={values["firstName"]} onChange={handleChange} name="firstName" />
      <br />
      <input value={values["lastName"]} onChange={handleChange} name="lastName" />
      <br />
      <input value={values["email"]} onChange={handleChange} name="email" />
      <br />
      <input value={values["phone"]} onChange={handleChange} name="phone" />
      <br />
      <input value={values["businessName"]} onChange={handleChange} name="businessName" />
      <br />
      <br />
      <Card firstName={values.firstName} lastName={values.lastName} email={values.email} phone={values.phone} businessName={values.businessName}/>
    </div>
  );
}

export default App;
