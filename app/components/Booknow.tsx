"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [comment, setComment] = useState("");

  const [errors, setErrors] = useState({
    checkIn: false,
    checkOut: false,
    dateOrder: false, // new error state for invalid date order
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ checkIn: false, checkOut: false, dateOrder: false });

    // Validate dates
    let hasError = false;
    if (!checkIn) {
      setErrors((prev) => ({ ...prev, checkIn: true }));
      hasError = true;
    }
    if (!checkOut) {
      setErrors((prev) => ({ ...prev, checkOut: true }));
      hasError = true;
    }
    if (checkIn && checkOut && checkOut < checkIn) {
      setErrors((prev) => ({ ...prev, dateOrder: true }));
      hasError = true;
    }

    if (hasError) return;

    // Form submission
    console.log({
      firstName,
      lastName,
      mobile,
      email,
      checkIn,
      checkOut,
      adults,
      children,
      comment,
    });
    alert("Form submitted!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0A7BBE]">
        Start your adventure – book today
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block font-semibold mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name here"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-semibold mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name here"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Example: +1 212-695-1962"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-semibold mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Example: user@website.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Check-in Date */}
        <div>
          <label className="block font-semibold mb-1">
            Check-in Date <span className="text-red-500">*</span>
          </label>
          <DatePicker
            selected={checkIn}
            onChange={(date: Date | null) => setCheckIn(date)}
            dateFormat="dd - MM - yyyy"
            placeholderText="DD - MM - YYYY"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
              errors.checkIn || errors.dateOrder
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:ring-[#0A7BBE]"
            }`}
          />
          {errors.checkIn && <p className="text-red-500 text-sm mt-1">Check-in date is required</p>}
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block font-semibold mb-1">
            Check-out Date <span className="text-red-500">*</span>
          </label>
          <DatePicker
            selected={checkOut}
            onChange={(date: Date | null) => setCheckOut(date)}
            dateFormat="dd - MM - yyyy"
            placeholderText="DD - MM - YYYY"
            minDate={checkIn || new Date()} // Prevent check-out before check-in
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
              errors.checkOut || errors.dateOrder
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-200 focus:ring-[#0A7BBE]"
            }`}
          />
          {errors.checkOut && <p className="text-red-500 text-sm mt-1">Check-out date is required</p>}
          {errors.dateOrder && <p className="text-red-500 text-sm mt-1">Check-out cannot be before Check-in</p>}
        </div>

        {/* Number of Adults */}
        <div>
          <label className="block font-semibold mb-1">
            Number of Adults <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min={1}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Number of Children */}
        <div>
          <label className="block font-semibold mb-1">Number of Children</label>
          <input
            type="number"
            min={0}
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
          />
        </div>

        {/* Comments */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">
            Write your comment here <span className="text-red-500">*</span>
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="Your comment..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7BBE]"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#0A7BBE] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#075E94] transition"
          >
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
}
