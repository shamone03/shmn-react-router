type LocationData<T> = {
    data: T,
    isActive: boolean
}

type LocationContext = {
    location: string
}

type NavigationContext = {
    navigate: (route: string) => void
}

type ActionFunction<T> = (req: FormData) => T
type LoaderFunction<T> = () => T

type Route = {
    route: RegExp,
    element: JSX.Element,
    loader?: LoaderFunction,
    action?: ActionFunction
}

type Result<T> = {
    success: boolean,
    message: string,
    data: T
}
