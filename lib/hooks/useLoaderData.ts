import { useContext } from "react";
import { LocationDataContext } from "../contexts/LocationDataContext";

export function useLoaderData<T>(): T {
    const routes = useContext(LocationDataContext);
    const location = routes.find(i => i.route.test(window.location.pathname));
    if (!location) {
        throw new Error(`invalid location ${window.location.pathname} not found in routes`);
    }
    if (!location.loader) {
        console.error(location);
        throw new Error(`${window.location.pathname} did not have loader`);
    }
    return location.loader()
}