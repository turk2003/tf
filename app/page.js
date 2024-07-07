"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-3xl font-bold text-center text-gray-800 mb-6">
          KLA - Transformers
        </div>
        <div className="space-y-4">
          <Link
            className="block w-full text-center bg-blue-500 text-black py-2 rounded hover:bg-blue-600 transition"
            href="/hanginline"
          >
            หม้อแปลงแขวน ในไลน์ PEA
          </Link>
          <Link
            className="block w-full text-center bg-green-500 text-black py-2 rounded hover:bg-green-600 transition"
            href="/hangonly"
          >
            หม้อแปลงแขวน เฉพาะราย
          </Link>
          <Link
            className="block w-full text-center bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
            href="/sitinline"
          >
            หม้อแปลงนั่งร้าน ในไลน์ PEA
          </Link>
          <Link
            className="block w-full text-center bg-red-500  py-2 rounded hover:bg-red-600 transition text-black "
            href="/sitonly"
          >
            หม้อแปลงนั่งร้าน เฉพาะราย
          </Link>
        </div>
      </div>
    </div>
  );
}
