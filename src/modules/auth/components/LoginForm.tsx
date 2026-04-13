import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../components/form/Form';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Checkbox } from '../../../components/ui/checkbox';
import { Button } from '../../../components/ui/button';
import { APP_ROUTES } from '../../../core/routes/routes';

export default function LoginForm() {
  const navigate = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // For now, this just logs and navigates. 
    // Later, you will integrate your actual auth service/API here.
    console.log("Login form submitted!");
    navigate(APP_ROUTES.DASHBOARD.ROOT);
  };

  return (
    <Form onSubmit={handleLoginSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#020C04] font-semibold">
          Email Address
        </Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="admin@panunbazar.com" 
          required
          className="focus-visible:ring-[#49724B] border-[#D5DFCF] bg-[#F8FAF8]" 
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-[#020C04] font-semibold">
            Password
          </Label>
          <a href="#" className="text-sm font-semibold text-[#49724B] hover:text-[#2B4E31] transition-colors hover:underline">
            Forgot password?
          </a>
        </div>
        <Input 
          id="password" 
          type="password" 
          placeholder="••••••••" 
          required
          className="focus-visible:ring-[#49724B] border-[#D5DFCF] bg-[#F8FAF8]" 
        />
      </div>

      <div className="flex items-center space-x-2 pt-1 pb-4">
        <Checkbox 
          id="remember" 
          className="border-[#A3BA9C] data-[state=checked]:bg-[#49724B] data-[state=checked]:text-white data-[state=checked]:border-[#49724B]" 
        />
        <Label 
          htmlFor="remember" 
          className="text-sm font-medium leading-none text-[#132A1A]/80 cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me for 30 days
        </Label>
      </div>

      <Button type="submit" className="w-full bg-[#49724B] hover:bg-[#2B4E31] text-white font-bold py-6 text-md transition-all shadow-md hover:shadow-lg">
        Sign In to Dashboard
      </Button>
    </Form>
  );
}