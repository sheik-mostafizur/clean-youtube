import {createStore} from "easy-peasy";
import playlistModel from "./playlist";

const store = createStore({
  playlist: playlistModel,
});
export default store;
