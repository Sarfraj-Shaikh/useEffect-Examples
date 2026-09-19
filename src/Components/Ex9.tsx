import { useEffect, useState } from 'react'

const Example9 = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (

        <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            <div className="flex min-h-dvh items-center justify-center px-4 py-6 pb-32 sm:px-6">

                <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative px-5 py-10 text-center sm:px-6 sm:py-14">

                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200/50">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 7v5l3 2" />
                            </svg>

                        </div>

                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                            useEffect Example 9
                        </p>

                        <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                            Live Time
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                            The current time is automatically updated every second using setInterval.
                        </p>

                        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-4 shadow-sm">

                            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />

                            <span className="text-2xl font-bold tracking-wide text-slate-800 sm:text-3xl">
                                {time}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="fixed bottom-0 left-0 z-40 w-full border-t border-rose-100 bg-white/90 px-4 py-4 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">

                <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-md shadow-rose-200/50">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                <path d="M12 8v4l3 2" />
                                <circle cx="12" cy="12" r="9" />
                            </svg>

                        </div>

                        <div>

                            <h2 className="text-sm font-bold text-slate-900 sm:text-base">
                                Limited Seats! Hurry up
                            </h2>

                            <p className="text-xs text-slate-500">
                                Don't miss your opportunity.
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-rose-100 bg-rose-50 px-4 py-2.5 sm:justify-center">

                        <span className="mr-3 text-xs font-medium uppercase tracking-wider text-rose-500">
                            Current Time
                        </span>

                        <span className="text-lg font-bold tabular-nums text-rose-600 sm:text-xl">
                            {time}
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Example9;