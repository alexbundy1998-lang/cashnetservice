import type React from "react"

interface FormFieldErrorProps {
    error?: string
    id: string
}

export function FormFieldError({ error, id }: FormFieldErrorProps) {
    if (!error) return null

    return (
        <p
            id={id}
            role="alert"
            aria-live="polite"
            className="text-sm font-medium text-destructive"
        >
            {error}
        </p>
    )
}
