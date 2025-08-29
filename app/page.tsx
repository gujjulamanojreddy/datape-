import Link from "next/link";
import { WaitlistButton } from "../components/waitlist-button";

export default function Page() {
  return (
    <div className="font-sans text-gray-800">
      

      <section id="home" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block text-center">Talk to Your Spreadsheets</span>
            <span className="block text-center">Get Instant Answers</span>
          </h1>
          <p className="text-xl md:text-3xl mb-6 leading-snug text-center">
            <span className="block">Upload any spreadsheet and ask questions in plain English</span>
            <span className="block">or even with your voice and get instant insights</span>
          </p>
          <div className="flex">
            <WaitlistButton
              label="🚀 Try DataPe Now"
              className="mx-auto inline-block bg-white text-indigo-600 px-6 py-3 rounded-2xl shadow-lg font-semibold hover:bg-gray-100"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
        <div>
          <img src="/icons/upload.svg" alt="Upload Your Spreadsheet" className="mx-auto mb-4 w-16" />
          <h3 className="font-bold text-lg mb-2">Upload Your Spreadsheet</h3>
          <p>Import Excel or CSV files directly into DataPe.</p>
        </div>
        <div>
          <img src="/icons/voice.svg" alt="Ask by Text or Voice" className="mx-auto mb-4 w-16" />
          <h3 className="font-bold text-lg mb-2">Ask by Text or Voice</h3>
          <p>Type your question or simply speak it aloud—DataPe understands both.</p>
        </div>
        <div>
          <img src="/icons/insight.svg" alt="Get Instant Answers" className="mx-auto mb-4 w-16" />
          <h3 className="font-bold text-lg mb-2">Get Instant Answers</h3>
          <p>Turn raw rows into clear, conversational insights.</p>
        </div>
        <div>
          <img src="/icons/history.svg" alt="Review Conversation History" className="mx-auto mb-4 w-16" />
          <h3 className="font-bold text-lg mb-2">Review Conversation History</h3>
          <p>Access your past queries anytime—pick up where you left off.</p>
        </div>
      </section>

      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">See DataPe in Action</h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Watch how easily you can upload a spreadsheet and ask questions in plain English or with your voice. DataPe instantly turns rows and columns into clear, actionable insights.
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full rounded-2xl shadow overflow-hidden bg-black">
            <div className="pt-[56.25%]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white"></div>
                </div>
                <p className="text-white/80">Add your demo video (MP4 / YouTube / Vimeo)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Why DataPe?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-semibold mb-2">Voice + Text Queries</h3>
            <p className="text-lg">The fastest way to get answers from spreadsheets.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-semibold mb-2">Conversation History</h3>
            <p className="text-lg">Keep track of insights and build on them.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-semibold mb-2">No Complex Formulas</h3>
            <p className="text-lg">Skip VLOOKUPs, pivots, and manual effort.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-semibold mb-2">Smarter Decisions</h3>
            <p className="text-lg">See trends, summaries, and answers instantly.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Who Benefits from DataPe?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <img src="/icons/cxo.svg" alt="CxO" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold">CxO-Level Executives</h3>
            <p>Get quick answers without waiting for reports.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <img src="/icons/analyst.svg" alt="Analyst" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold">Business Analysts</h3>
            <p>Explore spreadsheets without complex formulas.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <img src="/icons/finance.svg" alt="Finance" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold">Finance Professionals</h3>
            <p>Pull numbers, summaries, and forecasts instantly.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <img src="/icons/sales.svg" alt="Sales" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold">Sales & Marketing</h3>
            <p>Track KPIs, leads, conversions, and revenue.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <img src="/icons/operations.svg" alt="Operations" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold">Operations Managers</h3>
            <p>Monitor supply chain and performance efficiently.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow">
            <img src="/icons/education.svg" alt="Educators" className="mx-auto mb-4 w-12" />
            <h3 className="font-semibold">Educators & Researchers</h3>
            <p>Ask questions on data without technical barriers.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-indigo-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Example Questions You Can Ask</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow text-lg">What’s the total revenue for Q1?</div>
          <div className="p-8 bg-white rounded-2xl shadow text-lg">Show me top 5 products by sales.</div>
          <div className="p-8 bg-white rounded-2xl shadow text-lg">Which region had the highest growth last month?</div>
          <div className="p-8 bg-white rounded-2xl shadow text-lg">How many customers purchased twice or more?</div>
        </div>
      </section>

      <section className="py-20 px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Stop Wrestling with Spreadsheets Start Conversing with Them
        </h2>
        <WaitlistButton
          label="🚀 Get Started with DataPe"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-2xl shadow-lg font-semibold hover:bg-gray-100"
        />
      </section>

      
    </div>
  );
}
