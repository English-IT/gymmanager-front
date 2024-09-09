import React from 'react'
import { Wrapper } from './style'
import { Controller } from 'react-hook-form'
import { TimePicker } from 'antd'
import { TimePickerComponentProps } from './type'

export const TimePickerComponent: React.FC<TimePickerComponentProps> = (props) => {

    const { name, control, error, rules, placeholder, disabled = false } = props
    const timeFormat = 'HH:mm';

    return (
        <Wrapper>
            <Controller
                name={name}
                control={control}
                disabled={disabled}
                rules={rules}
                render={({ field }) => (
                    <TimePicker {...field} format={timeFormat} placeholder={placeholder} />
                )}
            />
            {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Wrapper>
    )
}
