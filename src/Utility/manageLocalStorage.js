const getFromLocalStorage=()=>{
    const listSTR=localStorage.getItem('installedApps');
    if(listSTR){
        const list=JSON.parse(listSTR);
        return list
    }
    else{
        return []
    }
}

const setToLocalStorage=(id)=>{
    const list=getFromLocalStorage()
    list.push(id)
    localStorage.setItem('installedApps',JSON.stringify(list));
}

export {setToLocalStorage,getFromLocalStorage}