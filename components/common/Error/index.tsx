import { message } from 'antd';
import { useEffect } from 'react';

interface ErrorComponentProps {
    errortext: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errortext }) => {
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (errortext) {
            messageApi.open({
                type: 'error',
                content: errortext,
            });
        }
    }, [errortext, messageApi]);

    return (
        <>
            {contextHolder}
        </>
    );
};
export default ErrorComponent