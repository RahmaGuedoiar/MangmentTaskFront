import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
   // kne is Auth false m3yo93dc fi home yhzo l register
   const{isAuth}=useSelector(state=>state.user)
   const navigate=useNavigate()
   useEffect(()=>{
 if(!isAuth) navigate('/createUser')
   },[isAuth])
  return (
    <div>Profile</div>
  )
}

export default Profile