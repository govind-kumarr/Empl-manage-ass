import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../App";

const initialState = {
  user: null,
  employees: [],
  isLoading: false,
  isError: false,
};

export const adminLogin = createAsyncThunk("app/adminLogin", async (cred) => {
  console.log(cred, "cred");
  try {
    const response = await fetch(
      "https://odd-puce-hatchling-ring.cyclic.app/users/login",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cred),
      }
    );
    console.log(response, "admin login response");
    const data = await response.json();
    console.log(data, "admin login data");
    return data;
  } catch (error) {
    console.log("Error whle admin login", error);
  }
});

export const addEmployee = createAsyncThunk(
  "app/addEmployee",
  async (employee, thunkApi) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employee),
      });
      thunkApi.dispatch(getEmployee());
      // const data = await response.json();
      console.log(response);
      // return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "app/deleteEmployee",
  async (id, thunkApi) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      thunkApi.dispatch(getEmployee());
      console.log(response);
    } catch (error) {
      console.log("Error while deleting employee", error);
    }
  }
);

export const getEmployee = createAsyncThunk("app/getEmployee", async () => {
  try {
    const response = await fetch(url);
    // console.log(response, "response");
    const employees = await response.json();
    // console.log(employees);
    return employees;
  } catch (error) {
    console.log("Error fetching employee", error);
  }
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addEmployee.rejected, (state) => {
        state.isError = true;
      })
      .addCase(addEmployee.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployee.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getEmployee.fulfilled, (state, action) => {
        // console.log(action, "getemployees fullfilled");
        state.isLoading = false;
        state.isError = false;
        state.employees = action.payload;
      })
      .addCase(adminLogin.pending, (state) => {})
      .addCase(adminLogin.fulfilled, (state, action) => {
        console.log(action, "action obj for adminlogin");
        if (action?.payload?.token) state.user = "admin";
      });
  },
});

export const {} = appSlice.actions;

export const appReducer = appSlice.reducer;
