import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Contact</h2>
      <p>Ipsum commodo quis magna duis dolore in eu cupidatat amet in elit proident anim ipsum. Incididunt amet est enim aliqua duis. Sit anim esse incididunt ex aliqua do sit est pariatur exercitation. Minim proident cupidatat quis occaecat pariatur fugiat sunt proident ipsum enim pariatur. Quis enim voluptate mollit est ex id consequat reprehenderit et reprehenderit ex ad elit duis. Sit ea esse ut Lorem sint amet officia incididunt aliqua. Sunt veniam laborum proident exercitation laborum nostrud laboris dolore ex duis excepteur eiusmod nulla aliqua.</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Contact
