import React from "react";

const CartWidget = () => {
  return (
    <div>
      <button type="button" className="btn btn-secondary">
        <i className="bi bi-cart" />
        <span className="badge badge-light">4</span>
      </button>
    </div>
  );
};

export default CartWidget;
