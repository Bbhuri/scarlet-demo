import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    instrument: "Sound meter",
    brand: "Scarlet ST-21D",
    model: "ST-21D",
    serialNumber: "12345678",
    description: "Amanda Hotel Phuket",
  },
];

const TableHome = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Instrument",
      dataIndex: "instrument",
      key: "instrument",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button
          className="bg-main text-black p-1 rounded-md"
          onClick={() => navigate("detail")}
        >
          View
        </button>
      ),
    },
  ];

  return <Table dataSource={dataSource} columns={columns} bordered />;
};

export default TableHome;
