import React from "react";

import { Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./estilo.css";

import { toBase64 } from "../../uteis/file";
import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";

const ImageUploader = (props) => {
  async function handleImageUpload({ target }) {
    const file = target.files[0];
    const src = await toBase64(file);
    const [alt] = file.name.split(".");

    props.onUpload({ src, alt });
  }

  const renderIcon = () => {
    return <FontAwesomeIcon color="blue" icon={faImage} size="1x" className="image-size" />;
  };

  const renderImage = () => {
    return <img src={props.image.src} alt={props.image.alt} className="image-size" />;
  };

  return (
    <Row
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      className={props.className}
    >
      <input
        id="raised-button-file"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <div style={{ position: "relative" }}>
        <label htmlFor="raised-button-file">
          <Button variant="outlined" color="primary" component="span" className="image-size">
            {props.image?.src ? renderImage() : renderIcon()}
          </Button>
        </label>
        {props.image?.src && (
          <FontAwesomeIcon
            icon={faTimes}
            size="1x"
            className="remove-button"
            onClick={() => props.onUpload({ src: "", alt: "" })}
          />
        )}
      </div>
    </Row>
  );
};

export default ImageUploader;
