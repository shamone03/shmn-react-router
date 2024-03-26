import { useContext } from "react";
import { Navigation } from "../contexts/NavigationContext";

export const useNavigate = () => useContext(Navigation).navigate;