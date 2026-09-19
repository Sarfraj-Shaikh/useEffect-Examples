import { useEffect } from 'react'

const Example5 = () => {

    useEffect(() => {
        const a = document.createElement("a")

        a.href = "/flower.jpg"
        a.download = "flower.jpg"

        a.click();
        a.remove();

    }, [])

    return (

        <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            <div className="flex min-h-dvh items-center justify-center px-4 py-6 sm:px-6">

                <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative flex items-center gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-200/50">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path d="M12 3v12" />
                                <path d="m7 10 5 5 5-5" />
                                <path d="M5 21h14" />
                            </svg>

                        </div>

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                Download
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                File Download
                            </h2>

                        </div>

                    </div>

                    <div className="relative px-5 py-6 sm:px-6 sm:py-7">

                        <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-4">

                            <div className="flex items-center gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="h-5 w-5"
                                    >
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <path d="M14 2v6h6" />
                                        <path d="M8 13h8" />
                                        <path d="M8 17h5" />

                                    </svg>

                                </div>

                                <div className="min-w-0">

                                    <p className="truncate text-sm font-semibold text-slate-800">
                                        Flower.jpg
                                    </p>

                                    <p className="mt-0.5 text-xs text-slate-500">
                                        Your download has been triggered automatically.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                        <p className="text-xs leading-5 text-slate-500">
                            File download started on component mount.
                        </p>

                        <button
                            type="button"
                            onClick={() => {

                                const a = document.createElement("a")

                                a.href = "/flower.jpg"
                                a.download = "flower.jpg"

                                a.click();
                                a.remove();
                            }}
                            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-200/50 transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
                        >
                            Download Again
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Example5