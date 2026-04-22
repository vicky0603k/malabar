// Runwal Malabar — Ultra-Luxury Landing Page
// Each section is isolated in its own component file under src/components/runwal/sections/
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles   from '@/components/runwal/GlobalStyles';
import Preloader      from '@/components/runwal/sections/Preloader';
import Navigation     from '@/components/runwal/sections/Navigation';
import HeroSection    from '@/components/runwal/sections/HeroSection';
import LegacySection  from '@/components/runwal/sections/LegacySection';
import AddressSection from '@/components/runwal/sections/AddressSection';
import LocationSection from '@/components/runwal/sections/LocationSection';
import MetricsSection from '@/components/runwal/sections/MetricsSection';
import PanoramaSection from '@/components/runwal/sections/PanoramaSection';
import MansionsSection from '@/components/runwal/sections/MansionsSection';
import ScaleSection   from '@/components/runwal/sections/ScaleSection';
import ArrivalSection from '@/components/runwal/sections/ArrivalSection';
import LobbySection   from '@/components/runwal/sections/LobbySection';
import ParkingSection from '@/components/runwal/sections/ParkingSection';
import RaritySection  from '@/components/runwal/sections/RaritySection';
import EnquirySection from '@/components/runwal/sections/EnquirySection';
import Footer         from '@/components/runwal/sections/Footer';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <GlobalStyles />

      {/* Preloader */}
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* Page */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <Navigation ready={loaded} />

        {/* S1 — Hero */}
        <HeroSection ready={loaded} />

        {/* S2 — Legacy */}
        <LegacySection />

        {/* S3 — Power Address */}
        <AddressSection />

        {/* S4 — Location / Map */}
        <LocationSection />

        {/* S5 — Skyline Metrics */}
        <MetricsSection />

        {/* S6 — Panorama */}
        <PanoramaSection />

        {/* S7 — Private Mansions */}
        <MansionsSection />

        {/* S8 — Scale */}
        <ScaleSection />

        {/* S9 — Arrival */}
        <ArrivalSection />

        {/* S10 — Lobby */}
        <LobbySection />

        {/* S11 — Parking Vault */}
        <ParkingSection />

        {/* S12 — Rarity Statement */}
        <RaritySection />

        {/* S13 — Enquiry */}
        <EnquirySection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
