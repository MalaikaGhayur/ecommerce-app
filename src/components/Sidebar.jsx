import React from 'react'

import './Sidebar.css';
const Sidebar = () => {
    return (
        <div >
            {/* <h1>myapp</h1> */}
            <div>
                <ul>
                    <li><span class="material-symbols-outlined">dashboard</span>Dashboard</li>
                    <li><span class="material-symbols-outlined">electrical_services</span>Services</li>
                    <li><span class="material-symbols-outlined">update</span>Updates</li>
                    <li><span class="material-symbols-outlined">person</span>Portfolio</li>
                    <li><span class="material-symbols-outlined">phone_in_talk</span>Contacts</li>
                    <li><span class="material-symbols-outlined">cognition</span>Ideas</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
