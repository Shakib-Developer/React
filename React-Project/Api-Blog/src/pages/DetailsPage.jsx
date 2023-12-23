import React, { useEffect, useState } from "react";
import { detailsPosts } from "../api/ApiCall.js";
import Details from "../components/Details.jsx";
import Loader from "../components/Loader.jsx";
import MasterLayout from "../layout/MasterLayout.jsx";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  let { id } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await detailsPosts(id);
      setList(res);
    })();
  }, [id]);

  return (
    <MasterLayout>
      {list === null ? <Loader /> : <Details list={list} />}
    </MasterLayout>
  );
};

export default DetailsPage;
