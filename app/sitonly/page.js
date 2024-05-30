"use client";
import React, { useState } from "react";
export default function Page() {
  const [point1, setPoint1] = useState({ x: 0, y: 0 });
  const [point2, setPoint2] = useState({ x: 0, y: 0 });

  const handleInputChange = (e, point) => {
    const { name, value } = e.target;
    if (point === "point1") {
      setPoint1({ ...point1, [name]: value });
    } else {
      setPoint2({ ...point2, [name]: value });
    }
  };

  const calculateDistance = () => {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy).toFixed(2);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-ZmY_aWe6RjIuYdfJ3HivyzssVjsh2DOLw&s"
          alt="Transformer"
          className="w-96 h-96"
        />
        <input
          type="number"
          name="x"
          value={point1.x}
          onChange={(e) => handleInputChange(e, "point1")}
          className="absolute top-0 left-0 w-16 p-2 bg-white border border-gray-300 rounded"
          placeholder="X1"
        />

        <input
          type="number"
          name="y"
          value={point2.y}
          onChange={(e) => handleInputChange(e, "point2")}
          className="absolute bottom-0 right-0 mb-10 w-16 p-2 bg-white border border-gray-300 rounded"
          placeholder="Y2"
        />
      </div>
      <button
        onClick={calculateDistance}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Calculate Distance
      </button>
      <p className="mt-4">Distance: {calculateDistance()} units</p>
    </div>
  );
}
