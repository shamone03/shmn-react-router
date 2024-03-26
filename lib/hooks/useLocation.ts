import { useContext } from "react";
import { Location } from "../contexts/LocationContext";

export const useLocation = () => useContext(Location).location;