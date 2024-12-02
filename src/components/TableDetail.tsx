import {  Table } from "antd";
import jsonData from '../data/csvjson.json';  // Adjust the relative path based on your project structure

const columns = [
  {
    title: "Datetime",
    dataIndex: "Datetime",
    key: "Datetime",
  },
  {
    title: "Leq,T",
    dataIndex: "Leq-T",
    key: "Leq-T",
  },
  {
    title: "LFmin",
    dataIndex: "LFmin",
    key: "LFmin",
  },
  {
    title: "LFmax",
    dataIndex: "LFmax",
    key: "LFmax",
  },
  {
    title: "LSmin",
    dataIndex: "LSmin",
    key: "LSmin",
  },
  {
    title: "LSmax",
    dataIndex: "LSmax",
    key: "LSmax",
  },
];

const TableDetail = () => {
  return (
    <>
      <Table
        dataSource={jsonData}
        columns={columns}
        // pagination={false}
        bordered
      />
      <hr className="my-4" />
      {/* <Pagination /> */}
    </>
  );
};

export default TableDetail;
