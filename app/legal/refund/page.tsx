export default function Page() {
	return (
		<main className="max-w-6xl mx-auto px-6 py-12">
			<div>
				<h1 className="text-4xl font-bold tracking-tight">Refund Policy</h1>
			</div>

			<div className="bg-white rounded-2xl border shadow-sm p-6 md:p-10 mt-8 space-y-8 text-gray-800">
				<section>
					<h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
					<p className="leading-relaxed">At DataPe, we strive to deliver the highest quality services. This Refund Policy explains the conditions under which refunds may be provided.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">2. Subscription Fees</h2>
					<p className="leading-relaxed">All subscription fees are non-refundable unless otherwise stated. By subscribing, you acknowledge and agree that fees paid are final.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">3. Exceptions for Refunds</h2>
                    <p className="leading-relaxed">Refunds may be issued only under the following circumstances:</p>
					<ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
						<li>Duplicate payment due to a technical error.</li>
						<li>Failure to deliver services due to issues on our end.</li>
                        <li>Legal requirements in specific jurisdictions.</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">4. No Refunds For</h2>
					<p className="leading-relaxed">Refunds will not be issued for:</p>
					<ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
						<li>Refunds will not be issued for:</li>
						<li>Partial usage of a subscription period.</li>
						<li>Downgrading or canceling a subscription before its term ends.</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">5. Requesting a Refund</h2>
					<p className="leading-relaxed">To request a refund, contact support@datape.ai within 7 days of the transaction, providing relevant details and proof of payment.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
					<p className="leading-relaxed">If you have questions about these Terms, please contact us at:</p>
					<ul className="space-y-1 text-gray-700 leading-relaxed">
						<li><span className="font-medium">Email:</span> support@datape.ai</li>
						<li><span className="font-medium">Phone:</span> +91 8977002747</li>
					</ul>
				</section>
			</div>
		</main>
	)
}