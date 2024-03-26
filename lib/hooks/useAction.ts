import { useContext } from "react";
import { LocationDataContext } from "../contexts/LocationDataContext";

export function useAction<T>(): ActionFunction<T> {
    const routes = useContext(LocationDataContext);
    const location = routes.find(i => i.route.test(window.location.pathname));
    if (!location) {
        throw new Error(`invalid location ${window.location.pathname} not found in routes`);
    }
    if (!location.action) {
        throw new Error(`${window.location.pathname} did not have action`);
    }
    return location.action;
}