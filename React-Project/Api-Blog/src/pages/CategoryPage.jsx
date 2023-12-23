import React, { useEffect, useState } from "react";
import { blogList } from "../api/ApiCall.js";
import BlogList from "../components/BlogList.jsx";
import Loader from "../components/Loader.jsx";
import MasterLayout from "../layout/MasterLayout.jsx";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [list, setList] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      let res = await blogList(id);
      setList(res);
    })();
  }, [id]);

  return (
    <MasterLayout>
      {list === null ? <Loader /> : <BlogList list={list} />}
    </MasterLayout>
  );
};

export default CategoryPage;
