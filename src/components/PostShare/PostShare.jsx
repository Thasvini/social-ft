import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import axios from "axios"; 

const PostShare = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("image", image);

      await axios.post("http://localhost:4000/posts/create", formData);
  
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's happening"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="postOptions">
          <input
            type="file"
            name="image"
            ref={imageRef}
            onChange={onImageChange}
          />
          <button className="button ps-button" type="submit">
            Share
          </button>
        </div>
      </form>
      {image && <img className="previewImage" src={URL.createObjectURL(image)} alt="Preview" />}
    </div>
  );
};

export default PostShare;

