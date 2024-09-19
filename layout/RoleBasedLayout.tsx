import { Loader } from "app";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface RoleBasedLayoutProps {
    children: ReactNode;
    allowedRoles: string[];
}

const RoleBasedLayout: React.FC<RoleBasedLayoutProps> = ({ children, allowedRoles }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;

        if (!session) {
            router.push('/login');
        } else if (session.user?.role && !allowedRoles.includes(session?.user?.role)) {
            router.push('/unauthorized');
        }
    }, [session, status]);

    if (session && session.user?.role && allowedRoles.includes(session?.user?.role)) {
        return <>{children}</>;
    }

    return <Loader />;
};

export default RoleBasedLayout;
