import React from 'react'

export const Contact = () => {
  return (
    <div className="page">
      <h1 className='heading'>Contact</h1>

      <form className="contact" action='mailto:luca@luca.com'>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Reason for contact" />
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
}
