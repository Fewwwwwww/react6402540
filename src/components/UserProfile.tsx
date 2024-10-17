import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const UserProfile = () => {
  const BGImage = "https://i.imgur.com/HwGfmW4.jpeg";
  const ProfileImage =  "https://i.imgur.com/124sR77.jpeg";
  return (
    <div className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={BGImage}
          alt="Background"
          className="w-full h-48 object-cover"
        />
        <img
          src={ProfileImage}
          alt="Profile"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"
        />
      </div>
      <div className="pt-16 pb-8 px-6 text-center">
        <h1 className="text-2xl font-bold text-orange-600">Phongphisut Authai 6402540</h1>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.instagram.com/Maliverstyle" className="text-gray-600 hover:text-orange-600">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/PhongphisutAuthai" className="text-gray-600 hover:text-orange-600">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com/Phongphisut" className="text-gray-600 hover:text-orange-600">
            <Twitter size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          ลด-ผ่อน-ผ่านกลาง-นัดรับ-เก็บปลายทางมัดจำ50%
        </p>
      </div>
    </div>
  );
};

export default UserProfile;