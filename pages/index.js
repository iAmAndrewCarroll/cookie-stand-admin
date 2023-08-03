import { useState } from 'react';
import CookieStandAdmin from "@/components/CookieStandAdmin";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? <CookieStandAdmin /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}
