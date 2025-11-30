
function UserProfile() {
  return (
    <div className="
      bg-gray-100 shadow-lg rounded-lg mx-auto my-20 text-center 
      sm:max-w-xs sm:p-4 transition-shadow duration-300 hover:shadow-xl 
      md:max-w-sm md:p-8"
    >
      
      <img 
        src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" 
        alt="User" 
        className="
          rounded-full mx-auto 
          sm:w-24 sm:h-24 transition-transform duration-300 ease-in-out hover:scale-110 
          md:w-36 md:h-36" 
      />
      
      <h1 className="
        text-blue-800 my-4 font-bold transition-colors hover:text-blue-500
        sm:text-lg 
        md:text-xl"
      >
        John Doe
      </h1>
      
      <p className="
        text-gray-600 
        sm:text-sm 
        md:text-base"
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
