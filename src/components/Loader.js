import React from "react";

const Loader = ({ display }) => {
  return (
    <section className={`d-${display}`}>
      <div className="loader-section ">
        <div className="loader-img">
          <img src="../images/loader.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Loader;
