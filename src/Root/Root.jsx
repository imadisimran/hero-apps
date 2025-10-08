import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { createContext, useState } from 'react';
import { getFromLocalStorage } from '../Utility/manageLocalStorage';
export const InstalledAppContext=createContext();

const Root = () => {
    const [installedAppsId,setInstalledAppsId]=useState(getFromLocalStorage());
    return (
        <>
            <Header></Header>
            <InstalledAppContext.Provider value={[installedAppsId,setInstalledAppsId]}>
                <Outlet></Outlet>
            </InstalledAppContext.Provider>
            <Footer></Footer>
        </>
    );
};

export default Root;