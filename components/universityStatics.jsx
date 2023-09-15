"use client"
import React from 'react';
import { BarChart4,GraduationCap } from 'lucide-react';
import { useState,useEffect } from 'react';
const UniversityStatistics = () => {
  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(counter <7645){
        setCounter((prevCount)=>prevCount +10)
      } else {
        clearInterval(interval)
      }
    },1);
    return ()=>clearInterval(interval)
  },[counter])
  return (
    <section  className="global_bg py-8 px-10 rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">مخطط احصائيات الجامعة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="global_bg p-4 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <BarChart4 className="w-6 h-6 text-white font-bold mr-2" />
            <div>
              <p className="text-white font-semibold">عدد طلاب الجامعة</p>
              <p className=" text-slate-300">{`${counter+233}`}</p>
            </div>
          </div>
          <div className="global_bg p-4 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <BarChart4 className="w-6 h-6 text-white font-bold mr-2" />
            <div>
              <p className="text-white font-semibold">طلاب الدراسات العليا</p>
              <p className="text-slate-300">{counter-200}</p>
            </div>
          </div>
          <div className="global_bg p-4 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <GraduationCap className="w-6 h-6 text-white font-bold mr-2" />
            <div>
              <p className="text-white font-semibold">خريجو الجامعة</p>
              <p className="text-slate-300">{counter}</p>
            </div>
          </div>
          <div className="global_bg p-4 border-2 transform hover:scale-105 border-white flex items-center rounded-lg shadow-md">
            <GraduationCap className="w-6 h-6 text-white font-bold mr-2" />
            <div>
              <p className="text-white font-semibold">خريجو الدراسات العليا</p>
              <p className="text-slate-300">{counter-1000}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UniversityStatistics;