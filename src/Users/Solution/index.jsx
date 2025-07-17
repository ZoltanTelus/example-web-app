import React, { useEffect, useState } from 'react';

import './index.css';
import User from './User';

const Solution = ({ }) => {
    const [data, setData] = useState(null);
    const [sortedByAge, setSortedByAge] = useState(false);

    const fetchData = async () => {
        const url = "https://dummyjson.com/users";
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handleContextMenu);
        return () => document.removeEventListener("contextmenu", handleContextMenu);
    }, []);

    if (!data) return;

    return <div id="solution">

        <button className={'sorted-by-age' + (sortedByAge ? ' active' : '')} onClick={() => setSortedByAge(!sortedByAge)}>{sortedByAge ? 'Sorted' : 'Sort'} by age</button>
        <div id="users">
            {data.users.sort((a, b) => {
                if (sortedByAge) return a['age'] - b['age'];
                else return a['firstName'].localeCompare(b['firstName']);
            }).map(user => {
                return <User
                    key={'user-' + user.id}
                    user={user}
                />
            })}
        </div>
    </div>
}

export default Solution;