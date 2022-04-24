import React from "react";
import useSelectLetter from "../../hooks/useSelectLetter";

type PropTypes = {
  keyVal: string;
  bigKey?: boolean;
};

const Key = ({ keyVal, bigKey }: PropTypes) => {
  const { selectLetter } = useSelectLetter();

  return (
    <div
      className="key"
      id={bigKey ? "big" : undefined}
      onClick={() => selectLetter(keyVal)}
    >
      {keyVal}
    </div>
  );
};

export default Key;
