import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPencilAlt,
    faInbox,
    faMobileAlt,
    faDirections,
    faLock
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faPencilAlt,
        faInbox,
        faMobileAlt,
        faDirections,
        faLock
    );
};

export default Icons;