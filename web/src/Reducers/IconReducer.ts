export enum ICONACTIONKIND {
  SetValue = "SetValue",
  SetActive = "SetActive",
}

interface ACTIONTYPE {
  type: ICONACTIONKIND;
  payload: PAYLOADKIND;
}

export interface ICONDATAKIND {
  iconProgress: number;
  highlightColor: string;
  activeColor: string;
  nowActive: boolean;
  behaviour: string;
  icon: string;
  visible: boolean;
}

interface PAYLOADKIND {
  value: number;
  active: boolean;
}

export default function micReducer(state: ICONDATAKIND, action: ACTIONTYPE) {
  const { type, payload } = action;
  switch (type) {
    case ICONACTIONKIND.SetValue:
      let newVisible: boolean;
      if (state.behaviour === "whenabovezero" && state.iconProgress <= 0) {
        newVisible = false;
      } else if (state.behaviour === "whenabovezero") {
        newVisible = true;
      } else if (
        state.behaviour === "whenbelowhundred" &&
        state.iconProgress < 100
      ) {
        newVisible = true;
      } else if (state.behaviour === "whenbelowhundred") {
        newVisible = false;
      } else {
        newVisible = true;
      }
      return { ...state, iconProgress: payload.value, visible: newVisible };
    case ICONACTIONKIND.SetActive:
      return { ...state, nowActive: payload.active };
    default:
      throw new Error();
  }
}
