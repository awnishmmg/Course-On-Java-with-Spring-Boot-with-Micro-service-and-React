import React, { useEffect, useState } from 'react';
import './profile.css';
import Header from './layout/Header';

const Profile = () => {

   const [profileData,setProfileData] = useState({});

   useEffect(()=>{
    if(window.localStorage.getItem('session.data')){
        setProfileData(JSON.parse(window.localStorage.getItem('session.data')))
    }
   },[]);


  return (
    <React.Fragment>
        <Header/>
    <div className="container mt-5 profile-container">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Profile Details</h4>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-sm-4 font-weight-bold">ID</div>
            <div className="col-sm-8">{profileData.id}</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 font-weight-bold">Name</div>
            <div className="col-sm-8">{profileData.name}</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 font-weight-bold">Email</div>
            <div className="col-sm-8">{profileData.email}</div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-4 font-weight-bold">Mobile</div>
            <div className="col-sm-8">{profileData.mobile}</div>
          </div>
          <div className="row">
            <div className="col-sm-4 font-weight-bold">Role</div>
            <div className="col-sm-8 text-capitalize">{profileData.role}</div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Profile;
