import React, { useState } from 'react';
import { GALAXY_CMF_DATA } from '../data/portfolioData';
import { Copy, Check, Lock, Sparkles, Layers } from 'lucide-react';

export const CmfColorExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'aSeries' | 'mfSeries'>('aSeries');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const aPalettes = GALAXY_CMF_DATA.galaxyASeries.palettes;
  const mSeries = GALAXY_CMF_DATA.galaxyMFSeries.mSeries;
  const fSeries = GALAXY_CMF_DATA.galaxyMFSeries.fSeries;
  const matrix = GALAXY_CMF_DATA.galaxyMFSeries.candidateMatrix;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-[#0E1322] text-stone-100 rounded-2xl p-6 md:p-10 border border-white/10 my-12 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold">
              Interactive CMF Palette System
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            2026 Emerging Color Narratives &amp; Pantone Specifications
          </h3>
          <p className="text-stone-400 text-xs md:text-sm mt-1">
            Sourced directly from Samsung Galaxy CMF design research and trend forecasts.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex rounded-lg bg-white/5 p-1 border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('aSeries')}
            className={`px-4 py-2 rounded-md text-xs font-mono tracking-wider transition-all ${
              activeTab === 'aSeries'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Galaxy A Series
          </button>
          <button
            onClick={() => setActiveTab('mfSeries')}
            className={`px-4 py-2 rounded-md text-xs font-mono tracking-wider transition-all ${
              activeTab === 'mfSeries'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            Galaxy M &amp; F Series
          </button>
        </div>
      </div>

      {/* Galaxy A Series View */}
      {activeTab === 'aSeries' && (
        <div className="mt-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 gap-3">
            <div>
              <span className="font-mono text-xs text-purple-300 uppercase tracking-widest block">
                Concept Umbrella: Gently Pleasant
              </span>
              <p className="text-xs text-stone-400 mt-0.5">
                Soft brights that evoke calm confidence and effortless charm. Tone-on-tone glass gloss and metal finishes.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>{GALAXY_CMF_DATA.galaxyASeries.ndaNotice}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aPalettes.map((palette) => (
              <div
                key={palette.name}
                className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-purple-400 uppercase tracking-wider">
                      {palette.category}
                    </span>
                    <div className="flex gap-1 text-[10px] text-stone-400 font-mono">
                      {palette.references.slice(0, 2).map((ref) => (
                        <span key={ref} className="px-1.5 py-0.5 rounded bg-white/5">
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {palette.name}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    {palette.desc}
                  </p>
                </div>

                {/* Swatches */}
                <div className="space-y-2.5 pt-3 border-t border-white/10">
                  {palette.swatches.map((swatch) => (
                    <div
                      key={swatch.name + swatch.model}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/5 group hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-md shadow-inner border border-white/20 shrink-0"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white font-mono">
                              {swatch.model}
                            </span>
                            <span className="text-xs text-stone-300 truncate max-w-[140px] sm:max-w-[180px]">
                              {swatch.name}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-stone-400 block truncate max-w-[180px]">
                            {swatch.pantone}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy(swatch.pantone)}
                        className="p-2 rounded bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-all text-xs flex items-center gap-1 font-mono"
                        title="Copy Pantone specification"
                      >
                        {copiedCode === swatch.pantone ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Galaxy M & F Series View */}
      {activeTab === 'mfSeries' && (
        <div className="mt-8 space-y-8">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <span className="font-mono text-xs text-purple-300 uppercase tracking-widest block">
              Concept Umbrella: Uplifted Brilliance
            </span>
            <p className="text-xs text-stone-400 mt-1 leading-relaxed">
              {GALAXY_CMF_DATA.galaxyMFSeries.conceptDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Galaxy M Series */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-rose-400 uppercase tracking-wider">
                  Galaxy M Series
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-mono">
                  Lively Luxe
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Linear Patterns &amp; Energetic Tones
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {mSeries.desc} {mSeries.patternConcept}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {mSeries.keyColors.map((color) => (
                  <div
                    key={color.code}
                    className="p-2.5 rounded-lg bg-black/40 border border-white/5"
                  >
                    <div
                      className="w-full h-8 rounded mb-2 border border-white/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="block font-mono text-[10px] text-white font-bold truncate">
                      {color.code}
                    </span>
                    <span className="block text-[10px] text-stone-400 truncate">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Galaxy F Series */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                  Galaxy F Series
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                  Radiant Flair
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Rhythm of Waves &amp; Accessory Glaze
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {fSeries.desc} {fSeries.patternConcept}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {fSeries.keyColors.map((color) => (
                  <div
                    key={color.code}
                    className="p-2.5 rounded-lg bg-black/40 border border-white/5"
                  >
                    <div
                      className="w-full h-8 rounded mb-2 border border-white/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="block font-mono text-[10px] text-white font-bold truncate">
                      {color.code}
                    </span>
                    <span className="block text-[10px] text-stone-400 truncate">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Master Candidate Matrix Table */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 overflow-x-auto">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-purple-400" />
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                2026 Master Color Candidates Matrix (Slide 48)
              </h4>
            </div>

            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-stone-400">
                  <th className="py-2 pr-4">Series / Tier</th>
                  <th className="py-2 px-4">Finish</th>
                  <th className="py-2 px-4">Core</th>
                  <th className="py-2 px-4">Neutral</th>
                  <th className="py-2 px-4">Trendy</th>
                  <th className="py-2 pl-4">Special</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-stone-200">
                {matrix.mSeries.map((row) => (
                  <tr key={row.model} className="hover:bg-white/5">
                    <td className="py-2.5 pr-4 font-bold text-rose-300">{row.model} (M Series)</td>
                    <td className="py-2.5 px-4 text-stone-400">{row.finish}</td>
                    <td className="py-2.5 px-4">{row.core}</td>
                    <td className="py-2.5 px-4 text-stone-400">{row.neutral}</td>
                    <td className="py-2.5 px-4">{row.trendy}</td>
                    <td className="py-2.5 pl-4 text-stone-500">—</td>
                  </tr>
                ))}
                {matrix.fSeries.map((row) => (
                  <tr key={row.model} className="hover:bg-white/5">
                    <td className="py-2.5 pr-4 font-bold text-emerald-300">{row.model} (F Series)</td>
                    <td className="py-2.5 px-4 text-stone-400">{row.finish}</td>
                    <td className="py-2.5 px-4">{row.core}</td>
                    <td className="py-2.5 px-4 text-stone-500">—</td>
                    <td className="py-2.5 px-4">{row.trendy}</td>
                    <td className="py-2.5 pl-4 text-purple-300">{row.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
