import React from 'react';
import ProfileTag from '../components/ProfileTag.js';
import profilePic from '../components/sampleProfile.svg';
import TagContainer from '../components/TagContainer';
import ClassTag from '../components/ClassTag';

function ProfilePage() {
  return (
    <div>
      <ProfileTag
        image={profilePic}
        phone="347-XXX-XXXX"
        email="XXX@gmail.com"
        name="Jane Doe"
        school="Hunter College"
        year="2021"
        bio="Hey guys! I’m Jane. Feel free to reach out."
      />
      <TagContainer>
        <ClassTag class="CSCI 335"/>
        <ClassTag class="CSCI 235"/>
        <ClassTag class="CSCI 135"/>
        <ClassTag class="CSCI 260"/>
        <ClassTag class="CSCI 499"/>
        <ClassTag class="CSCI 135"/>
        <ClassTag class="CSCI 260"/>
        <ClassTag class="CSCI 499"/>
      </TagContainer>
      
    </div>
  );
}

export default ProfilePage;
