import Link from "next/link";

export default function Page() {
  return (
    <div className="py-32">
      {/* <div className="text-center">
        <h1 className="py-1 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Welcome
        </h1>
        <p className="py-1 text-balance text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl">
          to
        </p>
        <p className="py-1 text-balance text-lg font-semibold tracking-tight text-gray-900 sm:text-5xl">
          my corner of the internet.
        </p>
      </div> */}
      {/* <div className="text-center">
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Hi! I am Lauryn Robson. A junior software Proud light mode user and
          magazine collector.
        </p>
        <p className="p-5">image of myself</p>
      </div> */}
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to my corner of the internet.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Hi! I am Lauryn Robson. A junior software Proud light mode user
                and magazine collector.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://i.pinimg.com/736x/18/10/82/1810822dc0bd3233feeaf0c37f4039cc.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/474x/40/ff/2f/40ff2f9000debbd130b84091188bdb31.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/236x/b9/6c/db/b96cdb05763fc243f8e636fdc916ece2.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/236x/dd/87/2f/dd872f077860912d44211c62fc8be88e.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/474x/e7/8f/0b/e78f0b92bff5cfe8c0d79716e44dbfc2.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-56 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/474x/40/75/36/4075367835065872dd7a67830d4250ac.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://i.pinimg.com/474x/19/bc/76/19bc768a8df5bf0169fce96403424e34.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="lg:hidden text-3xl font-bold underline" href="/">
        Home
      </Link>
    </div>
  );
}
