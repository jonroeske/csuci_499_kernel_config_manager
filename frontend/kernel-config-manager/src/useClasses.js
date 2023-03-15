import { useEffect, useState } from "react";

const useClasses = () => {
    const [classes, setClasses] = useState();

    const fetchData = async () => {
        const response = await fetch ('http://localhost:3001/get/all', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setClasses(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(classes)
}

export default useClasses