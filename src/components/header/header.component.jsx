import React from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../'
import './header.style.scss'
import { auth } from '../../firebase/firebase.utils'
export default function Header({ currentUser }) {
    return (
        <div className="header">
            <Link className="container" to='/'>
                {/* <Logo className="logo" /> */}
            </Link>

            <div className="options">
                <Link className="option" to='/'>HOMEPAGE</Link>
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contract'>CONTACT</Link>
                {

                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                        <Link className="option" to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}
