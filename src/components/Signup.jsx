'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    // Ici tu peux intégrer la logique d'inscription plus tard
    console.log({ nom, email, age, password });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Créer un compte
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom
            </label>
            <input
              type="text"
              placeholder="Ton nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
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

          <div>
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

          <div>
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
        </div>

        <button
          type="submit"
          className="
            w-full
            bg-blue-600 text-white
            py-3 mt-6
            rounded-full
            font-semibold text-lg
            hover:bg-blue-700
            transition
            shadow-md
            focus:outline-none focus:ring-2 focus:ring-blue-300
          "
        >
          Créer mon compte
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}