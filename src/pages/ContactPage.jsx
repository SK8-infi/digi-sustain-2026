import { contactPerson } from '../data/committeeData';
import { conferenceInfo } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';

export default function ContactPage() {
    return (
        <>
            {/* Page Header */}
            <div style={{ backgroundColor: '#1a4731' }} className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p style={{ color: '#9ca3af' }} className="text-xl max-w-3xl">
                        Have questions about DIGI-SUSTAIN 2026? Get in touch with our organizing team.
                    </p>
                </div>
            </div>

            {/* Contact Details */}
            <SectionContainer background="white">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Contact Info */}
                    <div>
                        <SectionHeader
                            title="Get in Touch"
                            subtitle="We're here to help with any inquiries"
                            centered={false}
                        />

                        {/* Contact Person */}
                        <Card className="mb-6" padding="lg">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Person</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                                    SS
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-neutral-900">{contactPerson.name}</p>
                                    <p className="text-primary-600">Conference Secretariat</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 mb-4 p-3 bg-neutral-50 rounded-lg">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-neutral-500">Email</p>
                                    <a
                                        href={`mailto:${contactPerson.email}`}
                                        className="font-medium text-primary-700 hover:text-primary-800"
                                    >
                                        {contactPerson.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone Numbers */}
                            <div className="space-y-2">
                                {contactPerson.phones.map((phone, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-neutral-500">Phone {index + 1}</p>
                                            <a
                                                href={`tel:${phone.replace(/\s/g, '')}`}
                                                className="font-medium text-neutral-900 hover:text-primary-700"
                                            >
                                                {phone}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Address */}
                        <Card padding="lg">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Conference Venue</h3>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700 shrink-0 mt-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-neutral-900">{conferenceInfo.venue.name}</p>
                                    <p className="text-neutral-600 mt-1">{conferenceInfo.venue.address}</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right: Map */}
                    <div>
                        <SectionHeader
                            title="Find Us"
                            centered={false}
                        />
                        <div className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9997548396183!2d78.18661701503485!3d26.23371798343716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d8e25ba547%3A0xa64cc5ad62e8c22d!2sABV-Indian%20Institute%20of%20Information%20Technology%20and%20Management%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="ABV-IIITM Gwalior Location"
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </>
    );
}
