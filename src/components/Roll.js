import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ScissorsSquare, Store } from "lucide-react";
import { useLocation } from "react-router-dom";

const roles = [
  { name: "User", icon: <User size={80} />, value: "user" },  // Increased icon size
  { name: "Tailor", icon: <ScissorsSquare size={80} />, value: "tailor" },
  { name: "Shopkeeper", icon: <Store size={80} />, value: "shopkeeper" },
];

const Roll = () => {
  const location = useLocation();
  const email = location.state?.email || "No Email Found";

  const [selectedRole, setSelectedRole] = useState(null);

  const handleConfirm = () => {
    if (selectedRole) {
      alert(`Role selected: ${selectedRole}\nEmail: ${email}`);
      // You can navigate to registration forms here if needed
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Select Your Role</h2>
          <p className="text-lg text-gray-500 mb-6">Email: {email}</p>

          <div className="flex justify-center gap-8 mb-6">
            {roles.map((role) => (
              <div
                key={role.value}
                onClick={() => setSelectedRole(role.value)}
                className={`cursor-pointer border-4 rounded-2xl flex flex-col items-center justify-center p-6 w-56 transition-all duration-300 ${
                  selectedRole === role.value
                    ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                    : "border-gray-200 hover:border-blue-400 hover:bg-blue-100"
                }`}
              >
                <div className="mb-4 text-blue-600">{role.icon}</div>  {/* Added bigger space between icon and text */}
                <span className="font-semibold text-xl text-gray-700">{role.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleConfirm}
            disabled={!selectedRole}
            className={`mt-8 px-6 py-3 rounded-full text-white font-semibold transition-all ${
              selectedRole
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Confirm Role
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Roll;
