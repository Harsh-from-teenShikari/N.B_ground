import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { GalleryPage } from "./pages/GalleryPage.jsx";
import { GroundBookingPage } from "./pages/GroundBookingPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { PlayerDashboardPage } from "./pages/PlayerDashboardPage.jsx";
import { TournamentsPage } from "./pages/TournamentsPage.jsx";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/player-dashboard" element={<PlayerDashboardPage />} />
        <Route path="/ground-booking" element={<GroundBookingPage />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AppLayout>
  );
}
