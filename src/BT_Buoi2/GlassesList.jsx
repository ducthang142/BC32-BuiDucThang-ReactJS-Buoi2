import React from "react";

const GlassesList = ({ glasses, onSelect}) => {
  return (
    <div className="row">
      {glasses.map((glass) => (
        <div key={glass.id} className="col-2">
          <button onClick={() => onSelect(glass)}>
            <div className="card">
              <img src={glass.url} alt={glass.name} className="card-img" />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default GlassesList;
