// Capitalizing all the sentences
export function capitalizeWords(text: string): string {
    return text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

// Setting <title> & <meta name='description' />
export function setTitleAndDesc(title: string, desc: string): void {
    if (typeof document !== 'undefined') {
        document.title = title

        let metaDesc = document.querySelector<HTMLMetaElement>(
            'meta[name="description"]'
        )

        if (!metaDesc) {
            metaDesc = document.createElement('meta')
            metaDesc.name = 'description'
            document.head.appendChild(metaDesc)
        }

        metaDesc.content = desc
    }
}

// Function for making input safe from XSS attacks
export function sanitizeInput(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
}

// Acts like clsx
export function renderClasses(
    ...classes: (string | false | undefined | null)[]
): string {
    return classes.filter(Boolean).join(' ')
}

// Convert string to kebab-case
export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[_\s]+/g, '-')
        .toLowerCase()
}

// Convert kebab-case to Normal Capitalized String
export function fromKebabCase(str: string): string {
    const withSpaces = str.replace(/-/g, ' ')
    return capitalizeWords(withSpaces)
}
