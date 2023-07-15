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
}

interface PAYLOADKIND {
  value: number;
  active: boolean;
}

export default function micReducer(state: ICONDATAKIND, action: ACTIONTYPE) {
  const { type, payload } = action;
  switch (type) {
    case ICONACTIONKIND.SetValue:
      return { ...state, iconProgress: payload.value };
    case ICONACTIONKIND.SetActive:
      return { ...state, nowActive: payload.active };
    default:
      throw new Error();
  }
}
