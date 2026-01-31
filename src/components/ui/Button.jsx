import { Link } from 'react-router-dom';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500 shadow-sm',
        secondary: 'bg-white text-primary-700 border-2 border-primary-700 hover:bg-primary-50 focus:ring-primary-500',
        outline: 'bg-transparent text-primary-700 border border-primary-300 hover:border-primary-500 hover:bg-primary-50 focus:ring-primary-500',
        ghost: 'bg-transparent text-primary-700 hover:bg-primary-50 focus:ring-primary-500',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // External link
    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    // Internal link
    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    // Button
    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
