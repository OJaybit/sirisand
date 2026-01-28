"use client";
import { pacifico } from '@/app/fonts';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className={`${pacifico.className} text-4xl text-[#0A7BBE]`}>Get In Touch</p>
          <h2 className="text-5xl font-bold text-[#0a7bbe] mt-2">
            Our Contact Information
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="border rounded-lg p-8 flex items-center gap-6 hover:border-[#075E94] transition">
            <div className="w-20 h-20 rounded-full bg-[#0a7bbe] flex items-center justify-center text-white text-3xl hover:bg-[#d6b36b] transition">
              <HiOutlineLocationMarker />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0a7bbe]">
                Our Address
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                El Bawiti, Bahariya Oasis,
                <br />
                Giza, Egypt
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="border rounded-lg p-8 flex items-center gap-6 hover:border-[#075E94] transition">
            <div className="w-20 h-20 rounded-full bg-[#0a7bbe] flex items-center justify-center text-white text-3xl hover:bg-[#075E94] transition">
              <HiOutlinePhone />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0a7bbe]">
                Phone Number
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                +201288062555
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="border rounded-lg p-8 flex items-center gap-6 hover:border-[#075E94] transition">
            <div className="w-20 h-20 rounded-full bg-[#0a7bbe] flex items-center justify-center text-white text-3xl hover:bg-[#075E94] transition">
              <HiOutlineMail />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0a7bbe]">
                Email
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                tours@siri <br /> sandtours.com
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden border">
          <iframe
            title="Bahariya Oasis Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.962786495368!2d28.82512541501315!3d26.34012498329833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1440c38a3ef5f85b%3A0xa0c3d5eae3a8d6f8!2sBahariya%20Oasis!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
