import React from "react";
import { redirect } from "next/navigation";

const ClientServerLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <nav>
                <ul>
                    <li> <div onClick={redirect("/dashboard/10000/server")}>Server Page</div></li>
                    <li> <div onClick={redirect("/dashboard/10000/client")}>Client Page</div></li>
                </ul>
            </nav>
            {children}
        </div>
    );
}

export default ClientServerLayout;
