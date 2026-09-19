import { useEffect, useState } from 'react'

const Example4 = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [])

    return (

        <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            {open && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-6 backdrop-blur-sm">

                    <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.18)] animate-[modalIn_0.25s_ease-out]">

                        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                        <div className="relative flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                    Information
                                </p>

                                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                    Description
                                </h2>

                            </div>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex h-9 w-9 items-center justify-center rounded-xl text-xl text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-100" aria-label="Close modal"
                            >
                                ×
                            </button>

                        </div>

                        <div className="relative px-5 py-6 sm:px-6 sm:py-7">

                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi aspernatur quod perspiciatis quasi, ratione expedita, veniam deserunt quisquam quis velit inventore veritatis, rem cumque sint adipisci iste mollitia itaque.
                            </p>

                        </div>

                        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">

                            <button type="button"
                                onClick={() => setOpen(false)}
                                className="w-full rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-slate-100 sm:w-auto">
                                Cancel
                            </button>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-200/50 transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto">
                                OK
                            </button>

                        </div>

                    </div>
                    
                </div>
            )}

            <style>
                {`@keyframes modalIn{from{opacity:0;transform:scale(.96) translateY(8px)}to{opacity:1;transform:scale(1) translateY(0)}}`}
            </style>

        </div>
    )
}

export default Example4;