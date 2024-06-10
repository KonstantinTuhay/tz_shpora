import React, { useState } from "react";
import RegistrationForm from "../RegistrationForm";

const ButtonRegistration = ({ Button, Modal }) => {
  const [open2, setOpen2] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal2 = () => {
    setOpen2(true);
  };

  const handleOk2 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen2(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel2 = () => {
    console.log("Clicked cancel button");
    setOpen2(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal2}>
        Зарегистрироваться
      </Button>
      <Modal
        title="Регистрация"
        open={open2}
        onOk={handleOk2}
        confirmLoading={confirmLoading}
        onCancel={handleCancel2}
      >
        <p>
          <RegistrationForm />
        </p>
      </Modal>
    </>
  );
};

export default ButtonRegistration;
