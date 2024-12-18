import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="back1">
        <Header />
        <Body />
        <div className="flex flex-row justify-center gap-4">
          <p style={{ width: "570px" }}>
            It all started with a group of investment bears who found success in
            2020 hoarding and selling toilet paper during the start of the
            pandemic. The group is also famous for shorting tiger petting zoos
            during the Tiger King hype. Then they decided to short some crypto,
            SOL specifically. Didn't go well... They became the Sad Bears. If
            you've ever gotten rekt by a trade or fallen victim to a crypto
            scam, you might be a Sad Bear too. Join this community of Sad Bears
            to give moral support to each other and commiserate in our failures.
            Oh and also get some sweet rewards.
          </p>
          <p style={{ width: "572px" }}>
            After all 10,000 Sad Bears are purchased, 12 weeks of exclusive
            airdrops will begin. Once a week for 12 weeks, Sad Bear NFT holders
            will have the chance to receive exclusive airdrops, including four
            complete generative art collections! That's FOUR complete
            collections. See Road Map for more details. Every Sad Bear you hold
            in your wallet increases your chance of winning an item. A higher
            rarity Sad Bear increases your chance of receiving an airdropped
            item.
          </p>
        </div>
      
      </div>
      
    </div>
  );
}

export default App;
