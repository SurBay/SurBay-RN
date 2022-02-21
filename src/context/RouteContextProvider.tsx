import React, { createContext, useState } from 'react'

export type routeType = {
    currentRouteName: undefined|string,
    bottomNavHeader: undefined|boolean,
    bottomNavBar: "none" | "flex",
    currentRouteNameHandler: (currentRouteName: string) => void
    bottomNavHeaderHandler: (bottomNavHeader: boolean) => void,
    bottomNavBarHandler: (bottomNavBar: "none"|"flex") => void,
    setOptions: (currentRouteName: string, bottomNavHeader: boolean, bottomNavBar: "none"|"flex") => void
}

export const routeContext = createContext<routeType>({
    currentRouteName: undefined,
    bottomNavHeader: undefined,
    bottomNavBar: "flex",
    currentRouteNameHandler: () => {},
    bottomNavHeaderHandler: () => {},
    bottomNavBarHandler: () => {},
    setOptions: () => {}
})

const RouteContextProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [currentRouteName, setCurrentRouteName] = useState<undefined|string>(undefined)
    const [bottomNavHeader, setbottomNavHeader] = useState<undefined|boolean>(true)
    const [bottomNavBar, setbottomNavBar] = useState<"none"|"flex">("flex")

    const currentRouteNameHandler = (_currentRouteName: string) => { setCurrentRouteName(_currentRouteName) }
    const bottomNavHeaderHandler = (_bottomNavHeader: boolean) => { setbottomNavHeader(_bottomNavHeader) }
    const bottomNavBarHandler = (_bottomNavBar: "none"|"flex") => { setbottomNavBar(_bottomNavBar) }

    const setOptions = (_currentRouteName:string, _bottomNavHeader: boolean, _bottomNavBar: "none"|"flex") => {
        setCurrentRouteName(_currentRouteName)
        setbottomNavHeader(_bottomNavHeader)
        setbottomNavBar(_bottomNavBar)
    }
    const values = {currentRouteName, bottomNavHeader, bottomNavBar, currentRouteNameHandler, bottomNavHeaderHandler, bottomNavBarHandler, setOptions}


    return (
        <routeContext.Provider value={values}>
            {children}
        </routeContext.Provider>
    )
}

export default RouteContextProvider