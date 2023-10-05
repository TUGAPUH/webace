import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider, db } from "../../Firebase/firebaseInit";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const login = createAsyncThunk(
  "mainSlice/login",
  async function (_, { rejectWithValue }) {
    try {
      const { user } = await signInWithPopup(auth, provider);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "mainSlice/logOut",
  async function (_, { rejectWithValue }) {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "mainSlice/sendMessage",
  async function (data, { rejectWithValue }) {
    try {
      const messagesRef = doc(collection(db, "messages"));
      await setDoc(messagesRef, data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteMsg = createAsyncThunk(
  "mainSlice/deleteMsg",
  async function (messageRefDelete, { rejectWithValue }) {
    try {
      const delDoc = doc(db, "messages", messageRefDelete);
      await deleteDoc(delDoc);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    paths: [
      { path: "/", name: "Home" },
      { path: "/wordle", name: "Wordle" },
      { path: "/music", name: "Music" },
      { path: "/chat", name: "Chat" },
      { path: "/contacts", name: "Contact" },
    ],
    user: null,
    isLoading: true,
    error: null,
    value: "",
    edited: {
      edit: false,
      refEdit: null,
      editedText: "",
    },
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setEdited: (state, action) => {
      state.edited = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        toast("Hello again!", {
          icon: "🤗",
          duration: 1500,
        });
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, () => {
        toast("Come back soon!", {
          icon: "😪",
          duration: 1500,
        });
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteMsg.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export const { setValue, setEdited } = mainSlice.actions;
export default mainSlice.reducer;
