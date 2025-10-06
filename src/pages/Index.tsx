import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import InfoSections from "@/components/InfoSections";
import Footer from "@/components/Footer";
import InvitationPopup from "@/components/InvitationPopup";

const Index = () => {
  const location = useLocation();
  const [invitationId, setInvitationId] = useState<string | null>(null);

  useEffect(() => {
    // Obtener el parámetro de invitación de la URL
    const params = new URLSearchParams(location.search);
    const invitationParam = params.get('invitation');
    
    if (invitationParam) {
      setInvitationId(invitationParam);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Hero />
      <Countdown />
      <Timeline />
      <Location />
      {/*<Gallery /> */}
      <InfoSections />
      <RSVP />
      <Footer />
      
      {/* Mostrar el pop-up de invitación si hay un ID de invitación */}
      {invitationId && <InvitationPopup invitationId={invitationId} />}
    </div>
  );
};

export default Index;
