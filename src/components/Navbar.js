// Importing React library for building UI components.
import React from "react";

// Defining and exporting the Navbar component.
const Navbar = () => {
  return (
    // Main container for the navbar.
    <div>
      {/* Navbar element */}
      <nav className="bg-bgDark py-4">
        {/* Heading text */}
        <h1 className="text-3xl font-bold text-center text-white">Top Courses</h1>
      </nav>
    </div>
  );
}

// Exporting the Navbar component as the default export.
export default Navbar;
