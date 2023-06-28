import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-10 mb-10 w-4/12 mx-auto my-8 text-2xl">
      <p className="text-purple-900 mb-2">{heading}</p>
      <h3 className="uppercase text-purple-700 text-4xl border-b-4 border-purple-500 py-4 font-bold">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;
