import React, { FC } from 'react';
import { Button, ButtonProps } from "antd";
import { Wrapper } from "./style";

interface ButtonComponentProps extends ButtonProps {
    label: string;
    customStyle?: React.CSSProperties;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
    label,
    type = 'primary',
    onClick,
    disabled = false,
    size = 'middle',
    shape,
    customStyle,
    ...restProps
}) => {
    return (
        <Wrapper style={customStyle}>
            <Button
                type={type}
                onClick={onClick}
                disabled={disabled}
                size={size}
                shape={shape}
                {...restProps}
            >
                {label}
            </Button>
        </Wrapper>
    );
};

export default ButtonComponent;
