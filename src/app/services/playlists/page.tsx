// src/app/services/playlists/page.tsx
import PlaylistsPage from "@/PageComponents/Services/Playlists";
import { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Playlist Pitching - Get Your Music on Spotify & Apple Playlists",
  description: "Professional playlist pitching to editorial and independent curators. Real relationships, honest expectations, genuine results. Increase streams and reach new listeners.",
  path: "/services/playlists",
  keywords: [
    "playlist pitching",
    "spotify playlist submission",
    "music playlist promotion",
    "get on playlists",
    "editorial playlist pitching",
    "independent playlist curators",
  ],
});

export default PlaylistsPage;