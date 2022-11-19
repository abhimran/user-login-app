/* eslint-disable @typescript-eslint/no-shadow */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { auth } from '../firebase';

type ChildrenProps = {
  children: ReactNode;
};

const userAuthContext = createContext({});

export function UserAuthContextProvider({ children }: ChildrenProps) {
  const [user, setUser] = useState<any | null>({});

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signUp(email: string, password: string, name: string) {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        const { user } = res;
        await updateProfile(user, {
          displayName: name,
        });
      }
    );
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const values = useMemo(
    () => ({ user, logIn, signUp, logOut, resetPassword }),
    [user]
  );

  return (
    <userAuthContext.Provider value={values}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth(): any {
  return useContext(userAuthContext);
}
