import React from 'react'

const Navbar = () => {
    const token = localStorage.getItem('redbulltoken')

  return (
    <div className='nav-bar'>
        <ul className='nav-div'>
            {token? <li >Questions</li>:''}
            <li>Leaderboard</li>
        </ul>
    </div>
  )
}

export default Navbar