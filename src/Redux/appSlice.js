import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authUrl, url } from "../App";

const initialState = {
  user: null,
  employees: [],
  isLoading: false,
  isError: false,
  token: null,
};

export const adminLogin = createAsyncThunk("app/adminLogin", async (cred) => {
  // console.log(cred, "cred");
  try {
    const response = await fetch(authUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cred),
    });
    const data = await response.json();
    // console.log(data, "admin login data");
    return data;
  } catch (error) {
    console.log("Error whle admin login", error);
  }
});

export const addEmployee = createAsyncThunk(
  "app/addEmployee",
  async (employee, thunkApi) => {
    const state = thunkApi.getState();
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: state.token,
        },
        body: JSON.stringify(employee),
      });
      thunkApi.dispatch(getEmployees());
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

export const getEmployees = createAsyncThunk(
  "app/getEmployees",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          token: state.token,
        },
      });
      const employees = await response.json();
      return employees;
    } catch (error) {
      console.log("Error fetching employee", error);
    }
  }
);

export const getEmploymentData = createAsyncThunk(
  "app/getEmploymentData",
  async (emp_id, thunkApi) => {
    const state = thunkApi.getState();
    try {
      const response = await fetch(
        `http://localhost:8080/prev_empl/${emp_id}`,
        {
          headers: {
            token: state.token,
          },
        }
      );
      const data = await response.json();
      console.log("Prev Emp Data", data);
      return data;
    } catch (error) {
      console.log("Error fetching previous employment data", error);
    }
  }
);

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
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployees.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.employees = action.payload;
      })
      .addCase(adminLogin.pending, (state) => {})
      .addCase(adminLogin.fulfilled, (state, action) => {
        if (action?.payload?.token) {
          state.user = "admin";
          state.token = action.payload.token;
        }
      });
  },
});

export const {} = appSlice.actions;

export const appReducer = appSlice.reducer;
