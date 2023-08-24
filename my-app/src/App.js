import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from 'react-router-dom';
import HomePage from './Elements/HomePage';
import AboutUsPages from './Elements/AboutUsPages';
import AIMatchPage from './Elements/AIMatchPage';



const Home = () => <div>Home Page</div>;
const AIMatch = () => <div>AI Match Page</div>;
const Community = () => <div>Community Page</div>;
const AboutUs = () => <div>About Us Page</div>;
const Login = () => <div>Login Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/ai-match" element={<AIMatchPage/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/about-us" element={<AboutUsPages/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;