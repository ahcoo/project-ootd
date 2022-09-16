import React from "react";
import "../styles/board/NoticeContent.scss";

const NoticeContent = () => {
  return (
    <div className="notice-content">
      <div className="notice-title">공지사항 작성</div>
      <div className="title-name">
        제목
        <input
          className="input-title"
          type="text"
          style={{ width: "1000px", height: "100px" }}
          placeholder="제목을 입력하세요."
        />
      </div>

      <input
        className="input-content"
        style={{ width: "1000px", height: "500px" }}
        type="text"
        placeholder="내용을 입력하세요."
      />
      <article className="notice-content-btn">
        {/* <div className="notice-content-btn2"> */}
        <button class="btn">등록</button>
        <button class="btn">돌아가기</button>
        {/* </div> */}
      </article>
    </div>
  );
};

export default NoticeContent;
