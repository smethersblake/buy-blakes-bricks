import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Login  from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="text-3xl font-bold underline">
        Hello World!
       </h1>
      </header>
    </div>
  );
}

export default App;
