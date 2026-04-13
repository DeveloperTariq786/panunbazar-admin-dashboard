import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import AuthHeader from '../../modules/auth/components/AuthHeader';
import LoginForm from '../../modules/auth/components/LoginForm';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF8] px-4">
      <Card className="w-full max-w-md shadow-xl border border-[#D5DFCF]/50 bg-white pt-6 pb-2">
        <AuthHeader />
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}