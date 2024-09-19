import React, { useEffect, useState } from 'react'
import Loader from 'app/Loader';
import { useUsers } from 'pages/api/users';

const GymManagers = () => {
    const [managers, setManagers] = useState([]);
    const { data, isLoading } = useUsers({});

    useEffect(() => {
        if (data) setManagers(data);
    }, [data]);

    return (
        <div>{managers}</div>
    )
}

export default GymManagers