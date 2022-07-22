import React from "react";

import Image from "react-bootstrap/Image";

function AboutImagePanel() {
  return (
    <div className="image-panel-container bg-dark d-flex flex-column flex-md-row justify-content-evenly pb-5">
      <Image
        src="https://images.pexels.com/photos/5858064/pexels-photo-5858064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="" // use empty alt tags for purely decorative images such as these stock images
      />
      <Image
        src="https://images.pexels.com/photos/5532715/pexels-photo-5532715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <Image
        src="https://images.pexels.com/photos/11722869/pexels-photo-11722869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}

export default AboutImagePanel;
