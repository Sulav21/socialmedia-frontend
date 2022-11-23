import React from "react";
import "./post.css";
import comment from "../../img/comment.png";
import share from "../../img/share.png";
import heart from "../../img/like.png";
import notLike from "../../img/notlike.png";

export const Post = ({ data, id }) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />
      <div className="postReact">
        <img src={data.liked ? heart : notLike} alt="" />
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes}
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};
