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
    tf: "",
    tower: "",
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
              name="tf"
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
            <label className="block text-black text-lg font-medium mb-2">
              ขนาดเสา:
            </label>
            <select
              name="tower"
              value={formData.dropdown}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded-md"
            >
              <option value="">เลือกขนาดเสา</option>
              <option value="option1">12</option>
              <option value="option2">12.20</option>
              <option value="option3">14</option>
              <option value="option4">14.30</option>
            </select>
          </div>
          <div className="relative">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Anchor_tower_of_overhead_power_line.jpg/1200px-Anchor_tower_of_overhead_power_line.jpg"
              alt="Transformer"
              className="w-full h-full object-cover rounded-md"
            />
            <input
              type="number"
              name="LT"
              className="absolute top-0 left-0 w-22 p-2 m-2 bg-white border border-gray-300 rounded"
              placeholder="ระยะห่างระหว่างLTถึง MITER:"
              value={formData.LT}
              onChange={handleChange}
            />

            <input
              type="number"
              name="N"
              className="absolute bottom-0 right-0  w-22 p-2 m-2 bg-white border border-gray-300 rounded"
              placeholder="ระยะห่างระหว่างTRถึง MITER:"
              value={formData.N}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            คำนวณ
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
                <p>PhaseA: {phaseA.toFixed(1)}</p>
                <p>PhaseB: {phaseB.toFixed(1)}</p>
                <p>PhaseC: {phaseC.toFixed(1)}</p>
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
