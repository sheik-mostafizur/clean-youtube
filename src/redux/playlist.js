import {action} from "easy-peasy";

const playlistModel = {
  data: {},
  getPlaylist: action((state, payload) => {
    state.data.push(payload);
  }),
};
export default playlistModel;
