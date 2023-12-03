importScripts('https://www.gstatic.com/firebasejs/9.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAGj0_nr0Yz8EsGWd0T6Jkmr2zxvOy58K8",
    authDomain: "task-notification-ee6e8.firebaseapp.com",
    projectId: "task-notification-ee6e8",
    storageBucket: "task-notification-ee6e8.appspot.com",
    messagingSenderId: "632522449844",
    appId: "1:632522449844:web:f7db3141845bdac49108e1",
    measurementId: "G-TJGS67JHKW"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
