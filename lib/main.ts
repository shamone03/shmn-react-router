export { useAction } from "./hooks/useAction";
export { useLoaderData } from "./hooks/useLoaderData";
export { useLocation } from "./hooks/useLocation";
export { useNavigate } from "./hooks/useNavigate";
export { ClientLink } from "./components/ClientLink";
export { Router } from "./components/Router";
export { Outlet } from "./components/Outlet";
export declare type LocationData<T> = {
    data: T,
    isActive: boolean
}

export declare type LocationContext = {
    location: string
}

export declare type NavigationContext = {
    navigate: (route: string) => void
}

export declare type ActionFunction<T> = (req: FormData) => T
export declare type LoaderFunction<T> = () => T

export declare type Route = {
    route: RegExp,
    element: JSX.Element,
    loader?: LoaderFunction<unknown>,
    action?: ActionFunction<unknown>
}

export declare type Result<T> = {
    success: boolean,
    message: string,
    data: T
}
