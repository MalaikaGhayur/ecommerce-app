import React from 'react'


import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className='main-part' >
            {/* <h1>myapp</h1> */}
            <div className='sidebar-main'>
                {/* <span class="material-symbols-outlined">close</span> */}
                <ul class="icon-list">
                    <li><span class="material-symbols-outlined" >dashboard</span><span className='padding'>Dashboard</span></li>
                    <li><span class="material-symbols-outlined">electrical_services</span><span className='padding'>Services</span></li>
                    <li><span class="material-symbols-outlined">update</span><span className='padding'>Updates</span></li>
                    <li><span class="material-symbols-outlined">phone_in_talk</span><span className='padding'>Contacts</span></li>
                    <li><span class="material-symbols-outlined">cognition</span><span className='padding'>Ideas</span></li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar
