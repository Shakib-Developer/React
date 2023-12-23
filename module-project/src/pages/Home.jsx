import React, { useEffect, useState } from "react";
import BlogList from "../components/BlogList.jsx";
import MasterLayout from "../masterLayout/MasterLayout.jsx";
import { postNewest } from "../ApiRequest/ApiRequest.js";
import Loader from "../components/Loader.jsx";
const HomePage = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postNewest();
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
