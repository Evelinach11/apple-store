import React, { useState, useEffect } from "react";

function ImagePage(props) {
  const [previewImg, setPreviewImg] = useState(props.image01);

  useEffect(() => {
    setPreviewImg(props.image01);
  }, props.image01);

  return (
    <>
      <div className="product__images__list">
        <div
          className="product__images__list__item"
          onClick={() => setPreviewImg(props.image01)}
        >
          <img src={props.image01} alt="" />
        </div>
        <div
          className="product__images__list__item"
          onClick={() => setPreviewImg(props.image02)}
        >
          <img src={props.image02} alt="" />
        </div>
      </div>
      <div className="product__images__main">
        <img className="product__image" src={previewImg} alt="" />
      </div>
    </>
  );
}

export default ImagePage;
