import Card from '../ui/Card';

export default function CommitteeGrid({ title, members, layout = 'grid' }) {
    if (layout === 'single') {
        // For single member (Patron, Chair, etc.)
        const member = members;
        return (
            <div className="mb-12">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4 pb-2 border-b border-primary-200">
                    {title}
                </h3>
                <Card className="inline-block">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                            {getInitials(member.name)}
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-neutral-900">{member.name}</h4>
                            {member.designation && (
                                <p className="text-primary-600 font-medium">{member.designation}</p>
                            )}
                            {member.affiliation && (
                                <p className="text-neutral-600 text-sm">{member.affiliation}</p>
                            )}
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="text-primary-700 text-sm hover:underline"
                                >
                                    {member.email}
                                </a>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        );
    }

    // For multiple members (Advisory Board, etc.)
    return (
        <div className="mb-12">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6 pb-2 border-b border-primary-200">
                {title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member, index) => (
                    <Card key={index} padding="default" className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-semibold shrink-0">
                            {getInitials(member.name)}
                        </div>
                        <div className="min-w-0">
                            <h4 className="font-semibold text-neutral-900 truncate">{member.name}</h4>
                            {member.affiliation && (
                                <p className="text-neutral-600 text-sm truncate">{member.affiliation}</p>
                            )}
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="text-primary-700 text-sm hover:underline truncate block"
                                >
                                    {member.email}
                                </a>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function getInitials(name) {
    return name
        .split(' ')
        .filter(word => !['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.'].includes(word))
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}
