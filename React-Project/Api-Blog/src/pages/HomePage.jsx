import React, { useEffect, useState } from "react";
import { homePosts } from "../api/ApiCall.js";
import BlogList from "../components/BlogList.jsx";
import Loader from "../components/Loader.jsx";
import MasterLayout from "../layout/MasterLayout.jsx";

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await homePosts();
      setList(res);
    })();
  }, []);

  return (
    <MasterLayout>
      {list === null ? <Loader /> : <BlogList list={list} />}
    </MasterLayout>
  );
};

export default HomePage;
