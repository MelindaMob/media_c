'use client';

import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux récupérer email & password pour une future intégration
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Connexion
        </h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="ton.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              border border-gray-200
              rounded-lg
              px-4 py-3
              placeholder-black text-black
              focus:outline-none focus:ring-2 focus:ring-blue-300
              transition
            "
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              border border-gray-200
              rounded-lg
              px-4 py-3
              placeholder-black text-black
              focus:outline-none focus:ring-2 focus:ring-blue-300
              transition
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-blue-600 text-white
            py-3
            rounded-full
            font-semibold text-lg
            hover:bg-blue-700
            transition
            shadow-md
            focus:outline-none focus:ring-2 focus:ring-blue-300
          "
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}