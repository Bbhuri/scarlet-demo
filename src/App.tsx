import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E7E7E7",
        },
        components: {
          Layout: {
            headerBg: "#E7E7E7",
            headerColor: "#FFFFF",
          },
          Table: {
            borderColor : "#E7E7E7",
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
