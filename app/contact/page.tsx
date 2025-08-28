export default function Contact() {
	return (
		<main className="max-w-6xl mx-auto px-6 py-16">
			<div className="max-w-2xl">
				<h1 className="text-4xl font-bold">Contact Us</h1>
				<p className="text-gray-600 mt-2">We'd love to hear from you. Fill out the form or email us directly.</p>
			</div>

			<div className="mt-10 grid gap-8 md:grid-cols-2">
				<form method="post" encType="text/plain" action="mailto:support@datape.example" className="bg-white rounded-2xl border shadow-sm p-6 md:p-8 space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
						<input id="name" name="name" type="text" required placeholder="Your name" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
						<input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
						<textarea id="message" name="message" rows={6} required placeholder="How can we help?" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
					</div>
					<button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-2.5 text-white font-semibold hover:bg-indigo-700">Send Message</button>
				</form>

				<div className="space-y-8">
					<div className="bg-white rounded-2xl border shadow-sm p-6 md:p-8">
						<h2 className="text-lg font-semibold">For Contact Us</h2>
						<ul className="mt-4 space-y-3 text-sm text-gray-700">
							<li>
								<span className="font-medium">Address:</span>
								<address className="not-italic mt-1 space-y-1">
									<div>Neonflake Enterprises OPC Pvt Ltd</div>
									<div>303, 3rd Floor, Meridian Plaza</div>
									<div>Greenlands, Ameerpet</div>
									<div>Hyderabad, India 500016</div>
								</address>
							</li>
							<li><span className="font-medium">Email:</span> <a className="text-indigo-600 hover:underline" href="mailto:hello@smellika.com">hello@smellika.com</a></li>
							<li><span className="font-medium">Phone:</span> <a className="text-indigo-600 hover:underline" href="tel:+918977002747">+91 8977002747</a></li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}