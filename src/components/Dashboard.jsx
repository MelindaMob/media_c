'use client';

import React, { useEffect, useState } from "react";
// import { supabase } from "../supabase/supabaseClient";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("articles");
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetchers commentés pour exemple
  const fetchArticles = async () => { setLoading(true); /* ... */ setLoading(false); };
  const fetchVideos   = async () => { setLoading(true); /* ... */ setLoading(false); };
  const fetchUsers    = async () => { setLoading(true); /* ... */ setLoading(false); };

  useEffect(() => {
    if (activeTab === "articles") fetchArticles();
    if (activeTab === "videos")   fetchVideos();
    if (activeTab === "users")    fetchUsers();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Tableau de Bord</h1>

        {/* Onglets */}
        <div className="flex space-x-4 mb-8">
          {["articles","videos","users"].map((tab) => {
            const isActive = activeTab === tab;
            const color = tab === "articles"
              ? "blue"
              : tab === "videos"
                ? "green"
                : "purple";
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-6 py-2 rounded-full font-semibold transition
                  ${isActive
                    ? `bg-${color}-600 text-white shadow`
                    : `bg-white text-${color}-600 border border-${color}-300 hover:bg-${color}-50`}
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            );
          })}
        </div>

        <div className="space-y-12">
          {/* ARTICLES */}
          {activeTab === "articles" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-blue-700">Gestion des Articles</h2>

              {/* Formulaire */}
              <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Ajouter un article</h3>
                <form className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Titre"
                    className="border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 placeholder-black"
                  />
                  <textarea
                    placeholder="Contenu"
                    className="border border-blue-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 placeholder-black"
                    rows={4}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="text-sm text-gray-600 placeholder-black"
                  />
                  <button
                    type="submit"
                    className="self-start bg-blue-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-700 shadow-md transition"
                  >
                    Publier
                  </button>
                </form>
              </div>

              {/* Liste des articles */}
              <div className="grid md:grid-cols-2 gap-6">
                {articles.map((a) => (
                  <div
                    key={a.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <h4 className="text-lg font-bold text-gray-800">{a.title}</h4>
                    <p className="text-gray-600 mt-2">{a.content}</p>
                    {a.image_url && (
                      <img
                        src={a.image_url}
                        alt={a.title}
                        className="mt-4 rounded-lg w-full object-cover h-40"
                      />
                    )}
                    <button
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                {articles.length === 0 && !loading && (
                  <p className="text-gray-500 col-span-full">Aucun article trouvé.</p>
                )}
              </div>
            </section>
          )}

          {/* VIDÉOS */}
          {activeTab === "videos" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-green-700">Gestion des Vidéos</h2>

              {/* Formulaire */}
              <div className="bg-green-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Ajouter une vidéo</h3>
                <form className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Titre"
                    className="border border-green-200 rounded-lg p-3 focus:ring-2 focus:ring-green-400 placeholder-black"
                  />
                  <input
                    type="url"
                    placeholder="URL de la vidéo"
                    className="border border-green-200 rounded-lg p-3 focus:ring-2 focus:ring-green-400 placeholder-black"
                  />
                  <textarea
                    placeholder="Description"
                    className="border border-green-200 rounded-lg p-3 focus:ring-2 focus:ring-green-400 placeholder-black"
                    rows={3}
                  />
                  <button
                    type="submit"
                    className="self-start bg-green-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-green-700 shadow-md transition"
                  >
                    Ajouter
                  </button>
                </form>
              </div>

              {/* Liste des vidéos */}
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((v) => (
                  <div
                    key={v.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <h4 className="text-lg font-bold text-gray-800">{v.title}</h4>
                    <p className="text-gray-600 mt-2">{v.description}</p>
                    <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden shadow-sm">
                      <iframe
                        src={v.video_url}
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <button
                      className="mt-4 text-green-600 hover:text-green-800 font-medium"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                {!videos.length && !loading && (
                  <p className="text-gray-500 col-span-full">Aucune vidéo trouvée.</p>
                )}
              </div>
            </section>
          )}

          {/* UTILISATEURS */}
          {activeTab === "users" && (
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-purple-700">Liste des Utilisateurs</h2>

              <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Utilisateurs inscrits</h3>
                {loading ? (
                  <p className="text-gray-600">Chargement…</p>
                ) : (
                  <ul className="space-y-3">
                    {users.map((u) => (
                      <li
                        key={u.id}
                        className="bg-white border border-purple-200 rounded-lg p-4 flex justify-between items-center"
                      >
                        <span className="text-gray-800">{u.email}</span>
                        <span className="text-gray-500 text-sm">
                          {new Date(u.created_at).toLocaleDateString()}
                        </span>
                      </li>
                    ))}
                    {!users.length && (
                      <p className="text-gray-500">Aucun utilisateur.</p>
                    )}
                  </ul>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}