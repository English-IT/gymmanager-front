import React, { FC } from "react";
import { Wrapper } from "./style";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

const DatePickerComponent: FC = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Wrapper>
      <DatePicker onChange={onChange} />
    </Wrapper>
  );
};

export default DatePickerComponent;
