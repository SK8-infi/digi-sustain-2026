import Card, { CardTitle, CardDescription } from '../ui/Card';

export default function TrackCard({ track, variant = 'default' }) {
    const variants = {
        default: 'border-l-4 border-l-primary-500',
        functional: 'border-l-4 border-l-primary-600',
        specialized: 'border-l-4 border-l-primary-400',
    };

    return (
        <Card className={`${variants[variant]} rounded-l-none`}>
            <div className="flex items-start gap-4">
                {/* Icon placeholder */}
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <CardTitle className="text-base">{track.title}</CardTitle>
                    {track.description && (
                        <CardDescription className="text-sm mt-1">{track.description}</CardDescription>
                    )}
                </div>
            </div>
        </Card>
    );
}
