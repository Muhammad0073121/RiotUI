import React, { useState } from "react";
import logo from "../../assets/images/riot_logo_white.png";
import GunStrats from "./GunStrats";

const PlayerInfoTab: React.FC = () => {
  const [gunOut, setGunOut] = useState(true);
  const [dateTime, setDateTime] = useState({ date: "11-07-23", time: "21:22" });
  const [rewardTimer, setRewardTimer] = useState("02:00");
  const [playerID, setPlayerID] = useState(69);
  const [playerBankcreds, setPlayerBankCreds] = useState(2500000);
  const [playerCash, setPlayerCash] = useState(3000);
  const [playerJob, setPlayerJob] = useState({
    job: "Unemployed",
    rank: "N/A",
  });

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
            <p style={{ marginTop: 22 }}>{playerJob.job}</p>
            <p style={{ fontWeight: 500 }}>{playerJob.rank}</p>
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
              {dateTime.time} {dateTime.date}
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
            <p style={{ fontWeight: 500 }}>{rewardTimer}</p>
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
            <p style={{ fontWeight: 500 }}>{playerID}</p>
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
              {currencyFormatter(playerBankcreds)}
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
              {currencyFormatter(playerCash)}
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
              {currencyFormatter(playerCash)}
            </p>
          </div>
        </div>
        {gunOut && <GunStrats />}
      </div>
    </>
  );
};

export default PlayerInfoTab;
