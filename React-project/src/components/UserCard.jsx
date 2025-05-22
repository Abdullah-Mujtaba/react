import React from 'react'
import userImage from '../assets/images.jpeg';
import "./card.css"

const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='title'>hi my name is</p>
      <img id='user-img' src={userImage} alt='love'></img>
      <p id='user-description'> Description of user</p>
    </div>
  )
}

export default UserCard
