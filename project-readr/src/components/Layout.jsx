import { WelcomeNavbar } from "./WelcomeNavbar"
import { HomepageNavbar } from "./HomepageNavbar"
import { Outlet, useLocation } from "react-router-dom"

export function Layout(){
    const location = useLocation();
    const isHomepage = location.pathname === "/Homepage" || location.pathname === "/Profile" || location.pathname ==="/ReadingList";
    

    return(
        <>
            {isHomepage ? <HomepageNavbar /> : <WelcomeNavbar />}
            <main>
                <Outlet/>
            </main>
        </>
    )
}
