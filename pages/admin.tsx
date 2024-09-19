import RoleBasedLayout from 'layout/RoleBasedLayout';

const AdminPage = () => {
    return (
        <RoleBasedLayout allowedRoles={['SUPER_ADMIN']}>
            <div>
                <h1>Admin Dashboard</h1>
            </div>
        </RoleBasedLayout>
    );
};

export default AdminPage;
