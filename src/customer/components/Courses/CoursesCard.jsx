function CoursesCard({ courses }) {
    return (
      <div className="coursesCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
          <img
            className="h-full w-full object-cover object-left-top"
            src={courses.imageUrl}  // Correctly reference courses.imageUrl
            alt="courseimg"
          />
        </div>
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">{courses.brand}</p>
            <p>{courses.title}</p>
          </div>
          <div className="flex item-center space-x-2">
            <p className="font-semibold">₹{courses.discountedPrice}</p>
            <p className="line-through opacity-50">{courses.price}</p>
            <p className="text-green-600 font-semibold">{courses.discountPercent}% off</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default CoursesCard;
  