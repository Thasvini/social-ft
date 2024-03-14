import React from 'react'
import FollowersCard from '../../components/FollowersCard/FollowersCard'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide