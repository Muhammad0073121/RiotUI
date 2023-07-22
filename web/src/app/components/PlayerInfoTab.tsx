import React, { useReducer, useState } from "react";
import logo from "../../assets/images/riot_logo_white.png";
import GunStrats from "./GunStrats";
import statsReducer from "../../Reducers/StatsReducer";

const PlayerInfoTab: React.FC = () => {
  const defaultVaules = {
    gunOut: true,
    dateTime: { date: "11-07-23", time: "21:22" },
    rewardTimer: "02:00",
    playerID: 69,
    playerBankcreds: 2500000,
    playerCash: 3000,
    playerJob: {
      job: "Unemployed",
      rank: "N/A",
    },
  };

  const [state, dispatch] = useReducer(statsReducer, defaultVaules);

  const currencyFormatter = (money: number) => {
    var usFormat = money.toLocaleString("en-US");
    usFormat = usFormat.replaceAll(",", " ");
    return "$" + usFormat;
  };
  const Formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <img className="Riot Logo" src={logo} width={100} />
          <div
            className="playerID"
            style={{
              flexDirection: "column",
              fontSize: 13,
              paddingLeft: 20,
              textAlign: "right",
            }}
          >
            <p style={{ marginTop: 22 }}>{state.playerJob.job}</p>
            <p style={{ fontWeight: 500 }}>{state.playerJob.rank}</p>
          </div>
          <div
            className="dateTimeTab"
            style={{
              flexDirection: "column",
              fontSize: 13,
              textAlign: "right",
            }}
          >
            <p style={{ marginTop: 22, fontWeight: 500 }}>discord.gg/riotrp</p>
            <p>
              {state.dateTime.time} {state.dateTime.date}
            </p>
          </div>
          <div
            className="rewardTimer"
            style={{
              flexDirection: "column",
              fontSize: 13,
              paddingRight: 20,
              textAlign: "right",
            }}
          >
            <p style={{ marginTop: 22 }}>Reward Timer</p>
            <p style={{ fontWeight: 500 }}>{state.rewardTimer}</p>
          </div>
          <div
            className="playerID"
            style={{
              flexDirection: "column",
              fontSize: 13,
              paddingRight: 20,
              textAlign: "right",
            }}
          >
            <p style={{ marginTop: 22 }}>ID</p>
            <p style={{ fontWeight: 500 }}>{state.playerID}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div className="playerBankCredits">
            <p
              style={{
                marginTop: 26,
                marginRight: 41,
                fontWeight: 500,
                fontSize: 18,
                textAlign: "right",
              }}
            >
              {currencyFormatter(state.playerBankcreds)}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div className="playerCash">
            <p
              style={{
                marginRight: 41,
                fontSize: 17,
                textAlign: "right",
              }}
            >
              {currencyFormatter(state.playerCash)}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <div className="playerBlackMoney">
            <p
              style={{
                marginRight: 41,
                fontSize: 17,
                color: "#C9C9C9",
                textAlign: "right",
              }}
            >
              {currencyFormatter(state.playerCash)}
            </p>
          </div>
        </div>
        <GunStrats gunOut={state.gunOut} />
      </div>
    </>
  );
};

export default PlayerInfoTab;
