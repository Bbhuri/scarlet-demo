import React from "react";
import TableDetail from "../components/TableDetail";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between ">
        <p className="text-xl">Scarlet ST-21D #12345678</p>
        <button
          className="bg-black text-white p-1 rounded duration-150 border-black border hover:text-black hover:bg-main"
          onClick={() => navigate("chart")}
        >
          Graph
        </button>
      </div>
      <hr className="my-4" />
      <div className="px-5">
        <TableDetail />
      </div>
    </div>
  );
};

export default Detail;
