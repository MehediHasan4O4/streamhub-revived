export interface M3UChannel {
  id: string;
  name: string;
  url: string;
  logo?: string;
  group?: string;
  country?: string;
}

export interface M3UPlaylist {
  id: string;
  name: string;
  channels: M3UChannel[];
}

export const parseM3U = (content: string): M3UChannel[] => {
  const channels: M3UChannel[] = [];
  const lines = content.split('\n');
  let currentChannel: Partial<M3UChannel> = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('#EXTINF:')) {
      // Parse channel info
      const nameMatch = line.match(/,(.*)$/);
      if (nameMatch) {
        currentChannel.name = nameMatch[1];
        currentChannel.id = Math.random().toString(36).substr(2, 9);
      }
      
      // Extract logo
      const logoMatch = line.match(/tvg-logo="([^"]+)"/);
      if (logoMatch) {
        currentChannel.logo = logoMatch[1];
      }
      
      // Extract group
      const groupMatch = line.match(/group-title="([^"]+)"/);
      if (groupMatch) {
        currentChannel.group = groupMatch[1];
      }
    } else if (line && !line.startsWith('#') && currentChannel.name) {
      // This is a URL line
      currentChannel.url = line;
      channels.push(currentChannel as M3UChannel);
      currentChannel = {};
    }
  }
  
  return channels;
};

export const loadPlaylists = async (): Promise<M3UPlaylist[]> => {
  // Return empty array for now - this would normally load from a source
  return [];
};