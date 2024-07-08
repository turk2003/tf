"use client";
import { useState } from "react";
import jinx from "/public/jinx.jpg";
import Tf from "/public/Tf.png";
import Image from "next/image";
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
    pole: "",
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
    console.log(formData.tf);
    e.preventDefault();
    if (formData.tf === "50") {
      setPhaseA(Number(formData.LT) + 3.1);
      setPhaseB(Number(formData.LT) + 2.8);
      setPhaseC(Number(formData.LT) + 3.3);
      setPhaseA1(Number(formData.N) + 2.78);
      setPhaseB1(Number(formData.N) + 2.28);
      setPhaseC1(Number(formData.N) + 2.58);
      setNewton(Number(formData.N) + 1.4);
    } else if (formData.tf === "30") {
      setPhaseA(Number(formData.LT) + 1);
      setPhaseB(Number(formData.LT) + 1);
      setPhaseC(Number(formData.LT) + 1);
      setPhaseA1(Number(formData.N) + 1);
      setPhaseB1(Number(formData.N) + 1);
      setPhaseC1(Number(formData.N) + 1);
      setNewton(Number(formData.N) + 1);
    } else if (formData.tf === "100") {
      setPhaseA(Number(formData.LT) + 1);
      setPhaseB(Number(formData.LT) + 1);
      setPhaseC(Number(formData.LT) + 1);
      setPhaseA1(Number(formData.N) + 1);
      setPhaseB1(Number(formData.N) + 1);
      setPhaseC1(Number(formData.N) + 1);
      setNewton(Number(formData.N) + 1);
    } else if (formData.tf === "160") {
      setPhaseA(Number(formData.LT) + 1);
      setPhaseB(Number(formData.LT) + 1);
      setPhaseC(Number(formData.LT) + 1);
      setPhaseA1(Number(formData.N) + 1);
      setPhaseB1(Number(formData.N) + 1);
      setPhaseC1(Number(formData.N) + 1);
      setNewton(Number(formData.N) + 1);
    } else if (formData.tf === "250") {
      setPhaseA(Number(formData.LT) + 1);
      setPhaseB(Number(formData.LT) + 1);
      setPhaseC(Number(formData.LT) + 1);
      setPhaseA1(Number(formData.N) + 1);
      setPhaseB1(Number(formData.N) + 1);
      setPhaseC1(Number(formData.N) + 1);
      setNewton(Number(formData.N) + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
          หม้อแปลงนั่งร้าน เฉพาะราย
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
              <option value="30">30 KVA</option>
              <option value="50">50 KVA</option>
              <option value="100">100 KVA</option>
              <option value="160">160 KVA</option>
              <option value="250">250 KVA</option>
            </select>
            <label className="block text-black text-lg font-medium mb-2">
              ขนาดเสา:
            </label>
            <select
              name="pole"
              value={formData.dropdown}
              onChange={handleChange}
              className="w-full border border-black p-2 rounded-md"
            >
              <option value="">เลือกขนาดเสา</option>
              <option value="12">12 เมตร</option>
              <option value="12.20">12.20 เมตร</option>
              <option value="14">14 เมตร</option>
              <option value="14.30">14.30 เมตร</option>
            </select>
          </div>
          <div className="relative p-4 ">
            <img
              src="Tf.png"
              alt="Transformer"
              className="w-full h-full object-cover rounded-md"
            />
            <input
              type="number"
              name="LT"
              className="absolute top-0 left-0 w-22 p-2 m-2 bg-white border border-gray-300 rounded"
              placeholder="ระยะห่างระหว่างLTถึง METER:"
              value={formData.LT}
              onChange={handleChange}
            />

            <input
              type="number"
              name="N"
              className="absolute bottom-0 right-0  w-22 p-2 m-2 bg-white border border-gray-300 rounded"
              placeholder="ระยะห่างระหว่างTRถึง METER:"
              value={formData.N}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-200"
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
              <div className="p-4 bg-blue-100 text-red-700 rounded-md">
                <p className="font-semibold">ออกจากหม้อแปลง - ขาเข้า LT</p>
                <p>PhaseA: {phaseA.toFixed(1)} เมตร</p>
                <p>PhaseB: {phaseB.toFixed(1)} เมตร</p>
                <p>PhaseC: {phaseC.toFixed(1)} เมตร</p>
                <p>N: {newton.toFixed(1)}</p>
              </div>
              <div className="p-4 bg-blue-100 text-red-700 rounded-md">
                <p className="font-semibold">ขาออก LT - เข้าในไลน์</p>
                <p>PhaseA: {phaseA1.toFixed(2)} เมตร</p>
                <p>PhaseB: {phaseB1.toFixed(2)} เมตร</p>
                <p>PhaseC: {phaseC1.toFixed(2)} เมตร</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
