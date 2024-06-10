import React, { useState } from "react";
import AuthorizationForm from "../forms/AuthorizationForm";

const ButtonAuthorization = ({ Button, Modal }) => {
  const [open1, setOpen1] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleCancel1 = () => {
    console.log("Clicked cancel button");
    setOpen1(false);
  };

  const handleOk1 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen1(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const showModal = () => {
    setOpen1(true);
  };

  return (
    <>
      <Button
        id="form_btn"
        type="primary"
        danger
        onClick={showModal}
        style={{
          margin: 10,
        }}
      >
        Войти
      </Button>
      <Modal
        title="Войти"
        open={open1}
        onOk={handleOk1}
        confirmLoading={confirmLoading}
        onCancel={handleCancel1}
      >
        <p>
          <AuthorizationForm />
        </p>
      </Modal>
    </>
  );
};

export default ButtonAuthorization;
