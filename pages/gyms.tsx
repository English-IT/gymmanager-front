import GymForm from "app/gymRegistration";
import RoleBasedLayout from "layout/RoleBasedLayout";
import React from "react";

const GymsPage = () => {
  return (
    <RoleBasedLayout allowedRoles={["SUPER_ADMIN"]}>
      <div>GymsPage list page</div>
    </RoleBasedLayout>
  );
};

export default GymsPage;
