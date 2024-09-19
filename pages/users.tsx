import React from 'react'
import RoleBasedLayout from 'layout/RoleBasedLayout'
import { Users } from 'app'

const UsersPage = () => {
    return (
        <RoleBasedLayout allowedRoles={['USER']}>
            <Users />
        </RoleBasedLayout>
    )
}

export default UsersPage