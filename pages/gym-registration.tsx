import { GymRegistration } from 'app'
import RoleBasedLayout from 'layout/RoleBasedLayout'
import React from 'react'

const GymRegistrationPage = () => {
    return (
        <RoleBasedLayout allowedRoles={['SUPER_ADMIN']}>
            <GymRegistration />
        </RoleBasedLayout>
    )
}

export default GymRegistrationPage