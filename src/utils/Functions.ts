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
    return (
        str
            // Split ALL-CAPS acronym followed by Capital+lowercase (e.g., "XMLHttp" -> "XML-Http")
            .replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1-$2')
            // Split lower/digit followed by Capital ONLY when that Capital is followed by lowercase (e.g., "fooBar" -> "foo-Bar"; avoids "SaaS" -> "Saa-S")
            .replace(/([a-z0-9])([A-Z])(?=[a-z])/g, '$1-$2')
            // Split lower/digit before a run of 2+ Capitals at end or before non-lowercase (e.g., "forID" -> "for-ID", "getURL" -> "get-URL")
            .replace(/([a-z0-9])([A-Z]{2,})(?=$|[^a-z])/g, '$1-$2')
            // Replace non-alphanumerics with hyphens
            .replace(/[^a-zA-Z0-9]+/g, '-')
            // Trim duplicate/edge hyphens
            .replace(/^-+|-+$/g, '')
            // Lowercase
            .toLowerCase()
    )
}

// Convert kebab-case to Normal Capitalized String
export function fromKebabCase(str: string): string {
    const withSpaces = str.replace(/-/g, ' ')
    return capitalizeWords(withSpaces)
}
