import "./modalStyle.css";

import { IModalWindowProps } from "../types/types";

export const Modal: React.FC<IModalWindowProps> = ({
  isVisible = false,
  width = 300,
  height = 300,
  color = "#fbfbfb",
  title = "",
  setVisible,
  children,
}) => {
  return (
    <>
      {isVisible && (
        <div className="modal-wrapper">
          <div
            className="modal-window"
            style={{ width: width, height: height, backgroundColor: color }}
          >
            <div className="modal-header">
              <h3>{title}</h3>
              <button
                className="modal-close-button"
                onClick={() => {
                  setVisible(false);
                }}
              >
                x
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
