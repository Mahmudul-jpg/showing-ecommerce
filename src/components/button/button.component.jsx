import React from 'react'
import './button.style.scss'
export default function Button({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <div>
            <button className={`${isGoogleSignIn ? 'google-sign-in' : ''}custom-btn`} {...otherProps}>
                {children}
            </button>
        </div>
    )
}
