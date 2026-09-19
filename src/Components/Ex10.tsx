import { useEffect, useRef, useState } from 'react';

const Example10 = () => {

    const videoRef = useRef(null);
    const [active, setActive] = useState(false);

    useEffect(() => {

        if (videoRef.current && active === true) {

            const player: any = videoRef.current

            player.src = "https://www.w3schools.com/html/mov_bbb.mp4";
            player.play().catch(() => { });

        }
    }, [active]);

    useEffect(() => {
        const handleScroll = () => {
            setActive(true)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (

        <div className="min-h-[3000px] bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            <div className="flex min-h-dvh items-center justify-center px-4 py-10 sm:px-6">

                <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative border-b border-slate-100 px-5 py-4 sm:px-6">

                        <div className="flex items-center gap-4">

                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 ${active ? "bg-gradient-to-br from-emerald-500 to-green-600 shadow-emerald-200/50" : "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-200/50"}`}>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>

                            </div>

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                    useRef + useEffect
                                </p>

                                <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                    Scroll to Play Video
                                </h2>

                            </div>

                        </div>

                    </div>

                    <div className="relative p-5 sm:p-6">

                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-lg">

                            <video
                                ref={videoRef}
                                controls
                                className="aspect-video w-full object-cover"
                            />

                        </div>

                        <div className={`mt-5 flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 ${active ? "border-emerald-100 bg-emerald-50/70" : "border-blue-100 bg-blue-50/70"}`}>

                            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${active ? "animate-pulse bg-emerald-500" : "bg-blue-500"}`} />

                            <div>

                                <p className={`text-sm font-semibold ${active ? "text-emerald-700" : "text-blue-700"}`}>
                                    {active ? "Video Activated" : "Waiting for Scroll"}
                                </p>

                                <p className="mt-0.5 text-xs leading-5 text-slate-500">
                                    {active ? "The scroll event triggered the video playback." : "Scroll anywhere on the page to start the video."}
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                            <p className="text-xs leading-5 text-slate-500">
                                Scroll event updates the <span className="font-semibold text-slate-700">active</span> state.
                            </p>

                            <span className="w-fit rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
                                active: {active.toString()}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Example10;