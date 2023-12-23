import React, { useEffect, useState } from "react";
import MasterLayout from "../masterLayout/MasterLayout.jsx";
import { postList } from "../ApiRequest/ApiRequest.js";
import Loader from "../components/Loader.jsx";
import BlogList from "../components/BlogList.jsx";
import { useParams } from "react-router-dom";

const ByCategoryPage = () => {
  let { id } = useParams();

  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postList(id);
      setList(res);
    })();
  }, [id]);

  return (
    <MasterLayout>
      {list === null ? <Loader /> : <BlogList list={list} />}
    </MasterLayout>
  );
};

export default ByCategoryPage;
