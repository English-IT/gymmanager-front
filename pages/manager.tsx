import RoleBasedLayout from 'layout/RoleBasedLayout';

const ManagerPage = () => {
    return (
        <RoleBasedLayout allowedRoles={['USER']}>
            <div>
                <h1>Manager Dashboard</h1>
            </div>
        </RoleBasedLayout>
    );
};

export default ManagerPage;
