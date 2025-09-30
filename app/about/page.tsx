import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="bg-slate-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition">
            XML Coder Puzzles
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-purple-300 hover:text-purple-100 transition">
              Home
            </Link>
            <Link href="/reviews" className="text-purple-300 hover:text-purple-100 transition">
              Reviews
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-purple-500/30">
          <h1 className="text-4xl font-bold text-white mb-6">About XML Coder Puzzles</h1>

          <div className="space-y-6 text-purple-100">
            <p className="text-lg leading-relaxed">
              Welcome to XML Coder Puzzles! This site is designed to help XML developers strengthen
              their JavaScript fundamentals through practical, hands-on puzzles.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">What You'll Learn</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Variable declaration and assignment</li>
                <li>Basic arithmetic operations</li>
                <li>String concatenation</li>
                <li>Type coercion in JavaScript</li>
                <li>Building XML-formatted strings programmatically</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">How It Works</h2>
              <p className="leading-relaxed">
                Each puzzle presents you with JavaScript code. Your task is to predict what will be
                logged to the console when the code runs. The puzzles start simple and gradually
                increase in complexity, culminating in exercises that generate properly formatted
                XML structures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>5 progressive puzzles from easy to expert level</li>
                <li>Instant feedback on your answers</li>
                <li>Helpful hints when you get stuck</li>
                <li>Fun icons and visual feedback</li>
              </ul>
            </div>

            <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-6 mt-8">
              <p className="text-center text-purple-200">
                Ready to test your skills? Head back to the{' '}
                <Link href="/" className="text-purple-300 hover:text-purple-100 font-semibold underline">
                  home page
                </Link>
                {' '}and start solving puzzles!
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 mt-16 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-purple-300">
          <p>Practice your JavaScript skills for XML coding</p>
        </div>
      </footer>
    </div>
  )
}