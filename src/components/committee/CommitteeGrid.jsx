import Card from '../ui/Card';

export default function CommitteeGrid({ title, members, layout = 'grid' }) {
    // White Theme + Dark Text
    const cardStyle = "bg-white border border-primary-700 shadow-sm transition-shadow duration-300";

    if (layout === 'horizontal') {
        // Specifically for Patron: Centered content, wider card
        const member = members; // Should be single object
        return (
            <div className="mb-4 w-full flex flex-col items-center">
                {title && (
                    <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">
                        {title}
                    </h3>
                )}
                <div
                    className={`${cardStyle} rounded-3xl p-8 flex flex-col items-center gap-6 text-center max-w-3xl w-full border-primary-700`}
                    style={{ minHeight: '320px' }}
                >
                    {/* Centered Image */}
                    <div
                        className="bg-primary-50 rounded-full flex items-center justify-center text-primary-300 font-bold overflow-hidden shadow-inner border border-primary-100 flex-shrink-0"
                        style={{
                            width: '180px',
                            height: '180px',
                            fontSize: '3.5rem',
                        }}
                    >
                        {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                            getInitials(member.name)
                        )}
                    </div>
                    {/* Centered Text */}
                    <div className="flex-grow flex flex-col items-center">
                        <h4 className="font-bold text-neutral-900 mb-2 text-3xl md:text-4xl">{member.name}</h4>
                        {member.designation && (
                            <p className="text-primary-700 font-bold mb-3 text-xl md:text-2xl">{member.designation}</p>
                        )}
                        {member.affiliation && (
                            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed">{member.affiliation}</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (layout === 'single') {
        const member = members;
        return (
            <div className="mb-0 w-full h-full flex flex-col">
                <h3 className="text-base md:text-xl font-semibold text-neutral-900 mb-2 md:mb-4 pb-1 md:pb-2 border-b border-primary-200 min-h-[4rem] md:min-h-[4.5rem] flex items-end justify-center text-center">
                    {title}
                </h3>

                {/* Responsive Width: Scales with grid container */}
                <div
                    className={`w-full overflow-hidden ${cardStyle} flex-grow flex flex-col justify-center`}
                    style={{
                        borderRadius: 'clamp(1rem, 3vw, 2rem)',
                        // No max-width restriction to fill the grid cell
                    }}
                >
                    <div
                        className="flex flex-col items-center text-center"
                        style={{
                            padding: 'clamp(1rem, 3vw, 2rem)',
                            gap: 'clamp(0.5rem, 2vw, 1rem)'
                        }}
                    >
                        {/* Round Image: Relative Size */}
                        <div
                            className="bg-primary-50 rounded-full flex items-center justify-center text-primary-300 font-bold overflow-hidden shadow-inner border border-primary-100"
                            style={{
                                width: 'clamp(4rem, 20vw, 9rem)',
                                height: 'clamp(4rem, 20vw, 9rem)',
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                borderRadius: '50%'
                            }}
                        >
                            {member.image ? (
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                                getInitials(member.name)
                            )}
                        </div>
                        <div className="w-full">
                            <h4 className="font-bold text-neutral-900 mb-0.5" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>{member.name}</h4>
                            {member.designation && (
                                <p className="text-primary-700 font-semibold mb-0.5" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>{member.designation}</p>
                            )}
                            {member.affiliation && (
                                <p className="text-neutral-500 mb-1 leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.8vw, 0.9rem)' }}>{member.affiliation}</p>
                            )}
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="text-primary-600 hover:text-primary-800 inline-flex items-center gap-1 break-all justify-center"
                                    style={{ fontSize: 'clamp(0.875rem, 1.8vw, 0.9rem)' }}
                                >
                                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {member.email}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-4 w-full">
            {title && (
                <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">
                    {title}
                </h3>
            )}
            {/* Flex container: Row on mobile (no wrap), Wrap on Desktop (lg) */}
            <div className="w-full">
                <div
                    className="flex flex-row lg:flex-wrap justify-center"
                    style={{
                        gap: 'clamp(0.5rem, 2vw, 1.5rem)',
                        width: '100%'
                    }}
                >
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white border border-primary-700 overflow-hidden flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 w-[47%] lg:w-[320px] flex-shrink-0 lg:flex-none min-w-0"
                            style={{
                                borderRadius: '1rem',
                                padding: '1rem 0.25rem',
                                gap: '0.5rem',
                                minHeight: '220px'
                            }}
                        >
                            {/* Round Image: Relative Size */}
                            <div
                                className="bg-primary-50 rounded-full flex items-center justify-center text-primary-300 font-semibold shrink-0 overflow-hidden shadow-inner border border-primary-100"
                                style={{
                                    width: 'clamp(2.5rem, 10vw, 6rem)',
                                    height: 'clamp(2.5rem, 10vw, 6rem)',
                                    fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                                    borderRadius: '50%'
                                }}
                            >
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    getInitials(member.name)
                                )}
                            </div>
                            <div className="min-w-0 w-full flex flex-col items-center flex-grow">
                                <h4
                                    className="font-bold text-neutral-900 mb-1 leading-tight text-xl"
                                >
                                    {member.name}
                                </h4>
                                {member.affiliation && (
                                    <p
                                        className="leading-snug mb-2 line-clamp-2 text-neutral-500 text-sm"
                                    >
                                        {member.affiliation}
                                    </p>
                                )}
                                <div className="mt-auto">
                                    {member.email && (
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="text-primary-600 hover:text-primary-800 truncate block hover:underline text-sm font-medium"
                                        >
                                            {member.email}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function getInitials(name) {
    if (!name) return '';
    return name
        .split(' ')
        .filter(word => !['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.'].includes(word))
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}
