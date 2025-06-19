import { useContext, createContext, useState, useEffect, ReactNode } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { setSessionCookie } from "@/lib/actions/auth.action";


type AuthContextType = {
  user: any ;
  isEmailVerified:boolean;
  googleSignIn: () => void;
  logOut: () => void;
}
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>();


  const logOut = () => {
    signOut(auth);
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      //console.log(idToken);
      
      await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: result.user.uid,
          name: result.user.displayName ?? "Unknown",
          email: result.user.email ?? "Unknown",
        }),
      });
      
  } catch(error){
    //console.log(error,'Google sign in error');
  }
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};