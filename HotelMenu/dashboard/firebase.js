import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqB7NXuoL7l01X5t3cg-gdZJS1pFRrhjg",
  authDomain: "hotelmenupro.firebaseapp.com",
  projectId: "hotelmenupro",
  appId: "1:638142341064:web:ba85fdc6fc455d8aadeafd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../login/index.html";
  }
});

window.logoutUser = () => {
  signOut(auth).then(() => {
    window.location.href = "../login/index.html";
  });
};
