import React, { useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Success from "./pages/Success";

function AnnounceForm() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState({
    images: [],
  });
  const handlePage = (flag) => {
    setCurrentPage(flag ? currentPage + 1 : currentPage - 1);
  };

  const handleForm = (data_t) => {
    return () => {
      setData({ ...data, ...data_t });
    };
  };
  switch (currentPage) {
    case 0:
      return <Page1 handleForm={handleForm} cb={handlePage} />;
    case 1:
      return <Page2 handleForm={handleForm} cb={handlePage} />;
    case 2:
      return <Page3 handleForm={handleForm} form={data} cb={handlePage} />;
    case 3:
      return <Success />;
    default:
      return <></>;
  }
}

export default AnnounceForm;
