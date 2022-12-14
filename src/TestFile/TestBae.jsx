import React, { useEffect, useState } from "react";
import "../styles/subscss/TestBae.scss";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const TestBae = () => {
  const [search, setSearch] = useState("");
  const onChage = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="검색할 상품 이름을 검색해주세요" />
      <button>
        <BiSearchAlt />
      </button>
    </div>
  );
};

export default TestBae;
