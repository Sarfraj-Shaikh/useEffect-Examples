import { useEffect, useState } from "react";

const Example1 = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {

        setMessage("Hello, This is useEffect example 1 written by Mo. Sarfraj Shaikh");

    }, []);

    return (

        <section className="w-full min-h-dvh flex justify-center items-center px-4 sm:px-6">

            <div
                className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/70 p-4 sm:p-6 md:p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100/50"
            >
                {/* Soft gradient glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-200/30 blur-3xl" />

                <p className="relative text-sm sm:text-base leading-7 text-slate-700 whitespace-pre-wrap break-words antialiased">
                    {message}
                </p>

            </div>

        </section>

    );

};

export default Example1;