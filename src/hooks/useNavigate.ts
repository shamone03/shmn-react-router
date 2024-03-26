import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

export const useNavigate = () => useContext(NavigationContext).navigate;