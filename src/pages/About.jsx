export default function About() {
  return (
    <div className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-semibold mb-16">
          About <span className="font-mono-me">Mono</span><span className="font-serif font-normal">Stroke</span>
        </h1>

        <p className="text-2xl leading-relaxed mb-20">
          MonoStroke is a space for artists who believe that every
          masterpiece begins with a single line.
        </p>

        <div className="border-t mb-20"></div>

        <div className="grid md:grid-cols-2 gap-16 text-lg leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-4 font-serif">Our Mission</h2>
            <p>
              To make drawing simple, structured, and accessible for everyone.
              We focus on fundamentals, clarity, and consistent practice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 font-serif">Our Vision</h2>
            <p>
              To build a creative environment where artists grow with
              confidence — one stroke at a time.
            </p>
          </div>
        </div>
        

        <div className="mt-24">
          <p className="text-sm text-gray-500">
            No distractions. No noise. Just art.
          </p>
        </div>

      </div>
    </div>
  );
}