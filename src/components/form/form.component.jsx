import React from 'react'
import '../form/form.style.scss'
export default function Form({ handleChange, label, ...otherProps }) {
    return (
        <div className="group">
            <input className="input" onChange={handleChange}  {...otherProps} />
            {
                label ? (<label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>
                    {label}
                </label>) : null
            }
        </div>
    )
}
