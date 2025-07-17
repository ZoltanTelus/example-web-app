import React, { useState } from 'react';

import './index.css';

const User = ({ user }) => {

    const [checked, setChecked] = useState(false);

    return <div className={'user' + (checked ? ' checked' : '')}>
        <img src={user.image} />
        <div>
            <input type="checkbox" id={user.id} onChange={() => setChecked(!checked)} checked={checked} />
            <label htmlFor={user.id}>{user.firstName} {user.lastName} ({user.age})</label>
        </div>
    </div>
}

export default User;