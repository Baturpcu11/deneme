import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Batu Chat</span>
        <div className="user">
              <img src="https://images.pexels.com/photos/16160789/pexels-photo-16160789.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>Batu</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar