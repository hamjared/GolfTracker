import { useEffect, useState } from "react";


export function useLocalStorage<T>(key: string, initialValue: T | (() => T)){
    const isLocalStorageAvailable = typeof window !== "undefined" && window.localStorage;
  
    const storedValue = isLocalStorageAvailable
      ? localStorage.getItem(key)
      : null;
  
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T>(() => {
        const jsonValue = window.localStorage.getItem(key)
        if (jsonValue == null) {
            if (typeof initialValue === "function")
            {
                return (initialValue as () => T)()
            }
            else {
                return initialValue
            }
        }
        else {
            return JSON.parse(jsonValue)
        }
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue] as [T, typeof setValue]
}


