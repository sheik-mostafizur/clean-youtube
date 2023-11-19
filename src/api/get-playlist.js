import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlaylistItems = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=100&pageToken=${pageToken}&playlistId=${playlistId}&key=${apiKey}`;

  const {data} = await axios.get(URL);
  result.push(...data.items);

  if (data.nextPageToken) {
    const nextPageItems = await getPlaylistItems(
      playlistId,
      data.nextPageToken,
      result
    );
    return nextPageItems;
  }

  return result;
};

const getPlayList = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${apiKey}`;

  const {data} = await axios.get(URL);
  let playlistItems = await getPlaylistItems(playlistId);

  return {playlistItems, playlistInfo: data?.items[0].snippet, playlistId};
};

export default getPlayList;
