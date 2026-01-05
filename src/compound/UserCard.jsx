import React, { createContext, useContext, useState } from 'react'

const userCardContext = createContext();

const UserCard = ({ children }) => {

    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <userCardContext.Provider value={{ selectedUser, setSelectedUser }}>
            <div className="border-5 w-max px-10 py-2 border-gray-500 shadow">
                {children}
            </div>
        </userCardContext.Provider>
    )
}

UserCard.Header = ({ title }) => <h3 className='font-bold text-xl'>{title}</h3>

UserCard.List = ({ users }) => {
    const { setSelectedUser } = useContext(userCardContext);

    return (
        <div>
            {users != null && users.map((user, i) => {
                return <div
                    key={i}
                    onClick={() => setSelectedUser(user)}
                    className='border-2 mb-2 cursor-pointer'
                >
                    <p><span className='font-bold'>Name: </span>{user.name}</p>
                    <p><span className='font-bold'>Phone: </span>{user.phone}</p>
                    <p><span className='font-bold'>City: </span>{user.city}</p>
                </div>
            })}
        </div>
    )
}

UserCard.Info = () => {
    const { selectedUser } = useContext(userCardContext);

    if (!selectedUser)
        return <p className='text-yellow-400'>Select user to see details</p>

    return (
        <div className='bg-gray-300 p-2'>
            <h2 className='font-bold text-2xl'>Selected user:</h2>
            <p><span className='font-bold'>Name: </span>{selectedUser.name}</p>
            <p><span className='font-bold'>Phone: </span>{selectedUser.phone}</p>
            <p><span className='font-bold'>City: </span>{selectedUser.city}</p>
        </div>
    )
}

export default UserCard