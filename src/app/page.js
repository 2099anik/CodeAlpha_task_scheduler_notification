"use client"


// pages/index.js (or any client-side page)

import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import Link from 'next/link';
import {useRouter} from 'next/navigation'



const firebaseConfig = {
  apiKey: "AIzaSyAGj0_nr0Yz8EsGWd0T6Jkmr2zxvOy58K8",
  authDomain: "task-notification-ee6e8.firebaseapp.com",
  projectId: "task-notification-ee6e8",
  storageBucket: "task-notification-ee6e8.appspot.com",
  messagingSenderId: "632522449844",
  appId: "1:632522449844:web:f7db3141845bdac49108e1",
  measurementId: "G-TJGS67JHKW"
};

function HomePage() {

  const router = useRouter();
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const app = initializeApp(firebaseConfig);
          const messaging = getMessaging(app);

          getToken(messaging, {
            vapidKey: "BOaHpu32z7PsY4RwahRFMgTYnLZtjY3PV3Df1JTDdAKDLO5Qb9nSNAvzjX_NipukZzwdg-zrGRPtALCWAcsmJJY",
          }).then((currentToken) => {
            if (currentToken) {
              console.log("Current FCM Token:", currentToken);
            } else {
              console.log("Unable to get FCM token");
            }
          }).catch((error) => {
            console.error("Error getting FCM token:", error);
          });
        } else {
          console.log("Do not have permission!");
        }
      });
    } else {
      console.log("Notification API not supported.");
    }
  }, []);

  return (
    <div>
      <h2>task scheduler</h2>
      <div><button onClick={()=>router.push("/Task")}>add task</button></div>
    </div>
  );
}

export default HomePage;


