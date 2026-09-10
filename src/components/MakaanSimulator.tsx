import React, { useState } from 'react';
import { Sparkles, Sun, Wind, Music, Eye, CheckCircle2, RotateCcw, Volume2, ShieldCheck } from 'lucide-react';

const PRESETS = [
  {
    label: "I want a relaxing evening",
    intentText: "I want a relaxing evening after work",
    detectedContext: "Evening (8:30 PM) • High fatigue detected • Ambient temp 31°C",
    suggestedActions: {
      lighting: { state: true, value: "Warm Dim (2700K @ 30%)", label: "Living Room Lights" },
      climate: { state: true, value: "24°C WindFree™ Comfort", label: "Living Room AC" },
      music: { state: true, value: "Soft Instrumental & Ambient", label: "Surround Audio" },
      curtains: { state: true, value: "Motorized Closed (100%)", label: "Window Drapes" },
      airPurifier: { state: true, value: "Whisper Clean Active", label: "Air Purifier" }
    }
  },
  {
    label: "Make home ready when I arrive",
    intentText: "Heading back from office, get the living room ready",
    detectedContext: "Commute in progress • Estimated arrival 18 mins • High outdoor PM2.5",
    suggestedActions: {
      lighting: { state: true, value: "Pathway Welcome Mode", label: "Living Room Lights" },
      climate: { state: true, value: "Pre-cool to 23°C", label: "Living Room AC" },
      music: { state: false, value: "Paused until door unlocks", label: "Surround Audio" },
      curtains: { state: true, value: "Closed for thermal insulation", label: "Window Drapes" },
      airPurifier: { state: true, value: "Turbo Rapid Purify", label: "Air Purifier" }
    }
  },
  {
    label: "I want to save energy",
    intentText: "Optimize power consumption across the house today",
    detectedContext: "Peak tariff hours (2 PM – 6 PM) • Rooms unoccupied",
    suggestedActions: {
      lighting: { state: false, value: "Natural daylight sensor active", label: "Living Room Lights" },
      climate: { state: true, value: "Eco Mode 26°C with inverter AI", label: "Living Room AC" },
      music: { state: false, value: "Standby zero watt", label: "Surround Audio" },
      curtains: { state: true, value: "Closed to block solar glare", label: "Window Drapes" },
      airPurifier: { state: true, value: "Auto low-power cycle", label: "Air Purifier" }
    }
  }
];

export const MakaanSimulator: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [actions, setActions] = useState(PRESETS[0].suggestedActions);
  const [isExecuted, setIsExecuted] = useState(false);
  const [customInput, setCustomInput] = useState('');

  const currentPreset = PRESETS[activePresetIndex];

  const handleSelectPreset = (index: number) => {
    setActivePresetIndex(index);
    setActions(PRESETS[index].suggestedActions);
    setIsExecuted(false);
  };

  const toggleAction = (key: keyof typeof actions) => {
    setActions((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        state: !prev[key].state,
      },
    }));
  };

  return (
    <div className="bg-gradient-to-br from-stone-900 via-[#161B26] to-stone-900 text-white rounded-2xl p-6 md:p-10 border border-white/10 shadow-2xl my-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
              Interactive Prototype Experience
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Project Makaan: Intent-First Conversational Layer
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Experience how Makaan translates human needs into multi-device actions without app fatigue.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
            Connected to SmartThings
          </span>
        </div>
      </div>

      {/* Preset Intent Buttons */}
      <div className="my-6">
        <label className="block font-mono text-xs uppercase tracking-widest text-stone-400 mb-2.5">
          Select or Express Intent:
        </label>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset, idx) => (
            <button
              key={preset.label}
              onClick={() => handleSelectPreset(idx)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activePresetIndex === idx
                  ? 'bg-rose-900/80 text-rose-100 border border-rose-500/50 shadow-md shadow-rose-950/50'
                  : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/10'
              }`}
            >
              “{preset.label}”
            </button>
          ))}
        </div>
      </div>

      {/* Step by Step Simulation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Input & AI Understanding (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Step 1: User Expresses Intent */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest">
                Stage 01 • Human Intent
              </span>
              <span className="font-mono text-[10px] text-stone-500">Voice / Text</span>
            </div>
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-sm font-medium text-stone-100 italic">
              “{currentPreset.intentText}”
            </div>
          </div>

          {/* Step 2: Makaan Understands Context */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest">
                Stage 02 • Context &amp; Mood Engine
              </span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-mono bg-indigo-950/30 p-2.5 rounded border border-indigo-500/20">
              {currentPreset.detectedContext}
            </p>
          </div>

          {/* Continuous Loop Note */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-400 leading-relaxed">
              <span className="font-semibold text-stone-200 block mb-0.5">Privacy &amp; Continuous Learning</span>
              Makaan operates on-device and respects habits, learning your routines without exposing personal data.
            </div>
          </div>
        </div>

        {/* Right: Stage 3 & 4: Suggested Actions & Confirmation (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest block">
                  Stage 03 &amp; 04 • Suggested Device Adaptations
                </span>
                <span className="text-sm font-semibold text-stone-100">
                  Review &amp; Personalize Before Execution
                </span>
              </div>
              <span className="font-mono text-xs text-stone-400">
                {Object.values(actions).filter((a) => a.state).length} / 5 Active
              </span>
            </div>

            {/* Device Action List */}
            <div className="space-y-2.5">
              {/* Climate */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${actions.climate.state ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/5 text-stone-500'}`}>
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-200">
                      {actions.climate.label}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {actions.climate.value}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleAction('climate')}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    actions.climate.state ? 'bg-cyan-500 text-black font-semibold' : 'bg-white/10 text-stone-400'
                  }`}
                >
                  {actions.climate.state ? 'Enabled' : 'Bypassed'}
                </button>
              </div>

              {/* Lighting */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${actions.lighting.state ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-stone-500'}`}>
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-200">
                      {actions.lighting.label}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {actions.lighting.value}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleAction('lighting')}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    actions.lighting.state ? 'bg-amber-500 text-black font-semibold' : 'bg-white/10 text-stone-400'
                  }`}
                >
                  {actions.lighting.state ? 'Enabled' : 'Bypassed'}
                </button>
              </div>

              {/* Curtains */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${actions.curtains.state ? 'bg-purple-500/20 text-purple-300' : 'bg-white/5 text-stone-500'}`}>
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-200">
                      {actions.curtains.label}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {actions.curtains.value}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleAction('curtains')}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    actions.curtains.state ? 'bg-purple-500 text-white font-semibold' : 'bg-white/10 text-stone-400'
                  }`}
                >
                  {actions.curtains.state ? 'Enabled' : 'Bypassed'}
                </button>
              </div>

              {/* Music */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-black/30 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-md ${actions.music.state ? 'bg-rose-500/20 text-rose-300' : 'bg-white/5 text-stone-500'}`}>
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-200">
                      {actions.music.label}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {actions.music.value}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleAction('music')}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    actions.music.state ? 'bg-rose-500 text-white font-semibold' : 'bg-white/10 text-stone-400'
                  }`}
                >
                  {actions.music.state ? 'Enabled' : 'Bypassed'}
                </button>
              </div>
            </div>
          </div>

          {/* Execution Button / Feedback */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              {isExecuted ? (
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Home environment adjusted in 1 tap (Saved 9 manual steps)
                </span>
              ) : (
                <span>Stage 05 &amp; 06: Apply coordinated environment</span>
              )}
            </div>

            <button
              onClick={() => setIsExecuted(true)}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-white hover:bg-stone-200 text-stone-900 font-semibold text-xs uppercase font-mono tracking-widest transition-all shadow-lg hover:shadow-white/20"
            >
              {isExecuted ? 'Settings Applied ✓' : 'Confirm & Execute'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
