'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { Auth } from 'firebase/auth';

interface FirebaseContextProps {
  app: FirebaseApp | null;
  db: Firestore | null;
  auth: Auth | null;
}

const FirebaseContext = createContext<FirebaseContextProps>({
  app: null,
  db: null,
  auth: null,
});

export const useFirebase = () => useContext(FirebaseContext);
export const useFirebaseApp = () => useFirebase().app;
export const useFirestore = () => useFirebase().db!;
export const useAuth = () => useFirebase().auth;

export const FirebaseProvider = ({
  children,
  app,
  db,
  auth,
}: {
  children: ReactNode;
  app: FirebaseApp;
  db: Firestore;
  auth: Auth;
}) => {
  return (
    <FirebaseContext.Provider value={{ app, db, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
