import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
// import { LoadingStyled } from "./Loading";
// import ClockLoader from "react-spinners/ClockLoader";
// Custom css for loader
// const override = `
//  display: block;
//  margin: 0 auto;
//  border-color: red;
// `;

export default function LoadingSuspend() {
  const isLoading = true;
  return isLoading ? (
    <div>
      <PacmanLoader
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
        }}
        color={"#36D7B7"}
        // isLoading={isLoading}
        // css={override}
        size={70}
      />
    </div>
  ) : null;
}
