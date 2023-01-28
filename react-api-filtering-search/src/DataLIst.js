import React, { useState, useEffect } from "react";
import axios from "axios";

function DataList({ selectedOption }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://example.com/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = data.filter((item) => item.status === selectedOption);

  return (
    <div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.id} - {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
