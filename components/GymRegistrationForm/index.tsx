import React from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Radio, Checkbox, Row, Col } from "antd";
import { Input, Button } from "components"
import { FormValues } from "./type";
import { DefaultValues, weekdaysOptions } from "./json";
import { TimePickerWrapper, Wrapper } from "./style";
import { Label } from "components/common/Input/style";
import { TimePickerComponent } from "components/common/TimePicker";

const GymForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: DefaultValues.defaultValues });

    const onSubmit = (data: FormValues) => {
        console.log("submit")
        console.log("Form Data: ", data);
    };

    const selectedDays = useWatch({
        control,
        name: "workingDays",
    });

    const isWeekendSelected = selectedDays.includes("Saturday") || selectedDays.includes("Sunday");

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Input control={control} name="gymName" label="Gym Name" error={errors.gymName} rules={{ required: "Gym name is required" }} />
            <Input control={control} name="phoneNumber" label="Phone Number" error={errors.phoneNumber} rules={{ required: "Phone number is required" }} />
            <Input control={control} name="address" label="Address" error={errors.address} rules={{ required: "Adress is required" }} />
            <Input control={control} name="email" label="Email" type="email" />
            <Input control={control} name="gymOwner" label="Gym owner" error={errors.gymOwner} rules={{ required: "Gym owner's name is required" }} />
            <Wrapper>
                <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                        <>
                            <Label style={{ marginRight: '10px' }} htmlFor="gender"><span style={{ color: 'red' }}>* </span>Gender: </Label>
                            <Radio.Group {...field}>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Both">Both</Radio>
                            </Radio.Group>
                        </>
                    )}
                />
            </Wrapper>
            <Wrapper>
                <Controller
                    name="workingDays"
                    control={control}
                    rules={{ required: "Please select working days" }}
                    render={({ field }) => (
                        <>
                            <Label htmlFor="workingDays"><span style={{ color: 'red' }}>* </span>Open Weekdays</Label>
                            <Checkbox.Group {...field}>
                                <Row gutter={[16, 16]}>
                                    {weekdaysOptions.map((option) => (
                                        <Col key={option.value} xs={12} sm={8} md={6}>
                                            <Checkbox value={option.value} style={{ fontSize: '16px' }}>
                                                {option.label}
                                            </Checkbox>
                                        </Col>
                                    ))}
                                </Row>
                            </Checkbox.Group>
                        </>
                    )}
                />
                {errors.workingDays && <p style={{ color: "red" }}>{errors.workingDays.message}</p>}
            </Wrapper>
            <Wrapper>
                <Label><span style={{ color: 'red' }}>* </span>Weekday Opening and Closing Times</Label>
                <TimePickerWrapper>
                    <TimePickerComponent
                        control={control}
                        name="weekdayOpeningTime"
                        rules={{ required: "Weekday opening time is required" }}
                        error={errors.weekdayOpeningTime}
                        placeholder="Weekday Opening Time"
                    />
                    <TimePickerComponent
                        control={control}
                        name="weekdayClosingTime"
                        rules={{ required: "Weekday closing time is required" }}
                        error={errors.weekdayClosingTime}
                        placeholder="Weekday Closing Time"
                    />
                </TimePickerWrapper>
            </Wrapper>
            <Wrapper>
                <Label style={{ color: isWeekendSelected ? "black" : "#a1a4a2" }}>Weekday Opening and Closing Times</Label>
                <TimePickerWrapper>
                    <TimePickerComponent
                        control={control}
                        name="weekendOpeningTime"
                        error={errors.weekendOpeningTime}
                        placeholder="Weekend Opening Time"
                        disabled={!isWeekendSelected}
                    />
                    <TimePickerComponent
                        control={control}
                        name="weekendClosingTime"
                        error={errors.weekendClosingTime}
                        placeholder="Weekend Closing Time"
                        disabled={!isWeekendSelected}
                    />
                </TimePickerWrapper>
            </Wrapper>
            <Button label="submit" onClick={handleSubmit(onSubmit)} style={{ marginTop: "20px" }} />
        </form>
    );
};

export default GymForm;
