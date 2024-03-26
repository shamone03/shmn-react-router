import { useContext } from "react";
import { LocationDataContext } from "../contexts/LocationDataContext";
import { LocationContext } from "../contexts/LocationContext";

function Outlet() {

    const routes = useContext(LocationDataContext);
    const { location } = useContext(LocationContext);
    const current = routes.filter(i => i.route.test(location)).map(i => i.element);
    if (current.length === 0) {
        console.warn(`no matching element on route ${location}`);
    }

    if (current.length > 1) {
        console.warn(`more than one element on route ${location}`);
    }
    return (
        <>
            {current}
        </>
    )
}

export default Outlet;