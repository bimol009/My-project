import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-10 mb-10 w-4/12 mx-auto my-8 text-2xl">
      <p className="text-white mb-2">{heading}</p>
      <h3 className="uppercase text-4xl py-4 font-bold border-b-8 border-b-slate-700">
        <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 text-transparent bg-clip-text">{subHeading}</span>
      </h3>
    </div>
  );
};

export default SectionTitle;
