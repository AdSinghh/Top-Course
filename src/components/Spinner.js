// Importing React library for building UI components.
import React from 'react';

// Importing the CSS file for the spinner styling.
import "./Spinner.css";

// Defining and exporting the Spinner component.
const Spinner = () => {
  return (
    // Main container for the spinner.
    <div className='flex flex-col items-center space-y-2'>
      {/* Spinner element */}
      <div className='spinner'></div>
      {/* Loading text */}
      <p className='text-bgDark text-lg font-semibold'>Loading....</p>
    </div>
  );
}

// Exporting the Spinner component as the default export.
export default Spinner;
