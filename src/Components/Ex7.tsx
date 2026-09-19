import { useEffect, useState } from 'react'

const Example7 = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {

        if (isLogin) {

            console.log("Welcome");

        } else {

            console.log("Please Login");

        }

    }, [isLogin]);

    return (

        <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            <div className="flex min-h-dvh items-center justify-center px-4 py-6 sm:px-6">

                <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative flex items-center gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">

                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 ${isLogin ? "bg-gradient-to-br from-emerald-500 to-green-600 shadow-emerald-200/50" : "bg-gradient-to-br from-slate-400 to-slate-600 shadow-slate-200/50"}`}>

                            {isLogin ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                    <path d="m10 17 5-5-5-5" />
                                    <path d="M15 12H3" />
                                </svg>
                            )}

                        </div>

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                useEffect Example 7
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                Login State
                            </h2>

                        </div>

                    </div>

                    <div className="relative px-5 py-8 sm:px-6 sm:py-10">

                        <div className={`rounded-xl border p-5 transition-all duration-300 ${isLogin ? "border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-green-50/50" : "border-amber-100 bg-gradient-to-br from-amber-50/80 to-orange-50/50"}`}>

                            <div className="flex items-center gap-4">

                                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md ${isLogin ? "bg-emerald-500 shadow-emerald-200" : "bg-amber-500 shadow-amber-200"}`}>

                                    {isLogin ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M12 8v4" />
                                            <path d="M12 16h.01" />
                                        </svg>
                                    )}

                                </div>

                                <div>

                                    <p className={`text-2xl font-semibold transition-all duration-300 ${isLogin ? "text-emerald-700" : "text-amber-700"}`}>
                                        {isLogin ? "Welcome User" : "Please Login"}
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        {isLogin ? "You are currently logged in." : "You are currently logged out."}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

                        <div className="flex items-center gap-2">

                            <span className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${isLogin ? "bg-emerald-500" : "bg-slate-300"}`} />

                            <p className="text-xs font-medium text-slate-500">
                                Status: {isLogin ? "Logged In" : "Logged Out"}
                            </p>

                        </div>

                        <button
                            type="button"
                            onClick={() => setIsLogin(prev => !prev)}
                            className={`w-full rounded-xl px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 sm:w-auto ${isLogin ? "bg-gradient-to-r from-red-500 to-rose-600 shadow-red-200/50 hover:from-red-600 hover:to-rose-700 focus:ring-red-100" : "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-blue-200/50 hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-100"}`}
                        >
                            {isLogin ? "Logout" : "Login"}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Example7;