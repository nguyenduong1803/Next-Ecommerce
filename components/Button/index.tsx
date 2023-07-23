import React from "react";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button(props: Props) {
  return (
    <button {...props} className="bg-blue-600 dark:bg-blue-950 dark:text-white rounded-sm py-1 px-3"  >
      Button
    </button>
  );
}

export default Button;
