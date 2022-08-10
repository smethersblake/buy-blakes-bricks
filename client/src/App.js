import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Singlebrick from "./pages/Singlebrick";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Confirm from "./components/Confirm"
import BrickList from "./pages/BrickList";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex flex-col min-h-screen bg-slate-200'>
          <StoreProvider>
            <Header />
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/about' element={<About />} />
                <Route path='/bricks/:id' element={<Singlebrick />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/confirm' element={<Confirm />} />
                <Route path={`/bricklist/:id`} element={<BrickList />} />
              </Routes>
            </div>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
