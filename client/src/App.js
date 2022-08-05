import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './components/About'

const httpLink = createHttpLink({
  uri: '/graphql',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloClient client={client}>
      <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            
            <Footer />
          </div>
      </Router>
    </ApolloClient>
  );
}

export default App;
