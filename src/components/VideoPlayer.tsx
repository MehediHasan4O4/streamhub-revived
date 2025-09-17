import React from 'react';
import { M3UChannel } from '@/utils/m3u-parser';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  channel: M3UChannel;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ channel }) => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
          <p className="text-gray-300 mb-4">Video player would load here</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Play className="w-5 h-5 mr-2" />
            Play Channel
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 rounded-lg p-2">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="text-white hover:text-white">
            <Play className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-white hover:text-white">
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
        
        <Button size="sm" variant="ghost" className="text-white hover:text-white">
          <Maximize className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;