// Runwal Malabar — Ultra-Luxury Cinematic Landing Page
// Total redesign: every section is a unique editorial composition
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import GlobalStyles    from '@/components/runwal/GlobalStyles';
import Preloader       from '@/components/runwal/sections/Preloader';
import Navigation      from '@/components/runwal/sections/Navigation';
import HeroSection     from '@/components/runwal/sections/HeroSection';
import LegacySection   from '@/components/runwal/sections/LegacySection';
import AddressSection  from '@/components/runwal/sections/AddressSection';
import LocationSection from '@/components/runwal/sections/LocationSection';
import MetricsSection  from '@/components/runwal/sections/MetricsSection';
import PanoramaSection from '@/components/runwal/sections/PanoramaSection';
import MansionsSection from '@/components/runwal/sections/MansionsSection';
import ScaleSection    from '@/components/runwal/sections/ScaleSection';
import ArrivalSection  from '@/components/runwal/sections/ArrivalSection';
import LobbySection    from '@/components/runwal/sections/LobbySection';
import ParkingSection  from '@/components/runwal/sections/ParkingSection';
import RaritySection   from '@/components/runwal/sections/RaritySection';
import EnquirySection  from '@/components/runwal/sections/EnquirySection';
import Footer          from '@/components/runwal/sections/Footer';

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <GlobalStyles />

      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 0.2s' }}>
        <Navigation ready={loaded} />
        <HeroSection ready={loaded} />
        <LegacySection />
        <AddressSection />
        <LocationSection />
        <MetricsSection />
        <PanoramaSection />
        <MansionsSection />
        <ScaleSection />
        <ArrivalSection />
        <LobbySection />
        <ParkingSection />
        <RaritySection />
        <EnquirySection />
        <Footer />
      </div>
    </>
  );
}
