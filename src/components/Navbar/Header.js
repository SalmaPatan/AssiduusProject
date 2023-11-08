import React from 'react';
import AssidusLogo from '../../assets/images/assiduus.jpg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserProfile from '../../assets/images/user-profile.jpg';


const Header = () => {
  return (
    <header class="flex justify-between items-center h-16">
      <img src={AssidusLogo} class="h-28 w-42" />
      <div class="flex justify-between items-center">
        <div class="flex items-center bg-gray-100 m-5 h-9 rounded-md p-2">
          <SearchIcon class="h-5 w-5" />
          <input
            type="text"
            placeholder="Search..."
            class="border-none outline-none bg-gray-100 rounded-md"
          />
        </div>
        <div>
          <NotificationsIcon />
        </div>
        <div>
          <img src={UserProfile} class="h-14 w-14 rounded-full m-5" />
        </div>

      </div>
    </header>
  );
}

export default Header;