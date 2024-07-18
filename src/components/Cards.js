// Importing React library for building UI components.
import React from 'react';

// Importing the Card component from its relative path.
import Card from './Card';

// Importing useState hook from React to manage component state.
import { useState } from 'react';

// Defining and exporting the Cards component.
export const Cards = (props) => {
  // Destructuring props to extract courses and category.
  let courses = props.courses;
  let category = props.category;

  // Defining state variable to manage liked courses.
  const [likedCourses, setLikedCourses] = useState([]);

  // Function to get the courses based on the selected category.
  function getCourses() {
    if (category === "All") {
      // If category is "All", combine all courses into a single array.
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // Otherwise, return courses for the selected category.
      return courses[category];
    }
  }

  return (
    // Main container for the cards.
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        // Mapping over the filtered courses to create a Card component for each course.
        getCourses().map((course) => (
          <Card
            key={course.id} // Setting a unique key for each card.
            course={course} // Passing the course data as a prop to the Card component.
            likedCourses={likedCourses} // Passing likedCourses state as a prop.
            setLikedCourses={setLikedCourses} // Passing setLikedCourses function as a prop.
          />
        ))
      }
    </div>
  );
}

// Exporting the Cards component as the default export.
export default Cards;
