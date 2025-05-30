
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserPlus, Mail, Lock } from 'lucide-react';

export const AuthButtons = ({ variant = "default" as "default" | "footer" }) => {
  const [isLoginView, setIsLoginView] = React.useState(true);

  const toggleView = () => setIsLoginView(!isLoginView);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic will be implemented here after Supabase integration
  };

  const buttonClass = variant === "footer" ? "text-gray-400 hover:text-white" : "";

  return (
    <div className="flex items-center gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={variant === "footer" ? "ghost" : "default"}
            className={buttonClass}
            size="sm"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isLoginView ? 'Login' : 'Sign Up'}</DialogTitle>
            <DialogDescription>
              {isLoginView
                ? 'Enter your credentials to access your account'
                : 'Create a new account to get started'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              {isLoginView ? 'Login' : 'Sign Up'}
            </Button>
            <div className="text-center">
              <button
                type="button"
                onClick={toggleView}
                className="text-sm text-primary hover:underline"
              >
                {isLoginView
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Login"}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={variant === "footer" ? "ghost" : "outline"}
            className={`${buttonClass} ${variant !== "footer" ? "border-gray-500 hover:border-gray-600" : ""}`}
            size="sm"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Sign Up
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign Up</DialogTitle>
            <DialogDescription>
              Create a new account to get started
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

