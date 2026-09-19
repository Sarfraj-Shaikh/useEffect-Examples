import { useEffect, useState } from "react";

const Example3 = () => {

    const [show, setShow] = useState(false);


    useEffect(() => {

        setShow(true);

    }, []);

    return (

        <section className="flex min-h-dvh w-full items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/60 px-4 py-8 sm:px-6">

            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)] sm:p-6">

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />

                <div className="relative">

                    <div className="mb-5 flex items-center justify-between gap-4">

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                useEffect Example
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                Toggle Message
                            </h2>

                        </div>

                        <button
                            type="button"
                            onClick={() => setShow(prev => !prev)}
                            aria-pressed={show}
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-100"
                        >

                            <span className={`h-2 w-2 rounded-full transition-colors duration-200 
                                ${show ? "bg-emerald-500" : "bg-slate-300"}`} />{show ? "Hide" : "Show"}

                        </button>

                    </div>

                    <div
                        className={`overflow-hidden rounded-xl border transition-all duration-300 ease-out ${show ? "max-h-40 border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-4 opacity-100" : "max-h-0 border-transparent p-0 opacity-0"}`}
                    >

                        <p className="text-sm leading-7 text-slate-700 sm:text-base">
                            Hello, This Is useEffect Example No 3
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );

};

export default Example3;