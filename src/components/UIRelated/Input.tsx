'use client'

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
    as = 'input',
    onChangeAction,
    ...props
}: InputProps) {
    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
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

            {as === 'textarea' ? (
                <textarea
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={renderClasses(
                        'input-box',
                        error && 'input-error',
                        props.className
                    )}
                />
            ) : (
                <input
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className={renderClasses(
                        'input-box',
                        error && 'input-error',
                        props.className
                    )}
                />
            )}

            {error && <p className='input-error-message'>{error}</p>}
        </div>
    )
}
