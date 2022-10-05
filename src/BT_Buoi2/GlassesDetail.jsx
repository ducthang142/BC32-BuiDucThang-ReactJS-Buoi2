import React from "react";

const GlassesDetail = ({ glass }) => {
  if (!glass) {
    return null;
  }
  return (
    <>
      <img src={glass.url} alt={glass.name} />
      <div className="glass__detail">
        <h3 className="my-3">{glass.name}</h3>
        <span className="text-danger">${glass.price}</span>
        <p className="my-5">{glass.desc}</p>
      </div>

    </>
  );
};

export default GlassesDetail;
