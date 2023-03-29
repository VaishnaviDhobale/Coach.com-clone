

import { createContext, useState } from "react";

export const updateUrl = createContext();

const ChangeUrl = ({children}) => {

    let [sideBarKey,updateSidebarKey] = useState("womens");

    const updateSidebarUrl = (payload) => {
        updateSidebarKey(payload)
    }
    return <updateUrl.Provider value={{sideBarKey,updateSidebarUrl}}>{children}</updateUrl.Provider>
}


export default ChangeUrl