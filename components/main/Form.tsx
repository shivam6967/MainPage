"use client";
import React, { useState } from "react";
import Image from "next/image";

const HoroscopeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    timeOfBirth: "",
    gender: "",
    state: "",
    city: "",
    includeGemstones: false,
    includePooja: false,
    includeMeditation: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your Horoscope and Kundali are being generated!");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      <div className="relative w-64 h-64">
        <Image
          className="animate-spin-slow"
          src="/img3.png"
          alt="Horoscope Symbol"
          fill
          objectFit="contain"
          priority
        />
      </div>

      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg rounded border border-gray-300 bg-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg rounded border border-gray-300 bg-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium">Time of Birth</label>
              <input
                type="time"
                name="timeOfBirth"
                value={formData.timeOfBirth}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg rounded border border-gray-300 bg-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg rounded border border-gray-300 bg-black"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium">State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg rounded border border-gray-300 bg-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 text-lg rounded border border-gray-300 bg-black"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-4 text-lg font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors"
          >
            Generate Horoscope
          </button>
        </form>
      </div>
    </div>
  );
};

export default HoroscopeForm;
