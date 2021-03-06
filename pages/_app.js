import "../styles/globals.css";
import { userContext } from "../component/filters/states";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setUser({
        token: localStorage.getItem("token"),
        user: {
          name: localStorage.getItem("name"),
          email: localStorage.getItem("email"),
          phone: localStorage.getItem("phone"),
          role: localStorage.getItem("role"),
          school: localStorage.getItem("school"),
        },
      });
    }
  }, []);
  return (
    <AnimatePresence>
      <userContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </userContext.Provider>
    </AnimatePresence>
  );
}

export default MyApp;
