import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/services/authService';
import {useNavigate} from 'react-router-dom';
const Login = () => {
  
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  //const [isLoading, setIsLoading,error] = useState(false);
const { user, isLoading ,isUserLoaded,error} = useSelector((state) => state.auth);

      const navigate=useNavigate()  
 console.log(user)
const dispact=useDispatch()

useEffect(() => {
  if(isUserLoaded){
    alert("success full log in", user)
    navigate('/UserProfile')
  }
  if(error){
    alert("error in login", error)
  }
}, [isUserLoaded,error]);


  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!emailOrPhone.trim() || !password.trim()) {
      alert('Please fill in all fields.');
      return;
    }
           dispact(login({
        emailOrPhone,
        password
    }))
  
    }


  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Navigate to forgot password page
    
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Navigate to sign up page
   
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth
    console.log('Google login');
  };

  const handleAppleLogin = () => {
    // Implement Apple OAuth
    console.log('Apple login');
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-display antialiased relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Wrapper */}
      <div className="flex flex-col items-center justify-center min-h-screen max-w-md mx-auto px-6 py-8 relative z-10">
        
        {/* Logo / Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-900 mb-4 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-4xl">
              bolt
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">VibeLinkr</h1>
          <p className="text-gray-400 mt-2 text-sm">Welcome back, vibe in.</p>
        </div>

        {/* Login Form */}
        <form className="w-full space-y-5" onSubmit={handleLogin}>
          {/* Email/Username Input */}
          <div className="group">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">
                  person
                </span>
              </div>
              <input
                id="email_or_phone"
                className="w-full bg-surface-dark text-white text-base placeholder:text-gray-500 
                         border border-white/5 rounded-full py-4 pl-12 pr-5 
                         focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary 
                         focus:shadow-[0_0_20px_rgba(122,72,229,0.15)] transition-all duration-300"
                placeholder="Email or Username"
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="group">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">
                  lock
                </span>
              </div>
              <input
                id="password"
                className="w-full bg-surface-dark text-white text-base placeholder:text-gray-500 
                         border border-white/5 rounded-full py-4 pl-12 pr-12 
                         focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary 
                         focus:shadow-[0_0_20px_rgba(122,72,229,0.15)] transition-all duration-300"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 
                         hover:text-white transition-colors focus:outline-none disabled:opacity-50"
                onClick={togglePasswordVisibility}
                disabled={isLoading}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? "visibility" : "visibility_off"}
                </span>
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end -mt-1">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-gray-400 hover:text-primary transition-colors font-medium disabled:opacity-50"
              disabled={isLoading}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-primary to-[#8b5cf6] 
                     hover:brightness-110 text-white font-bold text-lg py-4 
                     rounded-full shadow-[0_4px_20px_rgba(122,72,229,0.4)] 
                     transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              'Log In'
            )}
          </button>
        </form>

        {/* Social Login Divider */}
        <div className="w-full flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Or continue with
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Social Buttons */}
        <div className="w-full space-y-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 w-full bg-surface-dark 
                     hover:bg-[#25252a] border border-white/5 rounded-full py-3.5 
                     text-white font-medium transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={handleAppleLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 w-full bg-surface-dark 
                     hover:bg-[#25252a] border border-white/5 rounded-full py-3.5 
                     text-white font-medium transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.38-1.09-.52-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.1 2.31-.94 3.44-.8 1.43.18 2.52.88 3.19 1.93-2.52 1.44-1.97 5.09.52 6.13-.37 1.25-.89 2.53-2.23 4.91zM12.03 5.08c-.25-1.88 1.55-3.5 3.16-3.63.4 2.16-2.12 3.84-3.16 3.63z" />
            </svg>
            <span>Apple</span>
          </button>
        </div>

        {/* Footer / Sign Up Area */}
        <div className="w-full p-6 text-center mt-8">
          <p className="text-gray-400">
            Don't have an account?
            <button
              type="button"
              onClick={handleSignUp}
              className="text-primary font-bold hover:underline hover:text-[#8b5cf6] 
                       transition-colors ml-1 disabled:opacity-50"
              disabled={isLoading}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;