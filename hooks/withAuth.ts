import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

export const withAuth = async (
  context: GetServerSidePropsContext,
  allowedRoles: string[]
) => {
  const session = await getSession(context);

  // If the user is not logged in, redirect to the login page
  if (!session) {
    console.log("Session is here", session);
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const userRole = session.user.role;

  // Redirect based on specific role
  if (userRole === "USER") {
    return {
      redirect: {
        destination: "/manager",
        permanent: false,
      },
    };
  } else if (userRole === "SUPER_ADMIN") {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  // Check if user's role is allowed
  if (userRole && !allowedRoles.includes(userRole)) {
    return {
      redirect: {
        destination: "/unauthorized",
        permanent: false,
      },
    };
  }

  // If the user is authorized, pass the session as a prop
  return {
    props: {
      session,
    },
  };
};
