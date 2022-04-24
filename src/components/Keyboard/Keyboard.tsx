import React from "react";
import {
  firstLineKeys,
  secondLineKeys,
  thirdLineKeys,
} from "../../constants/KeyboardButtons";
import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="line1">
        {firstLineKeys.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className="line2">
        {secondLineKeys.map((key) => (
          <Key keyVal={key} />
        ))}
      </div>
      <div className="line3">
        <Key keyVal="ENTER" bigKey />
        {thirdLineKeys.map((key) => (
          <Key keyVal={key} />
        ))}
        <Key keyVal="DELETE" bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
