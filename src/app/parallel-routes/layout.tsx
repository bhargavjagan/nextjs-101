import React from "react";

const ParallelRouteLayout = ({
    children,
    team,
    analytics
}: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    team: React.ReactNode;
}) => {

    return (<>
        {children}
        {team}
        {analytics}
    </>);
}

export default ParallelRouteLayout;
