// Importing necessary hooks and libraries from React.
import React, { useEffect, useState } from "react";

// Importing constants and functions from the local data file.
import { apiUrl, filterData } from "./data";

// Importing components from their respective paths.
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";

// Importing ToastContainer and toast for displaying toast notifications.
import { ToastContainer, toast } from "react-toastify";

// Main App component
const App = () => {

  // Defining state variables using useState hook.
  // courses: stores the fetched courses data.
  // loading: indicates whether data is being loaded.
  // category: stores the selected category for filtering.
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  // Async function to fetch data from the API.
  async function fetchData() {
    setLoading(true); // Set loading state to true while fetching data.
    try {
      let response = await fetch(apiUrl); // Fetch data from the API.
      let output = await response.json(); // Parse the JSON response.

      setCourses(output.data); // Set the fetched data to the courses state.
    } catch (error) {
      // Show an error toast notification if there is a network error.
      toast.error("Network interrupted");
    }
    setLoading(false); // Set loading state to false after fetching data.
  }

  // useEffect hook to fetch data when the component mounts.
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render.

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        {/* Rendering the Navbar component */}
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          {/* Rendering the Filter component with necessary props */}
          <Filter filterData={filterData}
            category={category}
            setCategory={setCategory} />
        </div>
        
        <div className="w-11/12 max-w-[1200px] mx-auto flex-wrap flex-justify items-center min-h-[50vh]">
          {
            // Conditionally rendering Spinner or Cards component based on loading state
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  );
};

// Exporting the App component as the default export.
export default App;
