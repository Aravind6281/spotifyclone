import { reducerCases } from "./Constants";

export const initialState={
    token:null,
    playlists:[],
    userInfo:null,
    // SelectedPlaylistId:"6QQ8qvANwSlEsLE9NdP1KZ",
    SelectedPlaylistId:"6MrKvyHDfPayau8giLFsRO",
    SelectedPlaylist:null,
    currentlyPlaying:null,
    playerState:false,
};

const reducer=(state,action)=>{
    switch(action.type){
        case reducerCases.SET_TOKEN:{
            return {
                ...state,
                token:action.token,
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return {
                ...state,
                playlists:action.playlists,
            }
        }
        case reducerCases.SET_USER:{
            return{
                ...state,
                userInfo:action.userInfo,
            }
        }
        case reducerCases.SET_PLAYLIST:{
            return{
                ...state,
                SelectedPlaylist:action.SelectedPlaylist,
            }
        }
        case reducerCases.SET_PLAYING:{
            return{
                ...state,
                currentlyPlaying:action.currentlyPlaying,
            }
        }
        case reducerCases.SET_PLAYER_STATE:{
            return{
                ...state,
                playerState:action.playerState,
            }
        }
        case reducerCases.SET_PLAYLIST_ID:{
            return{
                ...state,
                SelectedPlaylistId:action.SelectedPlaylistId,
            }
        }
        default:
            return state;
    }
};
export default reducer;