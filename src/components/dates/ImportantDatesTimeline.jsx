import { importantDates, abstractBookNote } from '../../data/conferenceData';

export default function ImportantDatesTimeline() {
    // (Seafoam + Sky Tint) Cards + Soft Green Border Palette
    const colors = [
        {
            bg: 'bg-teal-50',
            border: 'border-emerald-200',
            text: 'text-teal-900',
            hexBg: 'bg-teal-600'
        },
        {
            bg: 'bg-sky-50',
            border: 'border-emerald-200',
            text: 'text-sky-900',
            hexBg: 'bg-sky-600'
        },
        {
            bg: 'bg-emerald-50',
            border: 'border-emerald-200',
            text: 'text-emerald-900',
            hexBg: 'bg-emerald-600'
        },
        {
            bg: 'bg-cyan-50',
            border: 'border-emerald-200',
            text: 'text-cyan-900',
            hexBg: 'bg-cyan-600'
        },
    ];

    return (
        <div className="relative py-12 flex flex-col items-center w-full overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1a4731 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            {/* Central Spine Line */}
            <div className="absolute left-1/2 top-12 bottom-12 w-0.5 md:w-1 bg-gradient-to-b from-primary-100 via-primary-300 to-primary-100 transform -translate-x-1/2 rounded-full opacity-60"></div>

            {/* Reduced max-width further for tighter feel */}
            <div className="w-full max-w-4xl px-2 relative z-10">
                {importantDates.map((item, index) => (
                    <HexagonItem
                        key={index}
                        item={item}
                        index={index}
                        color={colors[index % colors.length]}
                    />
                ))}
            </div>

            {/* Note about Book of Abstracts - Scaled down */}
            <div className="mt-16 mx-auto max-w-2xl px-4 relative z-20 w-full">
                <div className="bg-gradient-to-r from-teal-50 to-white border border-emerald-200 rounded-xl p-4 md:p-6 text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-5">
                        <svg className="w-16 h-16 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-emerald-800 mb-2 relative z-10">
                        <div className="p-1 bg-emerald-100 rounded-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="font-bold text-base tracking-tight">Important Note</span>
                    </div>
                    <p className="text-emerald-900 text-sm md:text-base leading-relaxed relative z-10 font-medium">{abstractBookNote}</p>
                </div>
            </div>
        </div>
    );
}

function HexagonItem({ item, index, color }) {
    const isEven = index % 2 === 0;
    const { day, month } = parseDate(item.date);
    // Reduced spacing
    const verticalOffset = index !== 0 ? 'mt-6 md:mt-10' : '';

    return (
        <div className={`flex flex-row items-center justify-center w-full relative group ${verticalOffset}`}>

            {/* Left Content */}
            <div className={`flex w-5/12 justify-end pr-2 md:pr-8 transition-all duration-500 ${isEven ? 'opacity-100 translate-x-0' : 'opacity-0 invisible'}`}>
                {isEven && <ContentCard item={item} color={color} align="right" />}
            </div>

            {/* Central Hexagon - Scaled Down */}
            <div className="relative z-10 flex-shrink-0 mx-1 md:mx-2">
                <div className="relative">
                    {/* Pulsing effect */}
                    <div className={`absolute inset-0 ${color.hexBg} rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform scale-75 group-hover:scale-110`}></div>

                    {/* Size reduction: w-16 h-20 (mobile), w-28 h-32 (desktop) */}
                    <div
                        className={`${color.hexBg} w-16 h-20 md:w-28 md:h-32 flex flex-col items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 relative overflow-hidden`}
                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        <div className="absolute top-0 inset-x-0 h-1 bg-white/20"></div>

                        <div className="relative z-10 text-white text-center transform transition-transform group-hover:scale-105">
                            {/* Fluid Typography: clamp(min, preferred, max) */}
                            <div className="font-black leading-none tracking-tighter drop-shadow-sm" style={{ fontSize: day === 'ROLLING' ? 'clamp(0.75rem, 2vw, 1.25rem)' : 'clamp(1.25rem, 4vw, 1.875rem)' }}>{day}</div>
                            {/* Fluid Typography for Month */}
                            <div className="font-bold uppercase mt-0.5 tracking-widest opacity-90 border-t border-white/30 pt-0.5 mx-2 md:mx-3" style={{ fontSize: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>{month}</div>
                        </div>
                    </div>

                    {/* Number Badge - Scaled Down */}
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-white text-neutral-800 w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold shadow-sm border md:border-2 border-white z-20" style={{ fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)' }}>
                        {String(index + 1).padStart(2, '0')}
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className={`flex w-5/12 justify-start pl-2 md:pl-8 transition-all duration-500 ${!isEven ? 'opacity-100 translate-x-0' : 'opacity-0 invisible'}`}>
                {!isEven && <ContentCard item={item} color={color} align="left" />}
            </div>
        </div>
    );
}

function ContentCard({ item, color, align }) {
    // Scaled down padding, fonts, and border widths
    return (
        <div className={`${color.bg} ${color.text} ${color.border} border p-0.5 rounded-lg md:rounded-xl shadow-sm w-full relative transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group/card`}>
            {/* Inner Container */}
            <div className="h-full w-full rounded-md md:rounded-lg p-2.5 md:p-5 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-12 h-12 md:w-16 md:h-16 bg-white/40 rounded-full blur-xl pointer-events-none"></div>

                <div className={`relative z-10 text-${align === 'center' ? 'center' : 'left'}`}>
                    <div className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'} gap-1 md:gap-2`}>
                        <div className="inline-flex items-center gap-1 md:gap-1.5 bg-white/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm border border-white/50" style={{ fontSize: 'clamp(0.5rem, 1.2vw, 0.625rem)' }}>
                            <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${item.isDeadline ? 'bg-red-500' : 'bg-emerald-500'} animate-pulse`}></span>
                            {item.isDeadline ? 'Deadline' : 'Event'}
                        </div>

                        {/* Fluid Typography for Activity Title */}
                        <h3 className="font-bold uppercase leading-tight tracking-wide" style={{ fontSize: 'clamp(0.625rem, 2vw, 1.125rem)' }}>
                            {item.activity}
                        </h3>

                        <div className={`h-0.5 w-6 md:w-8 rounded-full opacity-30 ${color.text.replace('text-', 'bg-')}`}></div>

                        {/* Fluid Typography for Date */}
                        <p className="font-semibold tracking-wide opacity-80" style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.75rem)' }}>
                            {item.date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function parseDate(dateString) {
    if (dateString.toLowerCase().includes('rolling')) {
        return { day: 'ROLLING', month: 'BASIS' };
    }
    const numberMatch = dateString.match(/(\d+)/);
    const day = numberMatch ? numberMatch[0] : '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const foundMonth = months.find(m => dateString.includes(m) || dateString.includes(getFullMonth(m)));
    const month = foundMonth ? foundMonth.toUpperCase() : 'DATE';

    if (dateString.includes('–') || dateString.includes('-')) {
        const parts = dateString.split(/[–-]/);
        const firstNum = parts[0].match(/\d+/);
        const secondNum = parts[1]?.match(/\d+/);
        if (firstNum && secondNum) {
            return { day: `${firstNum[0]}-${secondNum[0]}`, month: month };
        }
    }
    return { day, month };
}

function getFullMonth(shortMonth) {
    const map = {
        'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April', 'May': 'May', 'Jun': 'June',
        'Jul': 'July', 'Aug': 'August', 'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December'
    };
    return map[shortMonth] || shortMonth;
}
