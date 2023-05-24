// WaitingLinePopup.js

import React, { useContext } from "react";
import Popup from "reactjs-popup";
import { AppContext } from "./AppProvider";

export default function WaitingLinePopup() {
  const { isOpen, openPopup, closePopup } = useContext(AppContext);

  const handleOpenPopup = () => {
    openPopup();
  };

  const handleClosePopup = () => {
    closePopup();
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenPopup}
      >
        Open Popup
      </button>

      <Popup open={isOpen} onClose={handleClosePopup} modal nested>
        {/* Popup content */}
      </Popup>
    </>
  );
}
