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

            {/* Instructions */}
            <div className="prose prose-neutral max-w-none">
                <h3>Registration Instructions</h3>
                <ol className="text-neutral-600">
                    <li>Complete the abstract submission through the conference portal.</li>
                    <li>Upon acceptance, proceed with registration payment.</li>
                    <li>Retain payment confirmation for your records.</li>
                    <li>Registration confirmation will be sent via email.</li>
                </ol>
            </div>
        </div>
    );
}
