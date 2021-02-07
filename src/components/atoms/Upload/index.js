import React from "react";
import "./upload.scss";

const Upload = ({ img, ...res }) => {
  return (
    <div className="upload">
      {img && <img className="preview" src={img} alt="preview" />}
      <input type="file" {...res} />
    </div>
  );
};

export default Upload;
