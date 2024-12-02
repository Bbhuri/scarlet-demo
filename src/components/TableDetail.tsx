import { Pagination, Table } from "antd";

// Table data
const dataSource = [
  {
    key: "1", // Unique key for the row
    datetime: "12-03-2023 11:23:00",
    leqT: 32.0,
    lfmin: 48.1,
    lfmax: 56.2,
    lsmin: 32.5,
    lsmax: 43.1,
  },
  {
    key: "", // Unique key for the empty row
    datetime: "",
    leqT: "",
    lfmin: "",
    lfmax: "",
    lsmin: "",
    lsmax: "",
  },
  {
    key: "", // Unique key for the empty row
    datetime: "",
    leqT: "",
    lfmin: "",
    lfmax: "",
    lsmin: "",
    lsmax: "",
  },
];

// Table columns
const columns = [
  {
    title: "Datetime",
    dataIndex: "datetime",
    key: "datetime",
  },
  {
    title: "Leq,T",
    dataIndex: "leqT",
    key: "leqT",
  },
  {
    title: "LFmin",
    dataIndex: "lfmin",
    key: "lfmin",
  },
  {
    title: "LFmax",
    dataIndex: "lfmax",
    key: "lfmax",
  },
  {
    title: "LSmin",
    dataIndex: "lsmin",
    key: "lsmin",
  },
  {
    title: "LSmax",
    dataIndex: "lsmax",
    key: "lsmax",
  },
];

const TableDetail = () => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
              bordered
      
      />
      <hr className="my-4" />
      <Pagination />
    </>
  );
};

export default TableDetail;
