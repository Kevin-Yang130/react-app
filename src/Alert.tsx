import { ReactNode } from "react";
import { useState } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Prop) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        children
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
};

export default Alert;
