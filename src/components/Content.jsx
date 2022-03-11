import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Content() {
  const [content, setContent] = useState("");
  const count = useSelector((state) => state.paragraphs.paragraphsCount);
  const format = useSelector((state) => state.paragraphs.paragraphsType);
  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${format}`
      )
      .then((res) => setContent(res.data));
  }, [count, format]);
  return <p>{content ? content : "Loading..."}</p>;
}

export default Content;
