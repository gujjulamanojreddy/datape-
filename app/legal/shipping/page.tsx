export default function Page() {
	return (
		<main className="max-w-6xl mx-auto px-6 py-12">
			<div>
				<h1 className="text-4xl font-bold tracking-tight">Shipping</h1>
			</div>

			<div className="bg-white rounded-2xl border shadow-sm p-6 md:p-10 mt-8 space-y-8 text-gray-800">
				<section>
					<h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
					<p className="leading-relaxed">As DataPe is a digital service platform, there are no physical goods shipped. This Shipping Policy explains our digital delivery process.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">2. Delivery of Services</h2>
					<p className="leading-relaxed">Upon successful subscription or purchase, users will gain access to the Platform immediately via their registered account credentials.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">3. Account Activation</h2>
					<p className="leading-relaxed">In most cases, account activation is instant. If delays occur due to technical issues, our support team will assist in resolving them promptly.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">4. No Physical Shipping</h2>
					<p className="leading-relaxed">We do not ship any physical products. All services are delivered electronically.</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
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