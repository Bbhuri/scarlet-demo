import { Form, Input } from "antd";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [wrong, setWrong] = useState<string | null>(null);

  const onFinish = (values: { email: string; password: string }) => {
    localStorage.setItem("token", "token");
    navigate("/home");
    console.log("Login attempted with:", values);
  };
  return (
    <>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          //   label={<span className="text-lg">Email</span>}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            prefix={<IoMdMail className="site-form-item-icon" />}
            onChange={() => setWrong(null)}
            placeholder="admin"
          />
        </Form.Item>
        <Form.Item
          name="password"
          //   label={<span className="text-lg">Password</span>}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={() => setWrong(null)}
            prefix={<FaLock className="site-form-item-icon" />}
            placeholder="password"
          />
        </Form.Item>
        {wrong && <p className="text-red-500 text-center my-3">{wrong}</p>}
        <Form.Item>
          <div className="flex justify-center ">
            <button
              type="submit"
              className="flex justify-center  items-center gap-2 px-4 py-2 bg-black text-white  rounded-md hover:bg-white hover:text-black border-2 border-[#5B5D5C] hover:scale-105 duration-300"
            >
              Login
            </button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
