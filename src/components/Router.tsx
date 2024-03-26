import { useState, useEffect, PropsWithChildren } from "react";
import { LocationDataContext } from "../contexts/LocationDataContext";
import { LocationContext } from "../contexts/LocationContext";
import { NavigationContext } from "../contexts/NavigationContext";

function Router(props: PropsWithChildren<{ routes: Route[] }>) {

    const [currentLocation, setCurrentLocation] = useState(window.location.pathname);

    useEffect(() => {
        console.log(window.location.pathname);
        const navigate = () => {
            setCurrentLocation(window.location.pathname);
        }
        window.addEventListener('popstate', navigate);
        return () => window.removeEventListener('popstate', navigate);
    }, []);

    const navigate = (route: string) => {
        window.history.pushState({}, "", route);
        setCurrentLocation(route);
    }

    return (
        <LocationDataContext.Provider value={props.routes}>
            <LocationContext.Provider value={{ location: currentLocation }}>
                <NavigationContext.Provider value={{ navigate }}>
                    {props.children}
                </NavigationContext.Provider>
            </LocationContext.Provider>
        </LocationDataContext.Provider>

    )
}

export default Router;