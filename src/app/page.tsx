"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { FaRandom } from "react-icons/fa";

type Song = {
  titel: string;
  pagina: string;
  src: string;
};

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [nummer, setNummer] = useState<Song | null>(null);

  const fetchSong = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/random`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch song");
      }
      const data: Song = await response.json();
      setNummer(data);
    } catch (error) {
      console.error("Error fetching song:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSong();
  }, [fetchSong]);

  return (
    <div className="space-y-3">
      {loading && <div>Loading...</div>}
      {!loading && nummer && (
        <>
          <div>
            <h2 className="text-4xl font-bold flex w-full justify-center">
              {nummer.titel}
            </h2>
            <Separator className="my-4" />
            <p className="flex w-full justify-end font-bold">
              Pagina: {nummer.pagina}
            </p>
          </div>
          <iframe
            width="560"
            height="315"
            src={nummer.src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Button
            variant="outline"
            className="flex w-full items-center"
            onClick={fetchSong}
          >
            <p>Randomize</p> <FaRandom />
          </Button>
        </>
      )}
    </div>
  );
}
