import React from 'react';

export default function AccountSettings() {
    return (
        <div className='settingspage'>
            <h3>Account Settings</h3>
            <div className="settingsbox">
                <form>
                    <h4>Edit Acount Info</h4>
                    <p>Edit First name:</p>
                    <input
                    name="firstname"
                    type="text"
                    />
                    <p>Edit last name:</p>
                    <input 
                    name="lastname"
                    type="text"
                    />
                    <p> Edit Email:</p>
                    <input 
                    name="email"
                    type="email"
                    />
                    <p>Change Password</p>
                    <input 
                    name="password" 
                    type="password"
                    />
                    <br></br>
                    <button type="button" className='submitbuttons'>Confirm changes</button>  
                </form>
            </div>
        </div>
    )
}