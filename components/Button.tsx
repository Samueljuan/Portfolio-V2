'use client'

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary'

type ButtonBaseProps = {
    children: ReactNode
    variant?: ButtonVariant
    className?: string
}

type ButtonLinkProps = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> & {
        href: string
    }

type ButtonButtonProps = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
        href?: undefined
    }

export function Button(props: ButtonLinkProps | ButtonButtonProps) {
    const { children, className, variant = 'primary' } = props
    const classes = ['btn', variant === 'primary' ? 'btn-primary' : '', className]
        .filter(Boolean)
        .join(' ')

    if ('href' in props) {
        const { href, target, rel, download, ...rest } = props
        const isExternal =
            href.startsWith('http') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:')
        const shouldUseAnchor = isExternal || Boolean(download) || Boolean(target) || Boolean(rel)

        if (shouldUseAnchor) {
            return (
                <a href={href} className={classes} target={target} rel={rel} download={download} {...rest}>
                    {children}
                </a>
            )
        }

        return (
            <Link href={href} className={classes} {...rest}>
                {children}
            </Link>
        )
    }

    const { type = 'button', ...rest } = props
    return (
        <button type={type} className={classes} {...rest}>
            {children}
        </button>
    )
}
