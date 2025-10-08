import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { createContext, useState } from 'react';
export const InstalledAppContext=createContext();

const Root = () => {
    const [installedAppsId,setInstalledAppsId]=useState([]);
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