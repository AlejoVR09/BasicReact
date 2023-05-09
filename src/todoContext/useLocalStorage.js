import React from "react";

function useLocalStorage(itemName) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem]=React.useState([])

    React.useEffect(()=> {
        setTimeout(()=>{
        try {
            const localStorageItem=localStorage.getItem(itemName)
            let parsedItem;
        
            if (!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify([]))
            parsedItem=[]
            } else {
            parsedItem=JSON.parse(localStorageItem)
            }
            setItem(parsedItem)
            setLoading(false)
            
        } catch (error) {
            setError(error)
        }
        },3000)
    },[])

    const saveItems= (newItemList)=>{
        try {
        localStorage.setItem(itemName,JSON.stringify(newItemList))
        setItem(newItemList)
        } catch (error) {
        setError(error)
        }
    }

    return {
        item,
        saveItems,
        loading,
        error,
    };
    }

export {useLocalStorage}