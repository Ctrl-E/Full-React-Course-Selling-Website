import React, { useEffect, useState } from "react";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";

export const PopularTeachers = () => {
  const [instructor, setInstructor] = useState([]);
  const axiosFetch = useAxiosFetch();
  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axiosFetch.get("/popular_instructors");
      setInstructor(response.data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="md:w-[80%] mx-auto my-36">
      <div>
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Best</span> Teachers
        </h1>
        <div className="w-[40%] text-center mx-auto my-4 ">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
            delectus dolore, maiores, possimus illo velit nam libero nobis id
            eligendi quam!
          </p>
        </div>
      </div>
      {instructor ? (
        <>
          <div className="grid mb-28 md:grid-cols lg:grid-cols-4 w-[90%] gap-4 mx-auto">
            {instructor?.map((instructor, index) => (
              <div
                className="flex dark:text-white hover:-translate-y-2 duration-200 cursor-pointer flex-col  shadow-md py-8 px-10 md:px-8 rounded-md"
                key={index}
              >
                <div className="flex-col flex gap-6 md:gap-8">
                  <img
                    className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto"
                    src={instructor?.instructor?.photoUrl}
                    alt=""
                  />
                  <div className="flex flex-col text-center">
                    <p className="font-medium text-lg dark:text-white text-gray-800">
                      {instructor?.instructor?.name}
                    </p>
                    <p className="text-gray-500 whitespace-nowrap">
                      Instructor
                    </p>
                    <p className="text-gray-500 mb-4 whitespace-nowrap">
                      Total Students: {instructor?.totalEnrolled}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
