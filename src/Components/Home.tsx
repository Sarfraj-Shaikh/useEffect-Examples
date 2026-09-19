import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const examples = [
        { id: 1, title: "Example 1", description: "useEffect basic example" },
        { id: 2, title: "Example 2", description: "useEffect with dependency" },
        { id: 3, title: "Example 3", description: "useEffect with state" },
        { id: 4, title: "Example 4", description: "Custom Modal with useEffect" },
        { id: 5, title: "Example 5", description: "Auto Download with useEffect" },
        { id: 6, title: "Example 6", description: "sessionStorage with useEffect" },
        { id: 7, title: "Example 7", description: "Login State with useEffect" },
        { id: 8, title: "Example 8", description: "Student List with useEffect" },
        { id: 9, title: "Example 9", description: "setInterval with useEffect" },
        { id: 10, title: "Example 10", description: "useRef and Scroll Event" }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-5xl">

                <div className="mb-10 text-center">

                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">

                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>

                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        useEffect Examples
                    </h1>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                        Select any example below to explore different useEffect concepts in React.
                    </p>

                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {examples.map((example) => (

                        <button
                            key={example.id}
                            onClick={() => navigate(`/${example.id}`)}
                            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md">
                                    {example.id}
                                </div>

                                <svg className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <h2 className="text-lg font-semibold text-slate-900">
                                {example.title}
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {example.description}
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-blue-600">
                                <span>Open Example</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </div>
                        </button>
                    ))};

                </div>

            </div>

        </div>
    )
}

export default Home;