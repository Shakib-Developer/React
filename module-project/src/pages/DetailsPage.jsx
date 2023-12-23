import React, { useEffect, useState } from "react";
import MasterLayout from "../masterLayout/MasterLayout.jsx";
import { useParams } from "react-router-dom";
import { postDetails } from "../ApiRequest/ApiRequest.js";
import Loader from "../components/Loader.jsx";
import BlogDetails from "../components/BlogDetails.jsx";

const DetailsPage = () => {
  let { id } = useParams();

  const [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postDetails(id);
      setList(res);
    })();
  }, [id]);

  return (
    <MasterLayout>
      {list === null ? <Loader /> : <BlogDetails list={list} />}
    </MasterLayout>
  );
};

export default DetailsPage;
