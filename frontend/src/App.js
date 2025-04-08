import "./App.css";
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import Movie from './pages/Movie';
import TVShow from './pages/TVShow';
import All from './pages/All';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Box, Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "@mui/icons-material";
import Profile from "./pages/Profile";
import ProfileSummary from "./components/ProfileSummary";

const App = () => {
  return (
    <Router>
      <Stack sx={{ minHeight: '100vh'}}>
        <Navbar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/all" element={<All />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tvshow/:id" element={<TVShow />} />
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </Router>

  );
}

export default App;
