type ButtonMovimentProps = {
  onClick: (arg: number) => void;
  numberMoviment: number;
  orderMoviment: Array<{
    position: number;
    player: "playerX" | "playerO";
  }>;
  disabledButtons: boolean;
};

export const ButtonMoviment = ({
  onClick,
  numberMoviment,
  disabledButtons,
  orderMoviment,
}: ButtonMovimentProps) => {
  const renderMoviment = (line: number) => {
    const currentOrderMoviment = orderMoviment.find(
      (order) => order.position === line
    );
    // if (
    //   currentOrderMoviment?.player === "playerO" ||
    //   currentOrderMoviment?.player === "playerX"
    // ) {
    //   return;
    // }
    if (currentOrderMoviment) {
      return currentOrderMoviment.player === "playerX" ? "X" : "O";
    }
  };
  return (
    <button
      type="button"
      id={`button-${numberMoviment}`}
      onClick={() => onClick(numberMoviment)}
      disabled={disabledButtons}
    >
      {renderMoviment(numberMoviment)}
    </button>
  );
};
