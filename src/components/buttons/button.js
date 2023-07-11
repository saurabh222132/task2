import database from "../../database";
import { useState } from "react";
import { useEffect } from "react";

const Buttons = ({ setvalues }) => {
  let [buttons, setButtons] = useState([]);

  // setting the initial buttons to show

  useEffect(() => {
    setButtons(database);
  }, []);
  // =============================Handle cick ======================

  const handleClick = (key) => {
    if (key.form !== undefined) {
      console.log(key.form);
      setvalues(key.form);
    }

    if (key.dataSheetSecondOptions !== undefined) {
      setButtons(key.dataSheetSecondOptions);
    }
  };

  //////======================Handle home ========================

  const handleHome = () => {
    setButtons(database);
  };

  return (
    <div className="buttons d-flex flex-column">
      {buttons.map((value, index) => {
        return (
          <button
            key={index}
            sss
            className="btn btn-primary mb-3"
            onClick={() => handleClick(value)}
          >
            {value.name}
          </button>
        );
      })}

      <button
        className="btn btn-danger"
        onClick={() => {
          handleHome();
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Buttons;
