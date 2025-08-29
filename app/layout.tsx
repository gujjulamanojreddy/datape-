import "./globals.css"
import Link from "next/link"

export const metadata = { title: "DataPe – Talk to Your Spreadsheets", description: "Ask questions in plain English (or voice) and get instant answers from your spreadsheets.", } as const

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-white min-h-screen flex flex-col">
				<header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
					<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
						<Link href="/" className="flex items-center gap-3">
							<img src="/images/datape-mark.svg" alt="DataPe Logo" className="h-8 w-8" />
							<span className="text-xl font-bold">DataPe</span>
						</Link>
						<nav className="flex items-center gap-6 text-sm font-medium">
							<Link href="/login" className="hover:text-indigo-600">Login</Link>
							<Link href="/#home" className="hover:text-indigo-600">Home</Link>
							<Link href="/contact" className="hover:text-indigo-600">Contact Us</Link>
						</nav>
					</div>
				</header>

				<main className="flex-1">{children}</main>

				<footer className="bg-gray-100 border-t">
					<div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
						<div>
							<div className="flex items-center gap-3 mb-3">
								<img src="/images/datape-mark.svg" alt="DataPe Logo" className="h-8 w-8" />
								<span className="text-lg font-bold">DataPe</span>
							</div>
							<p className="text-sm text-gray-600">Get answers from spreadsheets using plain English and voice Instantly</p>
						</div>
						<div>
							<h4 className="font-semibold mb-3">Links</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="/login" className="hover:text-indigo-600">Login</a></li>
								<li><a href="/#home" className="hover:text-indigo-600">Home</a></li>
								<li><a href="/contact" className="hover:text-indigo-600">Contact Us</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-3">Legal</h4>
							<ul className="space-y-2 text-sm">
								<li><a href="/legal/terms" className="hover:text-indigo-600">Terms & Conditions</a></li>
								<li><a href="/legal/privacy" className="hover:text-indigo-600">Privacy Policy</a></li>
								<li><a href="/legal/refund" className="hover:text-indigo-600">Refund Policy</a></li>
								<li><a href="/legal/shipping" className="hover:text-indigo-600">Shipping Policy</a></li>
								<li><a href="/legal/disclaimer" className="hover:text-indigo-600">Disclaimer Policy</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-3">Follow Us</h4>
							<div className="flex gap-4">
								<a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
									<img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
								</a>
								<a aria-label="Facebook" href="https://www.facebook.com/neonflake" target="_blank" rel="noreferrer">
									<img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
								</a>
								<a aria-label="LinkedIn" href="https://in.linkedin.com/company/neonflake" target="_blank" rel="noreferrer">
									<img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
								</a>
								<a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noreferrer">
									<img src="/icons/x.svg" alt="X" className="h-6 w-6" />
								</a>
							</div>
						</div>
					</div>
					<div className="border-t py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Neonflake Enterprises OPC Pvt Ltd. All rights reserved.</div>
				</footer>
			</body>
		</html>
	)
}
