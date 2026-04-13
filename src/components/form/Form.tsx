import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, className = '', onSubmit, ...props }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default browser page reload on submit
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`w-full ${className}`} 
      {...props}
    >
      {children}
    </form>
  );
}