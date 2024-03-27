# SHMN REACT ROUTER

- basic implementation of a client side router for react
- loader and action functions
- automatically changes components rendered based on the current location
- automatically runs appropriate loader function based on the route
- automatically runs action functions based on the current route

## Future Work

- form component to automatically run action on form submit
- error boundary elements
- support for nested routes
- run loaders that are independent of each other at the same time, preventing waterfall

## Example Project Showcasing All Features:

```ts
import { Route, Outlet, ClientLink, Router, useAction, useLoaderData, useNavigate } from "shmn-react-router"

// loader
function loadProfile() {
    return localStorage.getItem("username"); // this could be an api request instead
}

// action
function loginAction(formData: FormData): { result: boolean } {
    localStorage.setItem("username", formData.get("username") as string); // validate and send your form details
    return { result: true }; // if action was a success
}

function Profile() {
    const data = useLoaderData<ReturnType<typeof loadProfile>>();
    return (<>{data}</>);
}

function Login() {
    const submit = useAction<ReturnType<typeof loginAction>>();
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // you can choose to use the result of the action right after calling it
        const result = submit(new FormData(e.target as HTMLFormElement))
        if (!result) {
            console.warn("Could not submit form");
        } else {
            navigate("/");
        }
    }
    return (
        <form action="post" onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="submit" value="Login" />
        </form>
    );
}

function App() {
    const routes: Route[] = [
        {
            route: /^(\/profile|\/)$/, // regex for more expressive routes
            element: <Profile key={0} />,
            loader: loadProfile
        },
        {
            route: /^\/login$/,
            element: <Login key={1} />,
            action: loginAction
        }
    ]

    return (
        <div className="App">
            <Router routes={routes} >
                <nav>
                    <ClientLink to="/profile">Profile</ClientLink> {/* ClientLink is a plain anchor tag that won't cause a reload */}
                    <ClientLink to="/login">Logout</ClientLink>
                </nav>
                <Outlet /> {/* to render a matching route element */}
            </Router>
        </div>
    );
}

export default App;
```
