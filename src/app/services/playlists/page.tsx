// src/app/services/playlists/page.tsx
import { Metadata } from "next";
import PlaylistsPage from "@/PageComponents/Services/Playlists";

export const metadata: Metadata = {
  title: "Playlist Pitching | Get Featured on Spotify & Apple Music",
  description: "Professional playlist pitching to editorial and independent curators. Real relationships, honest expectations, genuine results.",
  keywords: ["playlist pitching", "spotify playlists", "music curation", "editorial playlists", "independent playlists"],
  openGraph: {
    title: "Playlist Pitching Services | LEGAL BABY",
    description: "Connect your music with the right curators",
    url: "/services/playlists",
  },
  alternates: {
    canonical: "/services/playlists",
  },
};

export default PlaylistsPage;