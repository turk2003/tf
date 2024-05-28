"use client";
import { useState } from "react";

export default function Page() {
  const [phaseA, setPhaseA] = useState();
  const [phaseB, setPhaseB] = useState();
  const [phaseC, setPhaseC] = useState();
  const [formData, setFormData] = useState({
    dropdown: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Increment the number by 1 and set it to phaseA
    setPhaseA(Number(formData.number) + 3.1);
    setPhaseB(Number(formData.number) + 2.8);
    setPhaseC(Number(formData.number) + 3.3);
  };

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center p-4">
      <div className="bg-purple-400 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Transformers-App
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              เลือกหม้อเเปลง :
            </label>
            <select
              name="dropdown"
              value={formData.dropdown}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="option1">หม้อแปลงแขวน ในไลน์ PEA</option>
              <option value="option2">หม้อแปลงแขวน เฉพาะราย</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ขนาดหม้อเเปลง :
            </label>
            <select
              name="dropdown"
              value={formData.dropdown}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            >
              <option value="option1">30</option>
              <option value="option2">50</option>
              <option value="option3">100</option>
              <option value="option4">160</option>
              <option value="option5">250</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ระยะห่างระหว่างหม้อเเปลงถึงLT :{" "}
              <a className="text-red-300" href="/">
                *ดูเพิ่มเติม
              </a>
            </label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              ระยะ หม้อเเปลง-N :
            </label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {/* Display the value of phaseA */}
        {phaseA !== undefined && (
          <div>
            <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded-md">
              PhaseA: {phaseA}
            </div>
            <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded-md">
              PhaseB: {phaseB}
            </div>
            <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded-md">
              PhaseC: {phaseC}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
