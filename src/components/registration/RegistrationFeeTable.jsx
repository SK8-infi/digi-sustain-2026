import { feeStructure, internationalNote, registrationCategories, registrationNote } from '../../data/registrationData';
import { QRCodePlaceholder } from '../ui/Placeholder';

export default function RegistrationFeeTable() {
    return (
        <div className="space-y-8">
            {/* Categories covered */}
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Eligible Categories</h3>
                <div className="flex flex-wrap gap-2">
                    {registrationCategories.map((category, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white rounded-full text-sm text-neutral-700 border border-primary-200"
                        >
                            {category}
                        </span>
                    ))}
                </div>
                <p className="mt-3 text-sm text-neutral-600">
                    <span className="font-medium">Applicable for:</span> {registrationNote}
                </p>
            </div>

            {/* Fee Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left rounded-tl-lg">Participation Type</th>
                            <th className="text-center">INR (₹)</th>
                            <th className="text-center rounded-tr-lg">USD ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeStructure.map((fee, index) => (
                            <tr key={index}>
                                <td className="font-medium text-neutral-900">{fee.type}</td>
                                <td className="text-center font-semibold text-primary-700">{fee.inr}</td>
                                <td className="text-center font-semibold text-primary-700">{fee.usd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* International Registration Note */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-center">
                <p className="text-neutral-600 font-medium">{internationalNote}</p>
            </div>

            {/* QR Code Section */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <QRCodePlaceholder className="shrink-0" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                            Submit Your Abstract
                        </h3>
                        <p className="text-neutral-600 mb-4">
                            Scan the QR code or click the button below to submit your abstract for consideration.
                        </p>
                        <p className="text-sm text-neutral-500">
                            Abstract word limit: 250 words
                        </p>
                    </div>
                </div>
            </div>

            {/* Registration Instructions */}
            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </span>
                    Registration Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            step: "01",
                            title: "Abstract Submission",
                            desc: "Submit your research abstract through our portal for initial review.",
                            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        },
                        {
                            step: "02",
                            title: "Review & Acceptance",
                            desc: "Post-review, you will receive an acceptance notification via email.",
                            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        },
                        {
                            step: "03",
                            title: "Registration Payment",
                            desc: "Upon acceptance, proceed with the secure registration fee payment.",
                            icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        },
                        {
                            step: "04",
                            title: "Final Confirmation",
                            desc: "Receive your official registration confirmation and receipt.",
                            icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full border-b-4 border-b-primary-600">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-black text-primary-100 group-hover:text-primary-200 transition-colors uppercase tracking-widest">
                                        Step {item.step}
                                    </span>
                                </div>
                                <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
