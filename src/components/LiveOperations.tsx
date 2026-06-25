"use client";

import React, { useState } from "react";
import { Ship, Compass, MapPin, Gauge, Wind, Navigation, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VesselData {
  id: string;
  name: string;
  type: string;
  origin: string;
  destination: string;
  cargo: string;
  speed: string;
  coordinates: string;
  weather: string;
  status: "enRoute" | "inPort";
  progress: number; // 0 to 100
}

interface LiveOperationsProps {
  dict: {
    title: string;
    subtitle: string;
    status: string;
    cargo: string;
    speed: string;
    route: string;
    weather: string;
    coordinates: string;
    origin: string;
    destination: string;
    activeVessels: string;
    enRoute: string;
    inPort: string;
    progress: string;
  };
}

export default function LiveOperations({ dict }: LiveOperationsProps) {
  const vessels: VesselData[] = [
    {
      id: "v1",
      name: "Tom Horizon",
      type: "Handysize Bulk Carrier",
      origin: "Vancouver, Canada",
      destination: "Tokyo, Japan",
      cargo: "Wheat / Grain",
      speed: "12.2 Knots",
      coordinates: "45.1023° N, 160.3412° W",
      weather: "Clear sky, Wind WNW 12kts",
      status: "enRoute",
      progress: 68,
    },
    {
      id: "v2",
      name: "Tom Voyager",
      type: "Supramax Bulk Carrier",
      origin: "Richards Bay, South Africa",
      destination: "Rotterdam, Netherlands",
      cargo: "Coal",
      speed: "11.5 Knots",
      coordinates: "18.2341° N, 15.4219° W",
      weather: "Moderate seas, Wind NE 16kts",
      status: "enRoute",
      progress: 42,
    },
    {
      id: "v3",
      name: "Tom Explorer",
      type: "Ultramax Bulk Carrier",
      origin: "Santos, Brazil",
      destination: "Shanghai, China",
      cargo: "Soybeans / Agricultural Products",
      speed: "12.8 Knots",
      coordinates: "34.1205° S, 18.3412° E",
      weather: "Heavy swell, Wind SE 24kts",
      status: "enRoute",
      progress: 28,
    },
    {
      id: "v4",
      name: "Tom Ocean",
      type: "Handysize Bulk Carrier",
      origin: "Dampier, Australia",
      destination: "Gwangyang, South Korea",
      cargo: "Iron Ore",
      speed: "0.0 Knots",
      coordinates: "34.8912° N, 127.6923° E",
      weather: "Light breeze, Calm seas",
      status: "inPort",
      progress: 100,
    },
  ];

  const [selectedId, setSelectedId] = useState("v1");
  const selectedVessel = vessels.find((v) => v.id === selectedId) || vessels[0];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-blue-600 font-bold text-xs tracking-widest uppercase flex items-center gap-1.5">
            <Navigation className="w-3.5 h-3.5 animate-pulse" /> Fleet Telemetry
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
            {dict.title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full" />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Active Vessel Selector List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1 px-1">
              {dict.activeVessels}
            </h3>
            <div className="flex flex-col gap-2.5">
              {vessels.map((vessel) => {
                const isSelected = vessel.id === selectedId;
                return (
                  <button
                    key={vessel.id}
                    onClick={() => setSelectedId(vessel.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10"
                        : "bg-white border-slate-200 hover:border-slate-300 text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Ship className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-display font-extrabold text-sm block">
                          {vessel.name}
                        </span>
                        <span className="text-xs text-slate-400 block mt-0.5">
                          {vessel.type}
                        </span>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        vessel.status === "enRoute"
                          ? isSelected
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                          : isSelected
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {vessel.status === "enRoute" ? dict.enRoute : dict.inPort}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Vessel Telemetry details (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col justify-between relative overflow-hidden">
              {/* Background grid representation */}
              <div className="absolute inset-0 opacity-2 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedVessel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 relative z-10"
                >
                  {/* Title Bar */}
                  <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="font-display font-black text-2xl text-slate-900">
                        {selectedVessel.name}
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">{selectedVessel.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                      <Compass className="w-4 h-4 text-blue-600 animate-spin-slow" />
                      <span>{selectedVessel.coordinates}</span>
                    </div>
                  </div>

                  {/* Operational Data Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Route Details */}
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex gap-3.5 items-start">
                      <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                          {dict.route}
                        </span>
                        <div className="mt-1 text-sm">
                          <span className="font-bold text-slate-800">{dict.origin}: </span>
                          <span className="text-slate-600 font-medium">{selectedVessel.origin}</span>
                        </div>
                        <div className="mt-0.5 text-sm">
                          <span className="font-bold text-slate-800">{dict.destination}: </span>
                          <span className="text-slate-600 font-medium">{selectedVessel.destination}</span>
                        </div>
                      </div>
                    </div>

                    {/* Cargo & Speed Details */}
                    <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl grid grid-cols-2 gap-4">
                      <div className="flex gap-2.5 items-start">
                        <Ship className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                            {dict.cargo}
                          </span>
                          <span className="text-sm font-semibold text-slate-800 block mt-0.5">
                            {selectedVessel.cargo}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <Gauge className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                            {dict.speed}
                          </span>
                          <span className="text-sm font-semibold text-slate-800 block mt-0.5">
                            {selectedVessel.speed}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Weather and Environment */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex gap-3 items-center">
                    <Wind className="w-5 h-5 text-blue-600" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                        {dict.weather}
                      </span>
                      <span className="text-sm font-semibold text-slate-700 block mt-0.5">
                        {selectedVessel.weather}
                      </span>
                    </div>
                  </div>

                  {/* Transit Progress Bar */}
                  <div className="pt-2">
                    <div className="flex justify-between items-center text-xs text-slate-500 font-bold mb-2">
                      <span className="uppercase tracking-wider">{dict.progress}</span>
                      <span>{selectedVessel.progress}%</span>
                    </div>
                    {/* Visual Route Timeline */}
                    <div className="relative w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-700"
                        style={{ width: `${selectedVessel.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2.5 text-xs text-slate-400 font-semibold">
                      <span>{selectedVessel.origin.split(",")[0]}</span>
                      {selectedVessel.status === "inPort" ? (
                        <span className="text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Arrived at Destination
                        </span>
                      ) : (
                        <span className="text-blue-500 animate-pulse">Sailing transit...</span>
                      )}
                      <span>{selectedVessel.destination.split(",")[0]}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
