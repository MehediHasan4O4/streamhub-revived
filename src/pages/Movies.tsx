import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CategorySection from '@/components/CategorySection';
import VideoPlayer from '@/components/VideoPlayer';
import { parseM3U, loadPlaylists, M3UChannel, M3UPlaylist } from '@/utils/m3u-parser';
import { useToast } from "@/hooks/use-toast";
import { Film, Star, Clock, Calendar } from 'lucide-react';

const Movies = () => {
  const [playlists, setPlaylists] = useState<M3UPlaylist[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<M3UChannel | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const loadedPlaylists = await loadPlaylists();
        setPlaylists(loadedPlaylists);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load playlists",
          variant: "destructive"
        });
      }
    };

    fetchPlaylists();
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Movies</h1>
            <p className="text-muted-foreground">Discover amazing movies and shows</p>
          </div>
          <Button>
            <Film className="w-4 h-4 mr-2" />
            Browse All
          </Button>
        </div>

        {selectedChannel && (
          <div className="mb-8">
            <VideoPlayer channel={selectedChannel} />
          </div>
        )}

        <CategorySection />
      </div>
    </div>
  );
};

export default Movies;