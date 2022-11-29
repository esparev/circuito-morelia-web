import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    document.title = 'Perfil';
    window.scrollTo(0, 0);
  }, []);
};

export default Profile;
