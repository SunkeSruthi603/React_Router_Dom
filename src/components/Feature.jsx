import React from "react";
import { ShieldCheck, Headset, Settings, Globe, MessageSquare, Zap } from "lucide-react";

const features = [
  { icon: <Settings size={40} className="text-yellow-400" />, title: "Customization", description: "Tailor-made solutions designed to fit your business needs." },
  { icon: <ShieldCheck size={40} className="text-blue-400" />, title: "Security", description: "Enterprise-grade security to protect your data and transactions." },
  { icon: <Headset size={40} className="text-green-400" />, title: "Support", description: "24/7 dedicated support to assist you whenever you need." },
  { icon: <Zap size={40} className="text-purple-400" />, title: "Performance", description: "High-speed, optimized solutions for seamless operations." },
  { icon: <Globe size={40} className="text-red-400" />, title: "Global Reach", description: "Expand your business worldwide with seamless integrations." },
  { icon: <MessageSquare size={40} className="text-cyan-400" />, title: "Communication", description: "Efficient collaboration tools for teams and clients." }
];

const Feature = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2 text-lg">Innovative solutions for a modern business environment.</p>

        {/* Feature Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;