// Importing React library for building UI components.
import React from 'react';

// Importing like and placeholder like icons from react-icons.
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

// Importing toast for displaying toast notifications.
import { toast } from 'react-toastify';

// Defining and exporting the Card component.
export const Card = (props) => {
  // Destructuring props to extract course, likedCourses, and setLikedCourses.
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  // Function to handle the click event on the like button.
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // If the course is already liked, remove it from the liked courses.
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // If the course is not already liked, add it to the liked courses.
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // Append the course to the existing liked courses.
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked successfully");
    }
  }

  return (
    // Main container for the card.
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        {/* Displaying the course image. */}
        <img src={course.image.url} alt={course.title} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          {/* Like button */}
          <button onClick={clickHandler}>
            {
              // Display the appropriate icon based on whether the course is liked.
              likedCourses.includes(course.id) ?
                (<FcLike fontSize="1.75rem" />) :
                (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        {/* Displaying the course title. */}
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        {/* Displaying the course description with truncation if it's too long. */}
        <p className='mt-2 text-white'>
          {
            course.description.length > 100 ?
              (course.description.substr(0, 100)) + "..." :
              (course.description)
          }
        </p>
      </div>
    </div>
  );
}

// Exporting the Card component as the default export.
export default Card;
