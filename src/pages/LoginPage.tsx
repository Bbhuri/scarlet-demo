import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { FaUserLock } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      showModal();
    }
  }, [location.pathname]);

  return (
    <Modal
      //   title="Basic Modal"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <FaUserLock size={80} />
        <p className="text-2xl font-bold">Login</p>
      </div>
      <LoginForm />
    </Modal>
  );
};

export default LoginPage;
