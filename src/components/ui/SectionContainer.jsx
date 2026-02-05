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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6">
                {title}
            </h2>
            {subtitle && (
                <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
