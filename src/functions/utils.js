export const getPrevEmpData = async (emp_id, token, cb) => {
  try {
    const response = await fetch(`http://localhost:8080/prev_empl/${emp_id}`, {
      headers: {
        "Content-Type": "application/json",
        token,
      },
    });
    const data = await response.json();
    // console.log("Prev Emp Data", data);
    cb(data);
    return data;
  } catch (error) {
    console.log("Error fetching previous employment data", error);
  }
};


