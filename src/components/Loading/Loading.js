import React from "react";
import { useSelector } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";

// const override = `
//  display: block;
//  margin: 0 auto;
//  border-color: red;
// `;

export default function Loading(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);
  return isLoading ? (
    // If page is still loading then splash screen
    <div>
      <PacmanLoader
        color={"#36D7B7"}
        isLoading={isLoading}
        size={150}
      />
    </div>
  ) : null;
}
