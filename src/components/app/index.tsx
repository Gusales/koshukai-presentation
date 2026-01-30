/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { StepContextProvider } from "../../contexts/step-context";
import { AdminView } from "../../views/admin";
import { PublicView } from "../../views/public";
import { NavigationControls } from "../navigation-controls";

export const App = () => {
    const [isAdminRoute, setIsAdminRoute] = useState<boolean>(false);

    useEffect(() => {
        const path = window.location.pathname

        setIsAdminRoute(path === '/admin')
    }, [])

    
    return(
        <StepContextProvider>
            <>
                <NavigationControls />
                {
                    isAdminRoute ? <AdminView /> : <PublicView />
                }
            </>
        </StepContextProvider>
    )
}