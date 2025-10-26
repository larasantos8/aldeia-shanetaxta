"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Playlist() {
  const isMobile = useIsMobile();

  return (
    <iframe 
      style={{ borderRadius: '12px', border: '0px' }} 
      src="https://open.spotify.com/embed/artist/7dsxRtDSfhTAXXs8dg001F?utm_source=generator&theme=0" 
      width="100%" 
      height={isMobile ? "152" : "352"} 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
    </iframe>
  )
}
