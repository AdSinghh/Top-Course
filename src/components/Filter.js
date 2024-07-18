// Importing React library for building UI components.
import React from 'react';

// Defining and exporting the Filter component.
export const Filter = (props) => {
  // Destructuring props to extract filterData, category, and setCategory.
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  // Function to handle the filter button click.
  function filterHandler(title) {
    setCategory(title); // Updating the category state.
  }

  return (
    // Main container for the filter buttons.
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        // Mapping over filterData to create a button for each filter option.
        filterData.map((data) => (
          <button
            // Adding dynamic classes for styling the buttons.
            className={`text-lg px-2 py1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
            transition-all duration-300
            ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-60 border-transparent"}`}
            // Setting a unique key for each button.
            key={data.id}
            // Handling button click to set the selected category.
            onClick={() => filterHandler(data.title)}
          >
            {data.title} {/* Displaying the filter title. */}
          </button>
        ))
      }
    </div>
  );
}

// Exporting the Filter component as the default export.
export default Filter;
