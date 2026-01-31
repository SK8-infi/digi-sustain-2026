import { journals, journalsNote } from '../../data/journalsData';
import Card from '../ui/Card';

export default function JournalList() {
    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {journals.map((journal) => (
                    <JournalCard key={journal.id} journal={journal} />
                ))}
            </div>

            {/* More journals note */}
            <div className="text-center py-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 rounded-full text-primary-700 font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {journalsNote}
                </div>
            </div>
        </div>
    );
}

function JournalCard({ journal }) {
    return (
        <Card className="flex flex-col h-full">
            <div className="flex items-start gap-4">
                {/* Journal icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {journal.name}
                    </h3>
                    <p className="text-primary-600 font-medium text-sm mb-3">
                        Publisher: {journal.publisher}
                    </p>

                    {/* Indexing badges */}
                    {journal.indexing.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {journal.indexing.map((index, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded"
                                >
                                    {index}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}
