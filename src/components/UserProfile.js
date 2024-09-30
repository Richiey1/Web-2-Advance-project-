import React from "react";

function UserProfile() {
  return (
    <div className="user-profile">
        <img
            width="200"
            src="https://media.licdn.com/dms/image/v2/D4D03AQHxqg0yT1EXiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713555361464?e=1733356800&amp;v=beta&amp;t=IMGhXkDJiiGnZt8KUIYE-uddFaz9eoOBFMcjQC67j0U"  class="evi-image ember-view profile-photo-edit__preview"
            loading="lazy"
            height="200"
            alt="Ojo Damilare"
            id="ember2050"
            className="ivm-view-attr__img--centered ivm-view-attr__img  feed-shared-celebration-image__image evi-image lazy-image ember-view"
          /> 
      <h2>Ojo Damilare</h2>          
      <p>Web 3 Researcher FrontEnd Developer Webinar UI/UX designer Community project developer Community moderator</p>      
      <p>Nigeria</p>               
      <button>Edit Profile</button>
    </div>
  );
}

export default UserProfile;
