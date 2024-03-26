import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

export const useLocation = () => useContext(LocationContext).location;