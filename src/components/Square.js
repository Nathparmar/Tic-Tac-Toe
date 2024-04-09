

export const Square = ({value, onSquareClick}) => {
  //test
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};



