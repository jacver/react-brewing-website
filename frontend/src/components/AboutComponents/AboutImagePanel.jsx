import React from "react";

import Image from "react-bootstrap/Image";

function AboutImagePanel() {
  return (
    <div className="image-panel-container bg-dark d-flex justify-content-evenly pb-5">
      <Image src="https://images.pexels.com/photos/5858064/pexels-photo-5858064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Image src="https://images.pexels.com/photos/5532715/pexels-photo-5532715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Image src="https://images.pexels.com/photos/11722869/pexels-photo-11722869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  );
}

export default AboutImagePanel;
