import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {

  //fetch worker id
  const {workId} = useParams();
  //fetch workers array from AppContext
  const { workers, currencySymbol } = useContext(AppContext);

  const [workInfo, setWorkInfo] = useState(null);

  //now find specific worker info with workId from the workers array
  const fetchWorkInfo = async () => {
    const workInfo = workers.find(work => work._id === workId);
    setWorkInfo(workInfo)
    console.log(workInfo)
  };
  //now whenever we change workId, workers array we would render and will run this function
  useEffect(() => {
    fetchWorkInfo()
  }, [workers, workId])
  

  return workInfo && (
   <div>
    {/* -------------worker details---------- */}
    <div className="flex flex-col sm:flex-row gap-4">
      <div>
        <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={workInfo.image} alt="" />
      </div>
      <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:m-0">
        {/* ---------worker info: name, degree, speciality, experience */}
        <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">{workInfo.name}
           <img className="w-5" src={assets.verified_icon} alt="" /></p>
      <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
        <p>{workInfo.degree} - {workInfo.speciality}</p>
        <button className="py-0.5 px-2 border text-xs rounded-full">{workInfo.experience}</button>
      </div>

      {/* -------worker about----------- */}
      <div>
        <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="" /></p>
        <p className="text-sm text-gray-500 max-w-[700px] mt-1">{workInfo.about}</p>
      </div>
      <p className="text-gray-500 font-medium mt-4">
        Appointment fee: <span className="text-gray-600">{currencySymbol}{workInfo.fees}</span>
      </p>
    </div>
  </div>
  </div>
  )
}
export default Appointment;
