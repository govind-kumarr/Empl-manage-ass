import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEmploymentData } from "../Redux/appSlice";

export const PrevEmpData = ({ emp_id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmploymentData(emp_id));
  }, []);
  return <div>PrevEmpData</div>;
};
