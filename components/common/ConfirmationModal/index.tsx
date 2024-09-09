import React, { FC, useState } from "react";
import { Wrapper } from "./style";
import { Modal } from "antd";
import Button from "../Button";
import { ConfirmationModalProps } from "./type";
const ConfirmationModal: FC<ConfirmationModalProps> = (props) => {
  const { title, content, btnTitle, okBtnFunc } = props;
  const [open, setOpen] = useState<boolean>(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Button label={btnTitle} onClick={showModal} />
      <Modal
        open={open}
        title={title}
        onOk={() => {
          handleOk(), okBtnFunc();
        }}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p>{content}</p>
      </Modal>
    </Wrapper>
  );
};

export default ConfirmationModal;
