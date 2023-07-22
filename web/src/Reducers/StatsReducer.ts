interface ACTIONTYPE {
  type: any;
  payload: any;
}

export interface STATSDATAKIND {
  gunOut: boolean;
  dateTime: any;
  rewardTimer: string;
  playerID: number;
  playerBankcreds: number;
  playerCash: number;
  playerJob: any;
}

export default function statsReducer(state: STATSDATAKIND, action: ACTIONTYPE) {
  const { type, payload } = action;
  switch (type) {
    case "UpdateBank":
      return {
        ...state,
        playerBankcreds: state.playerBankcreds + payload.data,
      };
    case "UpdateCash":
      return { ...state, playerCash: state.playerCash + payload.data };
    case "UpdateRewardTimer":
      return { ...state, rewardTimer: payload.data };
    case "SetGunStatus":
      return { ...state, gunOut: payload.data };
    case "SetPlayerId":
      return { ...state, playerID: payload.data };
    case "UpdatePlayerJob":
      return { ...state, playerJob: payload.data };
    case "SetDateTime":
      return { ...state, dateTime: payload.data };
    default:
      throw new Error();
  }
}
