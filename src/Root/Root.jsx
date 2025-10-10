import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utility/manageLocalStorage';
import Loader from '../Components/Loader/Loader';
export const InstalledAppContext=createContext();

const Root = () => {
    const [installedAppsId,setInstalledAppsId]=useState(getFromLocalStorage());
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>setLoading(false),1000)
    },[])

    if(loading){
        return <Loader></Loader>
    }

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