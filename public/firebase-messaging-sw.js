// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
// import { onBackgroundMessage } from "firebase/messaging/sw";
// // import { onMessage } from "firebase/messaging";
// // import { toast } from "react-toastify";
// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyCtBI1WgFnKleFr4JDati_fg1O4hlVeg3U",
//   authDomain: "daitgym.firebaseapp.com",
//   projectId: "daitgym",
//   storageBucket: "daitgym.appspot.com",
//   messagingSenderId: "951645079216",
//   appId: "1:951645079216:web:1cdd81bf9aa6c3355b5d75",
//   measurementId: "G-T1N80KD5X8",
// });

// const messaging = getMessaging(firebaseApp);
// // onMessage(messaging, (payload) => {
// //   toast.success(`${payload.notification?.body}`, payload);
// //   // ...
// // });
// onBackgroundMessage(messaging, (payload) => {
//   console.log("Received background message ", payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: "/firebase-logo.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
// /public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCtBI1WgFnKleFr4JDati_fg1O4hlVeg3U",
  authDomain: "daitgym.firebaseapp.com",
  projectId: "daitgym",
  storageBucket: "daitgym.appspot.com",
  messagingSenderId: "951645079216",
  appId: "1:951645079216:web:1cdd81bf9aa6c3355b5d75",
  measurementId: "G-T1N80KD5X8",
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
