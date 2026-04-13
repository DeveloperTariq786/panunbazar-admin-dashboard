import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '../../../components/ui/card';

export default function AuthHeader() {
  return (
    <CardHeader className="space-y-2 text-center pb-6">
      <div className="flex justify-center mb-2">
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-[#020C04]">Panun</span><span className="text-[#49724B]">Bazar</span>
        </div>
      </div>
      <CardTitle className="text-2xl font-bold text-[#020C04]">Admin Dashboard</CardTitle>
      <CardDescription className="text-[#132A1A]/70 font-medium">
        Enter your credentials to access your store
      </CardDescription>
    </CardHeader>
  );
}