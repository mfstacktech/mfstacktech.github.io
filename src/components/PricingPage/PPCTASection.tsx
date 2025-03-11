export default function PPCTASection() {
  return (
    <div className="px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:flex lg:items-center lg:justify-between lg:p-16 bg-mf-stack-gray-primary">
        <div className="space-y-3">
          <p className="max-w-2xl font-sans font-semibold my-0  tracking-tight text-gray-900 text-3.5xl">
            Start your 30-day free trial
          </p>
          <p className="font-sans font-normal  text-xl text-mf-stack-gray-light my-0">
            Join over 4,000+ startups already growing with Untitled.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row-reverse justify-center  items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a
            href="#"
            className="rounded-md w-full text-center sm:w-fit bg-mf-stack-blue-dark hover:bg-mf-stack-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a
            href="#"
            className="text-sm/6 hidden w-full mt-3 sm:mt-0 text-center sm:w-fit font-semibold text-gray-900 px-3.5 py-2.5 rounded-md border border-solid border-gray-300"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
