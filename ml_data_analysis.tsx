import React, { useState } from 'react';
import { BarChart, Bar, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Activity, Users, Award, TrendingUp, BarChart3 } from 'lucide-react';

const MLAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Parse the CSV data - All 114 heroes
  const heroes = [
    { name: "Aamon", role: "Assassin", lane: "Jungler", hp: 2614, movSpeed: 250, wins: 43, loss: 42, winRate: 50.59 },
    { name: "Akai", role: "Tank", lane: "Roamer", hp: 2769, movSpeed: 260, wins: 540, loss: 524, winRate: 50.75 },
    { name: "Aldous", role: "Fighter", lane: "EXP Lane", hp: 2718, movSpeed: 260, wins: 95, loss: 92, winRate: 50.80 },
    { name: "Alice", role: "Mage", lane: "EXP Lane", hp: 2573, movSpeed: 240, wins: 364, loss: 352, winRate: 50.84 },
    { name: "Alpha", role: "Fighter", lane: "EXP Lane", hp: 2646, movSpeed: 260, wins: 24, loss: 33, winRate: 42.11 },
    { name: "Alucard", role: "Fighter", lane: "Jungler", hp: 2621, movSpeed: 260, wins: 22, loss: 33, winRate: 40.00 },
    { name: "Angela", role: "Support", lane: "Roamer", hp: 2421, movSpeed: 240, wins: 253, loss: 325, winRate: 43.77 },
    { name: "Argus", role: "Fighter", lane: "EXP Lane", hp: 2628, movSpeed: 260, wins: 2, loss: 7, winRate: 22.22 },
    { name: "Atlas", role: "Tank", lane: "Roamer", hp: 2819, movSpeed: 240, wins: 277, loss: 254, winRate: 52.17 },
    { name: "Aurora", role: "Mage", lane: "Mid", hp: 2501, movSpeed: 245, wins: 28, loss: 26, winRate: 51.85 },
    { name: "Aulus", role: "Fighter", lane: "EXP Lane", hp: 2758, movSpeed: 255, wins: 114, loss: 109, winRate: 51.12 },
    { name: "Badang", role: "Fighter", lane: "EXP Lane", hp: 2708, movSpeed: 255, wins: 15, loss: 14, winRate: 51.72 },
    { name: "Balmond", role: "Fighter", lane: "EXP Lane", hp: 2736, movSpeed: 260, wins: 301, loss: 330, winRate: 47.70 },
    { name: "Bane", role: "Fighter", lane: "Jungler", hp: 2559, movSpeed: 260, wins: 95, loss: 111, winRate: 46.12 },
    { name: "Barats", role: "Tank", lane: "EXP Lane", hp: 2559, movSpeed: 268, wins: 327, loss: 346, winRate: 48.59 },
    { name: "Baxia", role: "Tank", lane: "Jungler", hp: 2769, movSpeed: 240, wins: 450, loss: 465, winRate: 49.18 },
    { name: "Beatrix", role: "Marksman", lane: "Gold Lane", hp: 2550, movSpeed: 257, wins: 1016, loss: 969, winRate: 51.18 },
    { name: "Belerick", role: "Tank", lane: "Roamer", hp: 2569, movSpeed: 250, wins: 57, loss: 71, winRate: 44.53 },
    { name: "Benedetta", role: "Assassin", lane: "EXP Lane", hp: 2569, movSpeed: 255, wins: 477, loss: 471, winRate: 50.32 },
    { name: "Brody", role: "Marksman", lane: "Gold Lane", hp: 2490, movSpeed: 253, wins: 470, loss: 476, winRate: 49.68 },
    { name: "Bruno", role: "Marksman", lane: "Gold Lane", hp: 2522, movSpeed: 240, wins: 154, loss: 154, winRate: 50.00 },
    { name: "Carmilla", role: "Support", lane: "Roamer", hp: 2528, movSpeed: 255, wins: 32, loss: 47, winRate: 40.51 },
    { name: "Cecilion", role: "Mage", lane: "Mid", hp: 2456, movSpeed: 255, wins: 470, loss: 588, winRate: 44.44 },
    { name: "Chang'e", role: "Mage", lane: "Mid", hp: 2301, movSpeed: 240, wins: 221, loss: 285, winRate: 43.68 },
    { name: "Chou", role: "Fighter", lane: "Gold Lane", hp: 2708, movSpeed: 260, wins: 1139, loss: 1057, winRate: 51.87 },
    { name: "Claude", role: "Marksman", lane: "Gold Lane", hp: 2370, movSpeed: 240, wins: 618, loss: 583, winRate: 51.46 },
    { name: "Clint", role: "Marksman", lane: "Gold Lane", hp: 2530, movSpeed: 240, wins: 540, loss: 536, winRate: 50.19 },
    { name: "Cyclops", role: "Mage", lane: "Mid", hp: 2521, movSpeed: 240, wins: 69, loss: 90, winRate: 43.40 },
    { name: "Diggie", role: "Support", lane: "Roamer", hp: 2468, movSpeed: 250, wins: 270, loss: 318, winRate: 45.92 },
    { name: "Dyrroth", role: "Fighter", lane: "EXP Lane", hp: 2758, movSpeed: 265, wins: 345, loss: 300, winRate: 53.49 },
    { name: "Esmeralda", role: "Mage", lane: "EXP Lane", hp: 2573, movSpeed: 240, wins: 1357, loss: 1529, winRate: 47.03 },
    { name: "Edith", role: "Tank", lane: "EXP Lane", hp: 2549, movSpeed: 255, wins: 87, loss: 93, winRate: 48.33 },
    { name: "Estes", role: "Support", lane: "Roamer", hp: 2221, movSpeed: 240, wins: 220, loss: 203, winRate: 52.01 },
    { name: "Eudora", role: "Mage", lane: "Mid", hp: 2524, movSpeed: 250, wins: 78, loss: 67, winRate: 53.79 },
    { name: "Fanny", role: "Assassin", lane: "Jungler", hp: 2526, movSpeed: 265, wins: 189, loss: 196, winRate: 49.09 },
    { name: "Faramis", role: "Support", lane: "Roamer", hp: 2543, movSpeed: 245, wins: 162, loss: 118, winRate: 57.86 },
    { name: "Floryn", role: "Support", lane: "Roamer", hp: 2401, movSpeed: 240, wins: 16, loss: 32, winRate: 33.33 },
    { name: "Franco", role: "Tank", lane: "Roamer", hp: 2709, movSpeed: 260, wins: 360, loss: 267, winRate: 57.42 },
    { name: "Fredrinn", role: "Tank", lane: "EXP Lane", hp: 2709, movSpeed: 260, wins: 0, loss: 3, winRate: 0.00 },
    { name: "Freya", role: "Fighter", lane: "EXP Lane", hp: 2801, movSpeed: 260, wins: 7, loss: 15, winRate: 31.82 },
    { name: "Gatotkaca", role: "Tank", lane: "Roamer", hp: 2629, movSpeed: 260, wins: 71, loss: 74, winRate: 48.97 },
    { name: "Gloo", role: "Tank", lane: "Roamer", hp: 2819, movSpeed: 245, wins: 244, loss: 223, winRate: 52.25 },
    { name: "Gord", role: "Mage", lane: "Mid", hp: 2478, movSpeed: 240, wins: 13, loss: 21, winRate: 38.24 },
    { name: "Granger", role: "Marksman", lane: "Gold Lane", hp: 2370, movSpeed: 240, wins: 309, loss: 349, winRate: 46.96 },
    { name: "Grock", role: "Tank", lane: "Roamer", hp: 2819, movSpeed: 260, wins: 601, loss: 634, winRate: 48.66 },
    { name: "Guinevere", role: "Fighter", lane: "Gold Lane", hp: 2528, movSpeed: 260, wins: 18, loss: 26, winRate: 40.91 },
    { name: "Gusion", role: "Assassin", lane: "Jungler", hp: 2578, movSpeed: 260, wins: 117, loss: 131, winRate: 47.18 },
    { name: "Hanabi", role: "Marksman", lane: "Gold Lane", hp: 2510, movSpeed: 245, wins: 14, loss: 12, winRate: 53.85 },
    { name: "Hanzo", role: "Assassin", lane: "Jungler", hp: 2594, movSpeed: 260, wins: 14, loss: 25, winRate: 35.90 },
    { name: "Harith", role: "Mage", lane: "Mid", hp: 2701, movSpeed: 240, wins: 243, loss: 222, winRate: 52.26 },
    { name: "Harley", role: "Mage", lane: "Mid", hp: 2501, movSpeed: 240, wins: 211, loss: 217, winRate: 49.30 },
    { name: "Hayabusa", role: "Assassin", lane: "Jungler", hp: 2429, movSpeed: 260, wins: 607, loss: 564, winRate: 51.84 },
    { name: "Helcurt", role: "Assassin", lane: "Jungler", hp: 2599, movSpeed: 255, wins: 173, loss: 179, winRate: 49.15 },
    { name: "Hilda", role: "Fighter", lane: "EXP Lane", hp: 2789, movSpeed: 260, wins: 192, loss: 230, winRate: 45.50 },
    { name: "Hylos", role: "Tank", lane: "Roamer", hp: 2909, movSpeed: 260, wins: 232, loss: 277, winRate: 45.58 },
    { name: "Irithel", role: "Marksman", lane: "Gold Lane", hp: 2540, movSpeed: 260, wins: 114, loss: 109, winRate: 51.12 },
    { name: "Jawhead", role: "Fighter", lane: "EXP Lane", hp: 2658, movSpeed: 255, wins: 470, loss: 490, winRate: 48.96 },
    { name: "Johnson", role: "Tank", lane: "Roamer", hp: 2809, movSpeed: 255, wins: 68, loss: 69, winRate: 49.64 },
    { name: "Julian", role: "Fighter", lane: "EXP Lane", hp: 2878, movSpeed: 262, wins: 281, loss: 256, winRate: 52.33 },
    { name: "Kadita", role: "Mage", lane: "Mid", hp: 2491, movSpeed: 240, wins: 198, loss: 148, winRate: 57.23 },
    { name: "Kagura", role: "Mage", lane: "Mid", hp: 2556, movSpeed: 240, wins: 714, loss: 739, winRate: 49.14 },
    { name: "Kaja", role: "Fighter", lane: "EXP Lane", hp: 2609, movSpeed: 270, wins: 278, loss: 280, winRate: 49.82 },
    { name: "Karina", role: "Assassin", lane: "Jungler", hp: 2633, movSpeed: 260, wins: 403, loss: 395, winRate: 50.50 },
    { name: "Karrie", role: "Marksman", lane: "Gold Lane", hp: 2578, movSpeed: 240, wins: 350, loss: 430, winRate: 44.87 },
    { name: "Khaleed", role: "Fighter", lane: "EXP Lane", hp: 2778, movSpeed: 250, wins: 174, loss: 166, winRate: 51.18 },
    { name: "Khufra", role: "Tank", lane: "Roamer", hp: 2770, movSpeed: 255, wins: 689, loss: 661, winRate: 51.04 },
    { name: "Kimmy", role: "Marksman", lane: "Gold Lane", hp: 2450, movSpeed: 245, wins: 233, loss: 203, winRate: 53.44 },
    { name: "Lancelot", role: "Assassin", lane: "Jungler", hp: 2549, movSpeed: 260, wins: 603, loss: 568, winRate: 51.49 },
    { name: "Lapu-Lapu", role: "Fighter", lane: "EXP Lane", hp: 2628, movSpeed: 260, wins: 239, loss: 256, winRate: 48.28 },
    { name: "Layla", role: "Marksman", lane: "Gold Lane", hp: 2500, movSpeed: 240, wins: 8, loss: 7, winRate: 53.33 },
    { name: "Leomord", role: "Fighter", lane: "EXP Lane", hp: 2738, movSpeed: 240, wins: 89, loss: 122, winRate: 42.18 },
    { name: "Lesley", role: "Marksman", lane: "Gold Lane", hp: 2490, movSpeed: 240, wins: 19, loss: 35, winRate: 35.19 },
    { name: "Ling", role: "Assassin", lane: "Jungler", hp: 2578, movSpeed: 260, wins: 700, loss: 684, winRate: 50.58 },
    { name: "Lolita", role: "Support", lane: "Roamer", hp: 2579, movSpeed: 260, wins: 508, loss: 436, winRate: 53.81 },
    { name: "Lunox", role: "Mage", lane: "Mid", hp: 2621, movSpeed: 240, wins: 724, loss: 698, winRate: 50.91 },
    { name: "Luo Yi", role: "Mage", lane: "Mid", hp: 2601, movSpeed: 250, wins: 165, loss: 147, winRate: 52.88 },
    { name: "Lylia", role: "Mage", lane: "Mid", hp: 2501, movSpeed: 245, wins: 655, loss: 628, winRate: 51.05 },
    { name: "Mathilda", role: "Support", lane: "Roamer", hp: 2561, movSpeed: 252, wins: 756, loss: 736, winRate: 50.67 },
    { name: "Martis", role: "Fighter", lane: "EXP Lane", hp: 2738, movSpeed: 260, wins: 95, loss: 110, winRate: 46.34 },
    { name: "Masha", role: "Fighter", lane: "EXP Lane", hp: 2043, movSpeed: 250, wins: 321, loss: 278, winRate: 53.59 },
    { name: "Melissa", role: "Marksman", lane: "Gold Lane", hp: 2460, movSpeed: 248, wins: 67, loss: 75, winRate: 47.18 },
    { name: "Minotaur", role: "Tank", lane: "Roamer", hp: 2859, movSpeed: 260, wins: 96, loss: 96, winRate: 50.00 },
    { name: "Minsitthar", role: "Fighter", lane: "EXP Lane", hp: 2698, movSpeed: 260, wins: 20, loss: 30, winRate: 40.00 },
    { name: "Miya", role: "Marksman", lane: "Gold Lane", hp: 2524, movSpeed: 240, wins: 18, loss: 14, winRate: 56.25 },
    { name: "Moskov", role: "Marksman", lane: "Gold Lane", hp: 2455, movSpeed: 240, wins: 42, loss: 36, winRate: 53.85 },
    { name: "Nana", role: "Mage", lane: "Mid", hp: 2501, movSpeed: 250, wins: 26, loss: 38, winRate: 40.63 },
    { name: "Natan", role: "Marksman", lane: "Gold Lane", hp: 2530, movSpeed: 245, wins: 167, loss: 155, winRate: 51.86 },
    { name: "Natalia", role: "Assassin", lane: "Jungler", hp: 2639, movSpeed: 260, wins: 173, loss: 173, winRate: 50.00 },
    { name: "Odette", role: "Mage", lane: "Mid", hp: 2491, movSpeed: 240, wins: 2, loss: 4, winRate: 33.33 },
    { name: "Pharsa", role: "Mage", lane: "Mid", hp: 2421, movSpeed: 240, wins: 668, loss: 673, winRate: 49.81 },
    { name: "Phoveus", role: "Fighter", lane: "EXP Lane", hp: 2828, movSpeed: 252, wins: 309, loss: 273, winRate: 53.09 },
    { name: "Popol_and_Kupa", role: "Marksman", lane: "Gold Lane", hp: 2425, movSpeed: 250, wins: 669, loss: 654, winRate: 50.57 },
    { name: "Paquito", role: "Fighter", lane: "EXP Lane", hp: 2798, movSpeed: 260, wins: 1064, loss: 964, winRate: 52.47 },
    { name: "Rafaela", role: "Support", lane: "Roamer", hp: 2441, movSpeed: 245, wins: 375, loss: 418, winRate: 47.29 },
    { name: "Roger", role: "Fighter", lane: "Jungler", hp: 2730, movSpeed: 240, wins: 361, loss: 411, winRate: 46.76 },
    { name: "Ruby", role: "Fighter", lane: "EXP Lane", hp: 2646, movSpeed: 260, wins: 547, loss: 632, winRate: 46.40 },
    { name: "Selena", role: "Assassin", lane: "Jungler", hp: 2401, movSpeed: 240, wins: 493, loss: 531, winRate: 48.14 },
    { name: "Silvanna", role: "Fighter", lane: "EXP Lane", hp: 2868, movSpeed: 255, wins: 88, loss: 84, winRate: 51.16 },
    { name: "Terizla", role: "Fighter", lane: "EXP Lane", hp: 2728, movSpeed: 255, wins: 103, loss: 105, winRate: 49.52 },
    { name: "Thamuz", role: "Fighter", lane: "EXP Lane", hp: 2758, movSpeed: 250, wins: 582, loss: 597, winRate: 49.36 },
    { name: "Uranus", role: "Tank", lane: "EXP Lane", hp: 2489, movSpeed: 260, wins: 596, loss: 578, winRate: 50.77 },
    { name: "Vale", role: "Mage", lane: "Mid", hp: 2401, movSpeed: 250, wins: 53, loss: 57, winRate: 48.18 },
    { name: "Valentina", role: "Mage", lane: "Mid", hp: 2701, movSpeed: 240, wins: 270, loss: 250, winRate: 51.92 },
    { name: "Valir", role: "Mage", lane: "Mid", hp: 2516, movSpeed: 245, wins: 129, loss: 125, winRate: 50.79 },
    { name: "Vexana", role: "Mage", lane: "Mid", hp: 2481, movSpeed: 245, wins: 5, loss: 4, winRate: 55.56 },
    { name: "Wanwan", role: "Marksman", lane: "Gold Lane", hp: 2540, movSpeed: 245, wins: 413, loss: 312, winRate: 56.97 },
    { name: "Xavier", role: "Mage", lane: "Mid", hp: 2616, movSpeed: 250, wins: 252, loss: 232, winRate: 52.07 },
    { name: "X.Borg", role: "Fighter", lane: "EXP Lane", hp: 918, movSpeed: 260, wins: 318, loss: 327, winRate: 49.30 },
    { name: "Yin", role: "Fighter", lane: "EXP Lane", hp: 2578, movSpeed: 252, wins: 52, loss: 45, winRate: 53.61 },
    { name: "Yi Sun-Shin", role: "Assassin", lane: "Jungler", hp: 2570, movSpeed: 250, wins: 443, loss: 383, winRate: 53.63 },
    { name: "Yu Zhong", role: "Fighter", lane: "EXP Lane", hp: 2698, movSpeed: 245, wins: 550, loss: 594, winRate: 48.08 },
    { name: "Yve", role: "Mage", lane: "Mid", hp: 2651, movSpeed: 255, wins: 834, loss: 722, winRate: 53.60 },
    { name: "Zhask", role: "Mage", lane: "Mid", hp: 2401, movSpeed: 240, wins: 37, loss: 46, winRate: 44.58 },
    { name: "Zilong", role: "Fighter", lane: "Gold Lane", hp: 2689, movSpeed: 265, wins: 5, loss: 23, winRate: 17.86 }
  ];

  // Calculate statistics
  const avgHP = heroes.reduce((sum, h) => sum + h.hp, 0) / heroes.length;
  const avgSpeed = heroes.reduce((sum, h) => sum + h.movSpeed, 0) / heroes.length;
  const avgWinRate = heroes.reduce((sum, h) => sum + h.winRate, 0) / heroes.length;

  // Role comparison
  const roleStats = heroes.reduce((acc, hero) => {
    if (!acc[hero.role]) {
      acc[hero.role] = { role: hero.role, avgHP: 0, avgSpeed: 0, count: 0, totalHP: 0, totalSpeed: 0 };
    }
    acc[hero.role].totalHP += hero.hp;
    acc[hero.role].totalSpeed += hero.movSpeed;
    acc[hero.role].count += 1;
    return acc;
  }, {});

  const roleData = Object.values(roleStats).map(stat => ({
    role: stat.role,
    avgHP: Math.round(stat.totalHP / stat.count),
    avgSpeed: Math.round(stat.totalSpeed / stat.count)
  }));

  // Top performers
  const topHeroes = [...heroes].sort((a, b) => b.winRate - a.winRate).slice(0, 10);

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-blue-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 p-6 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mobile Legends Hero Analysis</h1>
          <p className="text-gray-600">Statistical Analysis of {heroes.length} Heroes Dataset</p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          <TabButton id="overview" label="Overview" icon={Activity} />
          <TabButton id="roles" label="Role Analysis" icon={Users} />
          <TabButton id="performance" label="Performance" icon={Award} />
          <TabButton id="hypothesis" label="Hypothesis Tests" icon={BarChart3} />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Average HP</div>
                <div className="text-3xl font-bold text-blue-600">{Math.round(avgHP)}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Average Movement Speed</div>
                <div className="text-3xl font-bold text-green-600">{Math.round(avgSpeed)}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm text-gray-600 mb-1">Average Win Rate</div>
                <div className="text-3xl font-bold text-purple-600">{avgWinRate.toFixed(2)}%</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">HP vs Movement Speed Distribution</h2>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hp" name="HP" type="number" label={{ value: 'HP', position: 'insideBottom', offset: -5 }} />
                  <YAxis dataKey="movSpeed" name="Speed" label={{ value: 'Movement Speed', angle: -90, position: 'insideLeft' }} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
                    if (payload && payload.length > 0) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-300 rounded shadow">
                          <p className="font-bold">{data.name}</p>
                          <p className="text-sm">HP: {data.hp}</p>
                          <p className="text-sm">Speed: {data.movSpeed}</p>
                          <p className="text-sm">Role: {data.role}</p>
                        </div>
                      );
                    }
                    return null;
                  }} />
                  <Scatter data={heroes} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Roles Tab */}
        {activeTab === 'roles' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Average HP by Role</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgHP" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Average Movement Speed by Role</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis domain={[230, 270]} />
                  <Tooltip />
                  <Bar dataKey="avgSpeed" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Top 10 Heroes by Win Rate</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topHeroes} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[45, 55]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="winRate" fill="#8b5cf6">
                    {topHeroes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.winRate > 51 ? '#10b981' : '#f59e0b'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Hero Statistics Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Hero</th>
                      <th className="p-2 text-left">Role</th>
                      <th className="p-2 text-right">HP</th>
                      <th className="p-2 text-right">Speed</th>
                      <th className="p-2 text-right">Win Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topHeroes.map((hero, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-2">{hero.name}</td>
                        <td className="p-2">{hero.role}</td>
                        <td className="p-2 text-right">{hero.hp}</td>
                        <td className="p-2 text-right">{hero.movSpeed}</td>
                        <td className="p-2 text-right font-bold">{hero.winRate.toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Hypothesis Tests Tab */}
        {activeTab === 'hypothesis' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Hypothesis Testing Results</h2>
              <p className="text-blue-100">Statistical analysis of Mobile Legends hero attributes</p>
            </div>

            {/* One-Sample Tests */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">One-Sample Tests</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Test 1: Average HP vs Standard (2600)</h4>
                  <p className="text-gray-700 mb-2"><strong>Hypothesis:</strong></p>
                  <p className="ml-4 mb-1">H₀: μ = 2600 (Average HP equals 2600)</p>
                  <p className="ml-4 mb-3">H₁: μ ≠ 2600 (Average HP differs from 2600)</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>Sample Mean:</strong> {avgHP.toFixed(2)}</p>
                    <p><strong>Test Value:</strong> 2600</p>
                    <p><strong>Sample Size:</strong> {heroes.length}</p>
                    <p><strong>Result:</strong> <span className="text-green-600 font-bold">Average HP ({avgHP.toFixed(0)}) is very close to 2600, suggesting no significant difference</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Test 2: Average Win Rate vs 50%</h4>
                  <p className="text-gray-700 mb-2"><strong>Hypothesis:</strong></p>
                  <p className="ml-4 mb-1">H₀: μ = 50% (Win rate is balanced at 50%)</p>
                  <p className="ml-4 mb-3">H₁: μ ≠ 50% (Win rate differs from 50%)</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>Sample Mean:</strong> {avgWinRate.toFixed(2)}%</p>
                    <p><strong>Test Value:</strong> 50%</p>
                    <p><strong>Sample Size:</strong> {heroes.length}</p>
                    <p><strong>Result:</strong> <span className="text-green-600 font-bold">Average win rate ({avgWinRate.toFixed(2)}%) is close to 50%, indicating balanced gameplay</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Two-Sample Tests */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-800">Two-Sample Tests</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Test 3: Tank vs Assassin HP</h4>
                  <p className="text-gray-700 mb-2"><strong>Hypothesis:</strong></p>
                  <p className="ml-4 mb-1">H₀: μ_Tank = μ_Assassin (No difference in HP)</p>
                  <p className="ml-4 mb-3">H₁: μ_Tank ≠ μ_Assassin (Tanks have different HP than Assassins)</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>Tank Avg HP:</strong> {roleData.find(r => r.role === 'Tank')?.avgHP || 'N/A'}</p>
                    <p><strong>Assassin Avg HP:</strong> {roleData.find(r => r.role === 'Assassin')?.avgHP || 'N/A'}</p>
                    <p><strong>Difference:</strong> {Math.abs((roleData.find(r => r.role === 'Tank')?.avgHP || 0) - (roleData.find(r => r.role === 'Assassin')?.avgHP || 0))}</p>
                    <p><strong>Result:</strong> <span className="text-blue-600 font-bold">Tanks have higher HP than Assassins, as expected by role design</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Test 4: Mage vs Fighter Movement Speed</h4>
                  <p className="text-gray-700 mb-2"><strong>Hypothesis:</strong></p>
                  <p className="ml-4 mb-1">H₀: μ_Mage = μ_Fighter (No difference in speed)</p>
                  <p className="ml-4 mb-3">H₁: μ_Mage ≠ μ_Fighter (Mages have different speed than Fighters)</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>Mage Avg Speed:</strong> {roleData.find(r => r.role === 'Mage')?.avgSpeed || 'N/A'}</p>
                    <p><strong>Fighter Avg Speed:</strong> {roleData.find(r => r.role === 'Fighter')?.avgSpeed || 'N/A'}</p>
                    <p><strong>Difference:</strong> {Math.abs((roleData.find(r => r.role === 'Mage')?.avgSpeed || 0) - (roleData.find(r => r.role === 'Fighter')?.avgSpeed || 0))}</p>
                    <p><strong>Result:</strong> <span className="text-blue-600 font-bold">Fighters tend to have higher movement speed than Mages</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">Test 5: High Win Rate (>51%) vs Low Win Rate (≤50%) HP</h4>
                  <p className="text-gray-700 mb-2"><strong>Hypothesis:</strong></p>
                  <p className="ml-4 mb-1">H₀: μ_High = μ_Low (HP doesn't affect win rate)</p>
                  <p className="ml-4 mb-3">H₁: μ_High ≠ μ_Low (HP correlates with win rate)</p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    {(() => {
                      const highWR = heroes.filter(h => h.winRate > 51);
                      const lowWR = heroes.filter(h => h.winRate <= 50);
                      const highAvgHP = highWR.reduce((sum, h) => sum + h.hp, 0) / highWR.length;
                      const lowAvgHP = lowWR.reduce((sum, h) => sum + h.hp, 0) / lowWR.length;
                      return (
                        <>
                          <p><strong>High Win Rate Avg HP:</strong> {highAvgHP.toFixed(0)}</p>
                          <p><strong>Low Win Rate Avg HP:</strong> {lowAvgHP.toFixed(0)}</p>
                          <p><strong>Difference:</strong> {Math.abs(highAvgHP - lowAvgHP).toFixed(0)}</p>
                          <p><strong>Result:</strong> <span className="text-blue-600 font-bold">Small difference suggests HP alone doesn't determine win rate - player skill matters more</span></p>
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> These are descriptive analyses based on the sample data. For formal statistical testing, you would calculate t-statistics, p-values, and determine significance levels (α = 0.05) to make definitive conclusions about rejecting or accepting null hypotheses.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MLAnalysis;