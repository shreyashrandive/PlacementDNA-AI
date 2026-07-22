import React, { useEffect, useState } from "react";

const AIResumeAnalysis = () => {
    const [resumes, setResumes] = useState([]);
    const [selectedResume, setSelectedResume] = useState("");
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
    fetchResumes();
}, []);

const fetchResumes = async () => {
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/resumes/"
        );

        const data = await response.json();

        setResumes(data);
    } catch (error) {
        console.error("Error fetching resumes:", error);
    }
};


const analyzeResume = async () => {

    if (!selectedResume) {
        alert("Please select a resume.");
        return;
    }

    setLoading(true);

    try {

        const response = await fetch(
            `http://127.0.0.1:8000/ai/analyze/${selectedResume}`
        );

        const data = await response.json();

        setAnalysis(data);

    } catch (error) {

        console.error(error);

        alert("Failed to analyze resume.");

    }

    setLoading(false);

};
    
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                AI Resume Analysis
            </h1>

           <div className="bg-white shadow-lg rounded-xl p-6">

    <label className="block font-semibold mb-2">
        Select Resume
    </label>

    <select
        value={selectedResume}
        onChange={(e) => setSelectedResume(e.target.value)}
        className="w-full border rounded-lg p-3"
    >
        <option value="">
            -- Select Resume --
        </option>

        {resumes.map((resume) => (
            <option
                key={resume.id}
                value={resume.id}
            >
                {resume.student_name}
            </option>
        ))}
    </select>

    <button
    onClick={analyzeResume}
    disabled={loading}
    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
>
    {loading ? "Analyzing..." : "Analyze Resume"}
</button>

</div>

{analysis && (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6">

        <h2 className="text-2xl font-bold mb-4">
            AI Resume Analysis
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

    <div className="bg-blue-50 rounded-xl p-5 shadow">
        <p className="text-gray-500 text-sm">ATS Score</p>
        <h2 className="text-3xl font-bold text-blue-600">
            {analysis.ats_score}%
        </h2>
    </div>

    <div className="bg-green-50 rounded-xl p-5 shadow">
        <p className="text-gray-500 text-sm">Skills Found</p>
        <h2 className="text-3xl font-bold text-green-600">
            {analysis.skills.length}
        </h2>
    </div>

    <div className="bg-red-50 rounded-xl p-5 shadow">
        <p className="text-gray-500 text-sm">Missing Skills</p>
        <h2 className="text-3xl font-bold text-red-600">
            {analysis.missing_skills.length}
        </h2>
    </div>

    <div className="bg-purple-50 rounded-xl p-5 shadow">
        <p className="text-gray-500 text-sm">Resume Length</p>
        <h2 className="text-3xl font-bold text-purple-600">
            {analysis.text.length} chars
        </h2>
    </div>

</div>

        <p className="mb-2">
            <strong>Student:</strong> {analysis.student_name}
        </p>

       <div className="mb-6">

    <div className="flex justify-between mb-2">
        <span className="font-semibold">ATS Score</span>
        <span className="font-bold">
            {analysis.ats_score}%
        </span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-4">

        <div
            className="bg-green-500 h-4 rounded-full transition-all duration-700"
            style={{
                width: `${analysis.ats_score}%`,
            }}
        ></div>

    </div>

</div>
        <div className="mb-6">

    <h3 className="font-semibold mb-3">
        Detected Skills
    </h3>

    <div className="flex flex-wrap gap-2">

        {analysis.skills.map((skill, index) => (

            <span
                key={index}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
            >
                {skill}
            </span>

        ))}

    </div>

</div>

        <div>

    <h3 className="font-semibold text-red-600 mb-3">
        Missing Skills
    </h3>

    <div className="flex flex-wrap gap-2">

        {analysis.missing_skills.map((skill, index) => (

            <span
                key={index}
                className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
            >
                {skill}
            </span>

        ))}

    </div>

</div>

<div className="mt-8">

    <h3 className="font-semibold text-lg mb-3">
        Resume Text Preview
    </h3>

    <div className="border rounded-lg p-4 bg-gray-50 max-h-80 overflow-y-auto">

        <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {analysis.text}
        </pre>

    </div>

</div>

    </div>
)}
        </div>
    );
};

export default AIResumeAnalysis;