import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./sign-in/sign-inpage";
import Home_page from "./Home_page/Home_page";
import Search from "./components/Search.jsx/Search";
import View from "./components/Watch_list/view";
import SignupPage from "./Signup form/Signup_page";
import TotalSignup_form from "./Signup form/totalfomsignup";
import Charcters from "./components/characters/characters";
export const Usercontext = createContext();
export const emailset=createContext();
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [email,setemail]=useState("");
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });

  useEffect(() => {
    console.log("Search value state:", searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetch("https://mocki.io/v1/429942b7-caa8-4734-a0e2-ff3dcf2d0e7f")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const addToWatchlist = (movie) => {
    const isAlreadyInWatchlist = watchlist.some((item) => item.id === movie.id);

    if (!isAlreadyInWatchlist) {
      setWatchlist((prevWatchlist) => {
        const newWatchlist = [...prevWatchlist, movie];
        localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
        return newWatchlist;
      });
    }
  };

  const removeFromWatchlist = (movieToRemove) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter(
        (movie) => movie.id !== movieToRemove.id
      );
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const router = createBrowserRouter([
    { path: "/", element: <SignInPage /> },
    {
      path: "/home",
      element: (
        <Home_page
          name={movies}
          watchlist={watchlist}
          addToWatchlist={addToWatchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
      ),
    },
    {
      path: "/search",
      element: (
        <Search
          setSearchValue={setSearchValue}
          movielist={movies}
          entered={searchValue}
        />
      ),
    },
    {
      path: "/mylist",
      element: (
        <View
          watchlist1={watchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
      ),
    },
    { path: "/signup", element: <SignupPage /> },
    { path: "/form", element: <TotalSignup_form /> },
    { path: "/characters", element: <Charcters /> },
  ]);

  return (
    <emailset.Provider value={[email,setemail]} >
    <Usercontext.Provider value={movies}>
      <RouterProvider router={router} />
    </Usercontext.Provider>
    </emailset.Provider>
  );
};

export default App;
