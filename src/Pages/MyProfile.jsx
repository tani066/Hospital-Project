import React, { use, useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name : 'Tanishk Agarwal',
    image : assets.profile_pic,
    email : 'tanishkagrawal064@gmail.com',
    phone : '+91 7974997180',
    address : {
      line1 : 'Raigarh Chattisgarh 496001',
      line2 : 'Baikunthpur, Raigarh',
    },
    gender : 'Male',
    dob : '07-09-2006',
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />

      {
        isEdit ? 
        <input type="text" value={userData.name} onChange={(e) => setUserData({...userData, name : e.target.value})} /> :
        <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>
            {
              isEdit ? 
              <input type="email" value={userData.email} onChange={(e) => setUserData({...userData, email : e.target.value})} /> :
              <p>{userData.email}</p>
            }
          </p>
          <p>Phone:</p>
          {
            isEdit ? 
            <input type="text" value={userData.phone} onChange={(e) => setUserData({...userData, phone : e.target.value})} /> :
            <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit ? 
            <input type="text" value={userData.address.line1} onChange={(e) => setUserData({...userData, address : {...userData.address, line1 : e.target.value}})} /> :
            <p>{userData.address.line1}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MyProfile