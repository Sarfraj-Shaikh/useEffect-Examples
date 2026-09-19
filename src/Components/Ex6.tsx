import { useEffect } from 'react';

const Example6 = () => {

    useEffect(() => {

        const isDownloaded = sessionStorage.getItem("resume")

        if (isDownloaded === null) {

            const a = document.createElement("a")

            a.href = "/demo.jpg"
            a.download = "demo.jpg"

            a.click()
            a.remove()

            sessionStorage.setItem("resume", "true")
        }

    }, []);

    return (

        <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            <div className="flex min-h-dvh items-center justify-center px-4 py-6 sm:px-6">

                <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative flex items-center gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-200/50">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                <path d="M12 3v12" />
                                <path d="m7 10 5 5 5-5" />
                                <path d="M5 21h14" />
                            </svg>

                        </div>

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                Session Download
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                One-Time Image Download
                            </h2>

                        </div>

                    </div>

                    <div className="relative px-5 py-6 sm:px-6 sm:py-7">

                        <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-blue-50/50 p-4">

                            <div className="flex items-start gap-3">

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>

                                </div>

                                <div>

                                    <p className="text-sm font-semibold text-slate-800">
                                        Automatic Download
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        The image will be downloaded automatically only once during the current browser tab session.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">

                        <p className="text-xs leading-5 text-slate-500">
                            Refreshing this page will not download the image again.
                        </p>

                        <p className="text-xs leading-5 text-slate-500">
                            Closing this tab and opening a new tab starts a new session.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Example6