import { useEffect, useState } from 'react';

const Example8 = () => {

    const [students, setStudents] = useState(["Ram", "Rahul", "Priya"]);
    const [studentName, setStudentName] = useState("");
    const [newCount, setNewCount] = useState(0);
    const [outputCount, setOutputCount] = useState(0);

    useEffect(() => {

        setOutputCount(newCount);

    }, [newCount]);

    const addStudent = () => {

        if (studentName.trim() === "") return

        setStudents(prev => [...prev, studentName.trim()]);
        setNewCount(prev => prev + 1);
        setStudentName("");
    }

    return (

        <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-white to-blue-50/60">

            <div className="flex min-h-dvh items-center justify-center px-4 py-6 sm:px-6">

                <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

                    <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="relative flex items-center gap-4 border-b border-slate-100 px-5 py-4 sm:px-6">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-200/50">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>

                        </div>

                        <div>

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                                useEffect Example 8
                            </p>

                            <h2 className="mt-1 text-lg font-semibold text-slate-900">
                                Student's List
                            </h2>

                        </div>

                    </div>

                    <div className="relative px-5 py-6 sm:px-6 sm:py-7">

                        <div className="mb-6 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-5">

                            <div className="flex items-center justify-between gap-4">

                                <div>

                                    <p className="text-sm font-medium text-slate-500">
                                        New Students Added
                                    </p>

                                    <p className="mt-1 text-3xl font-bold text-blue-600">
                                        {outputCount}
                                    </p>

                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                                        <path d="M12 5v14" />
                                        <path d="M5 12h14" />
                                    </svg>

                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">

                            <input
                                type="text"
                                placeholder="Enter student name"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && addStudent()}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 sm:flex-1"
                            />

                            <button
                                type="button"
                                onClick={addStudent}
                                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-blue-200/50 transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100 sm:w-auto"
                            >
                                Add Student
                            </button>

                        </div>

                        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">

                            <div className="border-b border-slate-100 bg-slate-50/70 px-4 py-3">

                                <p className="text-sm font-semibold text-slate-700">
                                    All Students
                                </p>

                            </div>

                            <ul className="divide-y divide-slate-100">

                                {students.map((item, index) => (

                                    <li key={index} className="flex items-center gap-3 px-4 py-3 text-sm text-slate-600 transition-colors duration-200 hover:bg-blue-50/50">

                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-blue-600">
                                            {index + 1}
                                        </span>

                                        <span className="font-medium">
                                            {item}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                    <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">

                        <p className="text-xs leading-5 text-slate-500">
                            Every new student updates <span className="font-semibold text-slate-700">newCount</span>, which triggers the useEffect.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Example8;