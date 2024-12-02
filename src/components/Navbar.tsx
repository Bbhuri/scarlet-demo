import { Dropdown, Layout, MenuProps, Space } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuGaugeCircle } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const token = localStorage.getItem("token");

  const loginMenu = [
    { key: "signup", label: "Sign up", href: "" },
    { key: "login", label: "Log in", href: "/login" },
  ];

  const menuItems = [
    { key: "home", label: "Home", href: "/home" },
    { key: "products", label: "Products", href: "" },
    { key: "services", label: "Services", href: "" },
    { key: "contact", label: "Contact", href: "" },
  ];

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "Edit profile",
    },
    {
      key: "change-password",
      label: "Change password",
    },
    {
      key: "logout",
      danger: true,
      label: (
        <p
          onClick={() => {
            localStorage.clear();
            navigate("");
          }}
        >
          Logout
        </p>
      ),
    },
  ];

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <Header className="flex items-center justify-between py-10 px-4 border-b-1 border-black">
      <div className="flex items-center md:flex">
        <div className="flex items-center gap-2 mr-10 text-black">
          <LuGaugeCircle size={50} />
          <p className={`duration-150 text-2xl font-medium`}>
            Scarlet Online Demo
          </p>
        </div>
        {menuItems.map((item, index) => (
          <div
            key={item.key}
            onClick={() => {
              if (item.href) {
                navigate(`${item.href}`);
              }
            }}
            className="flex items-center  hover:text-gray-500 self-center cursor-pointer ml-4"
          >
            <p
              className={`h-8 flex items-center duration-300 ${
                currentPath === item.href
                  ? "scale-110 border-b-2 border-black"
                  : ""
              }`}
            >
              {typeof item.label === "string" ? item.label : item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 mr-10 ">
        {!token ? (
          loginMenu.map((item, index) => (
            <div
              key={item.key}
              onClick={() => {
                if (item.key === "logout") {
                  localStorage.clear();
                  navigate("/");
                }
                if (item.href) {
                  navigate(`${item.href}`);
                }
              }}
              className="flex items-center  hover:text-main/70 self-center cursor-pointer"
            >
              <p
                className={`h-8 flex items-center duration-300 ${
                  currentPath === item.href
                    ? "scale-110 border-b-2 border-black"
                    : ""
                }`}
              >
                {typeof item.label === "string" ? item.label : item.label}
              </p>
              {index < loginMenu.length - 1 && !token && (
                <span className="pl-5 text-black">|</span>
              )}
            </div>
          ))
        ) : (
          <div className="flex items-center gap-4">
            <FaUserAlt />
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Narongphon <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        )}
      </div>
    </Header>
  );
};

export default Navbar;
