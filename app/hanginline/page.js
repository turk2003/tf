"use client";
import { useState } from "react";

export default function Page() {
  const [phaseA, setPhaseA] = useState();
  const [phaseB, setPhaseB] = useState();
  const [phaseC, setPhaseC] = useState();
  const [phaseA1, setPhaseA1] = useState();
  const [phaseB1, setPhaseB1] = useState();
  const [phaseC1, setPhaseC1] = useState();
  const [newton, setNewton] = useState();
  const [formData, setFormData] = useState({
    dropdown: "",
    LT: "",
    N: "",
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
    setPhaseA(Number(formData.LT) + 3.1);
    setPhaseB(Number(formData.LT) + 2.8);
    setPhaseC(Number(formData.LT) + 3.3);
    setPhaseA1(Number(formData.N) + 2.78);
    setPhaseB1(Number(formData.N) + 2.28);
    setPhaseC1(Number(formData.N) + 2.58);
    setNewton(Number(formData.N) + 1.4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          หม้อแปลงแขวน ในไลน์ PEA
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black text-lg font-medium mb-2">
              ขนาดหม้อเเปลง:
            </label>
            <select
              name="dropdown"
              value={formData.dropdown}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded-md"
            >
              <option value="">เลือกขนาดหม้อเเปลง</option>
              <option value="option1">30</option>
              <option value="option2">50</option>
              <option value="option3">100</option>
              <option value="option4">160</option>
              <option value="option5">250</option>
            </select>
          </div>
          <div>
            <label className="block text-blackfont-medium mb-2 text-lg ">
              ระยะห่างระหว่างหม้อเเปลงถึง LT:{" "}
              <a className="text-red-600 text-sm " href="/">
                *ดูเพิ่มเติม
              </a>
            </label>
            <input
              placeholder="กรอกระยะห่าง"
              type="number"
              name="LT"
              value={formData.LT}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block text-blackfont-medium text-lg mb-2">
              ระยะ หม้อเเปลง - N:{" "}
              <a className="text-red-600  text-sm " href="/">
                *ดูเพิ่มเติม
              </a>
            </label>
            <input
              placeholder="กรอกระยะห่าง"
              type="number"
              name="N"
              value={formData.N}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
        {phaseA !== undefined && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-purple-600 text-center mb-4">
              ผลลัพธ์
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-100 text-blue-700 rounded-md">
                <p className="font-semibold">ออกจากหม้อแปลง - ขาเข้า LT</p>
                <p>PhaseA: {phaseA}</p>
                <p>PhaseB: {phaseB}</p>
                <p>PhaseC: {phaseC}</p>
                <p>N: {newton.toFixed(1)}</p>
              </div>
              <div className="p-4 bg-blue-100 text-blue-700 rounded-md">
                <p className="font-semibold">ขาออก LT - เข้าในไลน์</p>
                <p>PhaseA: {phaseA1.toFixed(2)}</p>
                <p>PhaseB: {phaseB1.toFixed(2)}</p>
                <p>PhaseC: {phaseC1.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
