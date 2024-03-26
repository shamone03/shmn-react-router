import { PropsWithChildren, useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

function ClientLink({ children, to, onClick }: PropsWithChildren<{ to: string, onClick?: React.MouseEventHandler<HTMLAnchorElement> }>) {
    const { navigate } = useContext(NavigationContext);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        console.log(to);
        navigate(to);
    }

    return (
        <a href={to} onClick={onClick ?? handleClick}>{children}</a>
    )
}

export default ClientLink;