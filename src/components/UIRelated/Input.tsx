'use client'

// Core
import { ChangeEvent } from 'react'
// Functions
import { renderClasses, sanitizeInput } from '@/src/utils/Functions'
// Types
import { InputProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/UIRelated/Input.css'

export default function Input({
    label,
    error,
    onChangeAction,
    ...props
}: InputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const safeValue = sanitizeInput(e.target.value)
        onChangeAction(safeValue)
    }

    const placeholder =
        props.placeholder && props.required
            ? `${props.placeholder} *`
            : props.placeholder

    return (
        <div className='input-field'>
            {label && (
                <label
                    htmlFor={props.name}
                    className={renderClasses(
                        'input-label',
                        error && 'input-label-error'
                    )}
                >
                    {label}
                </label>
            )}
            <input
                {...props}
                placeholder={placeholder}
                onChange={handleChange}
                className={renderClasses(
                    'input-box',
                    error && 'input-error',
                    props.className
                )}
            />
            {error && <p className='input-error-message'>{error}</p>}
        </div>
    )
}
