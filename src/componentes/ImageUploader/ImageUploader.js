import React, { useState, useRef } from "react";

function ImageUploader() {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files && setUploadedFileName(inputRef.current.files[0].name);
  };
  return (
    <div className="m-3">
      <label className="mx-3">Choose file:</label>
      <input ref={inputRef} onChange={handleDisplayFileDetails} className="d-none" type="file" />
      <button
        onClick={handleUpload}
        className={`btn btn-outline-${uploadedFileName ? "success" : "primary"}`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
}

export default ImageUploader;
