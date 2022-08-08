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
import Signup from "./pages/Signup"
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import BrickList from "./pages/BrickList";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import { ApolloLink } from "apollo-link";

const myLink = new HttpLink({
  uri: '/graphql',
  // other link options...
});

const thirdPartyLink = new HttpLink({
  uri: 'https://api.cartql.com/',
  // other link options...
});

const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === "third-party",
    // the string "third-party" can be anything you want,
    // we will use it in a bit
    thirdPartyLink, // <= apollo will send to this if clientName is "third-party"
    myLink // <= otherwise will send to this
  )
  // other options
});

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Header />
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/bricks/:id" element={<Singlebrick />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path={`/bricklist/:id`} element={<BrickList />}/>
              </Routes>
            </div>
            <Footer />
          </StoreProvider>
          {/* <Header />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              
            </Routes>
          </div>
          <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
