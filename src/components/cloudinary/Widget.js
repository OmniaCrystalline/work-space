/** @format */

import "./Widget.style.css";
import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
//import UploadWidget from "./UploadWidget";
import UploadWidget2 from "./UploadWidget";





const App = () => {
    const cld = new Cloudinary({ cloud: { cloudName: "dligd0nd6" } });
  
  const img = cld
    .image("gem-6579_1280_pjdhdc")
    .quality("auto");

    return (
      <>
       
        <UploadWidget2/>
        <div className='photo-widget'>
          <AdvancedImage width='200px' cldImg={img} alt='photo' />
        </div>
      </>
    );
};

export default App;
