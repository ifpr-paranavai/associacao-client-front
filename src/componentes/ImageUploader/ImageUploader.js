import React, { useState, useRef } from "react";
import { toBase64 } from "../../uteis/file";

const ImageUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const inputRef = useRef(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  async function handleImageUpload() {
    const file = inputRef.current?.files[0];
    if (file.size > 5242880) onFileSelectError({ error: "O arquivo não pode ter mais que 5MB" });
    else {
      setUploadedFileName(inputRef.current.files[0].name);
      const src = await toBase64(file);
      onFileSelectSuccess({ src: src, alt: "Imagem do perfil do associado" });
    }
  }
  return (
    <div className="m-3">
      <label className="mr-3">Escolha uma foto de perfil (3x4):</label>
      <input ref={inputRef} onChange={handleImageUpload} className="d-none" type="file" required />
      <button
        onClick={handleUpload}
        type="button"
        className={`btn btn-outline-${uploadedFileName ? "success" : "primary"}`}
      >
        {uploadedFileName ? uploadedFileName : "Upload"}
      </button>
    </div>
  );
};

export default ImageUploader;
