import Card from '../ui/Card';

export default function CommitteeGrid({ title, members, layout = 'grid', variant = 'default', startIndex = 0 }) {
    const isLeadership = variant === 'leadership';

    // White Theme + Dark Text (Default) with conditional Logic
    const cardStyle = isLeadership
        ? "shadow-lg transition-all duration-300" // Base foundation, colors applied individually
        : "bg-white border border-primary-700 shadow-sm transition-shadow duration-300";

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
                    className={`${cardStyle} rounded-3xl p-8 flex flex-col items-center gap-6 text-center max-w-3xl w-full ${isLeadership ? 'bg-gradient-to-br from-teal-600 to-teal-800 border-none shadow-[0_10px_30px_rgba(13,148,136,0.3)] hover:shadow-[0_0_50px_rgba(45,212,191,0.6)]' : 'border-primary-700'}`}
                    style={{ minHeight: '320px' }}
                >
                    {/* Centered Image */}
                    <div
                        className={`rounded-full flex items-center justify-center font-bold overflow-hidden shadow-inner flex-shrink-0 ${isLeadership ? 'bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm' : 'bg-primary-50 text-primary-300 border border-primary-100'}`}
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
                        <h4 className={`font-bold mb-2 text-2xl md:text-3xl ${isLeadership ? '!text-white' : 'text-neutral-900'}`}>{member.name}</h4>
                        {member.designation && (
                            <p className={`font-bold mb-3 text-lg md:text-xl ${isLeadership ? '!text-white' : 'text-primary-700'}`}>{member.designation}</p>
                        )}
                        {member.affiliation && (
                            <p className={`text-base md:text-lg leading-relaxed ${isLeadership ? '!text-white' : 'text-neutral-500'}`}>{member.affiliation}</p>
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
                    {members.map((member, i) => {
                        const index = startIndex + i;
                        // Leadership styles calculation
                        const leadershipColors = [
                            'bg-gradient-to-br from-teal-500 to-teal-700 shadow-[0_5px_15px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(94,234,212,0.8)] border-teal-400/30', // Vibrant Teal
                            'bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-[0_5px_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] border-cyan-400/30', // Bright Cyan (Replacing Blue)
                            'bg-gradient-to-br from-slate-500 to-slate-600 shadow-[0_5px_15px_rgba(100,116,139,0.4)] hover:shadow-[0_0_40px_rgba(148,163,184,0.8)] border-slate-400/30', // Light Bluish Grey (Slate)
                            'bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-[0_5px_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(110,231,183,0.8)] border-emerald-400/30', // Vibrant Green
                        ];
                        const leadershipStyle = isLeadership ? leadershipColors[index % leadershipColors.length] : '';

                        return (
                            <div
                                key={i}
                                className={`flex flex-col items-center text-center shadow-sm hover:translate-y-[-4px] w-[47%] lg:w-[320px] flex-shrink-0 lg:flex-none min-w-0 transition-all duration-300
                                ${isLeadership
                                        ? `rounded-2xl border ${leadershipStyle} text-white`
                                        : 'bg-white border border-primary-700 hover:shadow-md overflow-hidden rounded-2xl'
                                    }`}
                                style={{
                                    padding: isLeadership ? '1.5rem 0.5rem' : '1rem 0.25rem',
                                    gap: '0.5rem',
                                    minHeight: '220px'
                                }}
                            >
                                {/* Round Image: Relative Size */}
                                <div
                                    className={`rounded-full flex items-center justify-center font-semibold shrink-0 overflow-hidden shadow-inner 
                                    ${isLeadership
                                            ? 'bg-white/10 text-white border-2 border-white/20'
                                            : 'bg-primary-50 text-primary-300 border border-primary-100'
                                        }`}
                                    style={{
                                        width: isLeadership ? 'clamp(6rem, 15vw, 9rem)' : 'clamp(2.5rem, 10vw, 6rem)',
                                        height: isLeadership ? 'clamp(6rem, 15vw, 9rem)' : 'clamp(2.5rem, 10vw, 6rem)',
                                        fontSize: isLeadership ? '2.5rem' : 'clamp(0.875rem, 2vw, 1.5rem)',
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
                                        className={`font-bold mb-1 leading-tight ${isLeadership ? 'text-base md:text-lg !text-white' : 'text-neutral-900 text-xl'}`}
                                    >
                                        {member.name}
                                    </h4>
                                    {member.affiliation && (
                                        <p
                                            className={`leading-snug mb-2 line-clamp-2 ${isLeadership ? '!text-white text-[10px] md:text-xs' : 'text-neutral-500 text-sm'}`}
                                        >
                                            {member.affiliation}
                                        </p>
                                    )}
                                    <div className="mt-auto">
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className={`truncate block hover:underline font-medium ${isLeadership ? '!text-white hover:text-white/90 text-xs' : 'text-primary-600 hover:text-primary-800 text-sm'}`}
                                            >
                                                {member.email}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
