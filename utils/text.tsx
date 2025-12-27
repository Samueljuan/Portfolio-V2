import type { ReactNode } from 'react'

export function renderWithEmphasis(text: string): ReactNode[] {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={`${part}-${index}`}>
                    {part.slice(2, -2)}
                </strong>
            )
        }
        return part
    })
}
