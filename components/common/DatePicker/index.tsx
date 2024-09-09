import React, { FC } from "react";
import { Wrapper, Label } from "./style";
import { DatePicker } from "antd";
import { Controller } from "react-hook-form";
import { DatePickerComponentProps } from "./type";

const DatePickerComponent: FC<DatePickerComponentProps> = (props) => {
  const { label, control, name, rules, placeholder, error, onChange, ...args } =
    props;
  const isRequired = rules?.required ? true : false;

  return (
    <Wrapper>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
            <Label htmlFor={name}>
              {isRequired && <span style={{ color: "red" }}>* </span>}
              {label}{" "}
            </Label>
            <DatePicker
              {...args}
              {...field}
              id={name}
              placeholder={placeholder}
              onChange={onChange}
              style={{
                borderColor: error ? "red" : "unset",
              }}
            />
          </>
        )}
      />
      {error && <p style={{ color: "red" }}>{error?.message}</p>}
    </Wrapper>
  );
};

export default DatePickerComponent;
