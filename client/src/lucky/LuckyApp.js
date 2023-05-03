import React, { Component, useState } from "react";

import WheelComponent from "./weel";
import 'react-wheel-of-prizes/dist/index.js'
import "./styles.css";
// import IMAGES from "./assets";
import TrPortal from "./portal";
import Confetti from "react-confetti";

export class LuckyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portal: false,
      show: false,
    };
  }
 
  render() {
    // let objIndex = {
    //   "Free access to a premium course for 30 days!": 1, 
    //   "10% discount on your next purchase!": 2, 
    //   "Download a free e-book now!": 3, 
    //   "Join our exclusive members-only community!": 4, 
    //   "Win a 1-hour personalized consultation session!": 5,
    //   "Claim your free coaching or mentoring session!": 6,
    //   "Get a chance to win our exclusive merchandise!": 7,
    //   "Win a $50 cash prize or gift card!": 8,
    //   "Win a $10 cash prize or gift card!": 9,
    //   "Book a one-on-one call with our representative!":10
    // }
    const segments = [
      "Free access to a premium course for 30 days!", 
      "10% discount on your next purchase!", 
      "Download a free e-book now!", 
      "Join our exclusive members-only community!", 
      "1-hour personalized consultation session!",
      "Claim your free coaching or mentoring session!",
      "Chance to win our exclusive merchandise!",
      "₹500 cash gift card!",
      "₹100 cash gift card!",
      "Book a one-on-one call with our representative!",
    ];

    const weelColors = () => {
      let arr = [];
      let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
      segments.forEach((el) => {
        let color = colors.shift();
        arr.push(color);
        colors.push(color);
      });

      return arr;
    };
    const segColors = weelColors();

    // const rand = () => {
    //   return setTimeout(() => {
    //     return segments[Math.floor(Math.random() * segments.length)];
    //   }, 5000);
    // };
    const onFinished = (winner) => {
      this.setState({ portal: false, show: winner });
    };
    return (
      <div
        // id="pankaj"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "150px",
          paddingBottom: "150px",
          // background: `url(${IMAGES.background})`
        }}
      >
        {this.state.show && <Confetti width={1600} height={1019} />}
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment={"8"}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="gray"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
        />
        {this.state.portal ? <TrPortal /> : null}
        {this.state.show && (
          // modal
          <div className="box">
            <div className="imageBox">
              {/* <img src={IMAGES[`image${objIndex[this.state.show.split(" ").join("")]}`]} alt="" /> */}
            </div>
            <h2 className="titleWin">
              CONGRATULATIONS!!! YOU HAVE WON {this.state.show} !!!
            </h2>
            <div className="closeContainer">
              <button
                className="closepankaj"
                onClick={() => this.setState({ show: false })}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
