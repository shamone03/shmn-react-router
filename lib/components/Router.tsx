import { useState, useEffect, PropsWithChildren } from "react";
import { LocationDataContext } from "../contexts/LocationDataContext";
import { Location } from "../contexts/LocationContext";
import { Navigation } from "../contexts/NavigationContext";

export function Router(props: PropsWithChildren<{ routes: Route[] }>) {

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
            <Location.Provider value={{ location: currentLocation }}>
                <Navigation.Provider value={{ navigate }}>
                    {props.children}
                </Navigation.Provider>
            </Location.Provider>
        </LocationDataContext.Provider>

    )
}