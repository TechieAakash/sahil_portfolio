import React, { useState } from 'react';
import { SNEAKER_CARE_DATA } from '../data/portfolioData';
import { Check, Info, Share2, Bookmark, Droplets, Thermometer, RotateCw, Wind } from 'lucide-react';

export const SneakerMaterialGuide: React.FC = () => {
  const materials = SNEAKER_CARE_DATA.materials;
  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState(0);
  const [savedCycles, setSavedCycles] = useState<string[]>(['My White Leather Care']);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const currentMaterial = materials[selectedMaterialIndex];

  const handleSaveCycle = () => {
    const cycleName = `${currentMaterial.name} Custom Care`;
    if (!savedCycles.includes(cycleName)) {
      setSavedCycles([...savedCycles, cycleName]);
    }
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-6 md:p-10 my-12 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-700 font-semibold block mb-1">
            Interactive Care Guide Simulator
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-stone-900">
            Intelligent Material-Aware Washing Engine
          </h3>
          <p className="text-stone-600 text-xs md:text-sm mt-1">
            Bridging Gen-Z sneaker passion with specialized care recipes tailored to delicate materials.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-medium">
            5 Material Classes
          </span>
        </div>
      </div>

      {/* Material Selector Tabs */}
      <div className="my-6">
        <label className="block font-mono text-xs uppercase tracking-widest text-stone-500 mb-3">
          Select Sneaker Upper Material:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {materials.map((mat, idx) => (
            <button
              key={mat.name}
              onClick={() => setSelectedMaterialIndex(idx)}
              className={`p-3 rounded-xl text-left border transition-all ${
                selectedMaterialIndex === idx
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
              }`}
            >
              <span className="block font-semibold text-xs md:text-sm mb-1">
                {mat.name}
              </span>
              <span className={`block font-mono text-[10px] ${selectedMaterialIndex === idx ? 'text-stone-300' : 'text-stone-500'}`}>
                {mat.motion} • {mat.temp}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Breakdown Card */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-stone-100 gap-2">
          <div>
            <h4 className="text-lg font-bold text-stone-900">
              {currentMaterial.name} Recommended Parameters
            </h4>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              {currentMaterial.care}
            </p>
          </div>

          <button
            onClick={handleSaveCycle}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-wider transition-all self-start sm:self-auto"
          >
            {saveSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Saved to App!
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5" />
                Save Custom Cycle
              </>
            )}
          </button>
        </div>

        {/* Specs Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 text-stone-500 mb-1">
              <Thermometer className="w-4 h-4 text-emerald-700" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Water Temp</span>
            </div>
            <span className="text-base font-bold text-stone-900 font-mono">
              {currentMaterial.temp}
            </span>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 text-stone-500 mb-1">
              <RotateCw className="w-4 h-4 text-emerald-700" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Wash Motion</span>
            </div>
            <span className="text-base font-bold text-stone-900 font-mono">
              {currentMaterial.motion}
            </span>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 text-stone-500 mb-1">
              <Droplets className="w-4 h-4 text-emerald-700" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Spin / Soak</span>
            </div>
            <span className="text-base font-bold text-stone-900 font-mono">
              {currentMaterial.spin} ({currentMaterial.soak})
            </span>
          </div>

          <div className="p-4 rounded-lg bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 text-stone-500 mb-1">
              <Wind className="w-4 h-4 text-emerald-700" />
              <span className="font-mono text-[11px] uppercase tracking-wider">Drying</span>
            </div>
            <span className="text-base font-bold text-stone-900 font-mono">
              {currentMaterial.drying}
            </span>
          </div>
        </div>

        {/* Advisory footnote */}
        <div className="mt-5 p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-3">
          <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-950 leading-relaxed">
            <strong>Care Advisory:</strong> Combine with specialized mesh sneaker bag to protect drum balance and prevent upper scuffs. Laces should be washed detached.
          </p>
        </div>
      </div>
    </div>
  );
};
