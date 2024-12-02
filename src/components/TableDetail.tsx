import {  Table } from "antd";
import jsonData from '../data/csvjson.json';  // Adjust the relative path based on your project structure

const columns = [
  {
    title: "Datetime",
    dataIndex: "Datetime",
    key: "Datetime",
  },
  {
    title: "Weighting",
    dataIndex: "Weighting",
    key: "Weighting",
  },
  {
    title: "Responding",
    dataIndex: "Responding",
    key: "Responding",
  },
  {
    title: "Leq-T",
    dataIndex: "Leq-T",
    key: "Leq-T",
  },
  {
    title: "SEL",
    dataIndex: "SEL",
    key: "SEL",
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
  {
    title: "LImin",
    dataIndex: "LImin",
    key: "LImin",
  },
  {
    title: "LImax",
    dataIndex: "LImax",
    key: "LImax",
  },
  {
    title: "Peak",
    dataIndex: "Peak",
    key: "Peak",
  },
  {
    title: "L5",
    dataIndex: "L 5",
    key: "L 5",
  },
  {
    title: "L10",
    dataIndex: "L10",
    key: "L10",
  },
  {
    title: "L50",
    dataIndex: "L50",
    key: "L50",
  },
  {
    title: "L90",
    dataIndex: "L90",
    key: "L90",
  },
  {
    title: "L95",
    dataIndex: "L95",
    key: "L95",
  },
  {
    title: "SD",
    dataIndex: "SD",
    key: "SD",
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
