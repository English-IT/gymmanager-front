import { GymRegistration } from 'components'
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