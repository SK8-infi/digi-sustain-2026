import { importantDates, abstractBookNote } from '../../data/conferenceData';

export default function ImportantDatesTimeline() {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-8">
                {importantDates.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        isLast={index === importantDates.length - 1}
                    />
                ))}
            </div>

            {/* Note about Book of Abstracts */}
            <div className="mt-12 bg-primary-50 border border-primary-200 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-primary-700 mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">Important Note</span>
                </div>
                <p className="text-neutral-700">{abstractBookNote}</p>
            </div>
        </div>
    );
}

function TimelineItem({ item, index, isLast }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary-500 transform -translate-x-1/2 z-10" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className={`bg-white rounded-xl shadow-sm border border-neutral-100 p-6 ${item.isDeadline ? 'border-l-4 border-l-primary-500 md:border-l-0 md:border-r-4 md:border-r-primary-500' : ''}`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${item.isDeadline
                            ? 'bg-primary-100 text-primary-700'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}>
                        {item.date}
                    </span>
                    <h3 className="text-lg font-semibold text-neutral-900">
                        {item.activity}
                    </h3>
                </div>
            </div>
        </div>
    );
}
