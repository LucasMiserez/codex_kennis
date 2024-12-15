"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { FaRandom } from "react-icons/fa";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

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
    <div className="space-y-3 flex flex-col justify-center items-center mx-5 w-10/12 xl:w-1/2">
      <Alert variant="default">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>In Ontwikkeling</AlertTitle>
        <AlertDescription>
          Deze website is een work-in-progress.
        </AlertDescription>
      </Alert>
      {loading && <div>Loading...</div>}
      {!loading && nummer && (
        <>
          <div className={"w-full"}>
            <h2 className="text-4xl font-bold flex w-full justify-center">
              {nummer.titel}
            </h2>
            <Separator className="my-4" />
            <p className="flex w-full justify-end font-bold">
              Pagina: {nummer.pagina}
            </p>
          </div>
          <iframe className="w-full aspect-video"
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
