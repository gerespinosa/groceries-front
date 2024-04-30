import { createContext, useState, useContext } from 'react'
import { useAccess } from '../context/access.context.jsx';
import { getUserListsRequest } from '../services/lists.services.js'

export const listsContext = createContext()

export const ListsProvider = ({ children }) => {

    const { userFound } = useAccess()
    const userId = userFound._id

    const [lists, setLists] = useState([])



    const getUserLists = async () => {
        try {
            const res = await getUserListsRequest(userId);
            const listsFound = res.data[0];
            setLists(listsFound);
            return listsFound
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <listsContext.Provider value={{ lists, setLists, getUserLists }}>
            {children}
        </listsContext.Provider>
    )
}

export const useLists = () => useContext(listsContext)

