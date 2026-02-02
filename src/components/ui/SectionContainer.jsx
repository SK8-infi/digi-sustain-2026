export default function SectionContainer({
    children,
    className = '',
    background = 'white',
    id,
}) {
    const backgrounds = {
        white: 'bg-white',
        light: 'bg-neutral-50',
        primary: 'bg-primary-50',
        dark: 'text-white',
    };

    const style = background === 'dark' ? { backgroundColor: '#1a4731' } : {};

    return (
        <section id={id} className={`py-16 md:py-20 ${backgrounds[background]} ${className}`} style={style}>
            <div className="max-w-7xl mx-auto px-1">
                {children}
            </div>
        </section>
    );
}

export function SectionHeader({
    title,
    subtitle,
    centered = true,
    className = '',
}) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
