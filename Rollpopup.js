import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  { name: 'User', icon: '👤' },
  { name: 'Tailor', icon: '🧵' },
  { name: 'VastraVyapari', icon: '🏪' }, // Fabric Seller (Traditional Name)
];

export default function RolePopup() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleEmailSubmit = () => {
    if (email.trim() !== '') setStep(2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Welcome to Fashion Portal</h2>
            <p className="mb-4 text-gray-600">Enter your email to get started</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-indigo-600">Select Your Role</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {roles.map((role) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={role.name}
                  className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center justify-center transition shadow-md ${
                    selectedRole === role.name ? 'border-indigo-600' : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedRole(role.name)}
                >
                  <div className="text-4xl mb-2">{role.icon}</div>
                  <div className="font-medium text-lg">{role.name}</div>
                </motion.div>
              ))}
            </div>

            {selectedRole && (
              <div className="mt-6">
                <p className="text-lg text-green-700">
                  You selected: <strong>{selectedRole}</strong>
                </p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                  Proceed to Registration
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
