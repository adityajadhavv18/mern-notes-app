import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { type Note } from "../types/note";
import * as notesApi from "../api/notesApi";

// Thunks
export const loadNotes = createAsyncThunk<Note[]>(
  "notes/loadNotes",
  async () => {
    return await notesApi.fetchNotes();
  }
);

export const addNote = createAsyncThunk<
  Note,
  { title: string; content?: string }
>("notes/addNote", async (payload) => {
  return await notesApi.createNote(payload);
});

export const removeNote = createAsyncThunk<string, string>(
  "notes/removeNote",
  async (id) => {
    await notesApi.deleteNote(id);
    return id;
  }
);

// Slice
interface NotesState {
  items: Note[];
  loading: boolean;
  error?: string | null;
}

const initialState: NotesState = {
  items: [],
  loading: false,
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // optional sync reducers if needed
  },
  extraReducers: (builder) => {
    builder
      // loadNotes
      .addCase(loadNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadNotes.fulfilled, (state, action: PayloadAction<Note[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load notes";
      })

      // addNote
      .addCase(addNote.pending, (state) => {
        state.error = null;
      })
      .addCase(addNote.fulfilled, (state, action: PayloadAction<Note>) => {
        state.items.unshift(action.payload);
      })
      .addCase(addNote.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to add note";
      })

      // removeNote
      .addCase(removeNote.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((n) => n._id !== action.payload);
      })
      .addCase(removeNote.rejected, (state, action) => {
        state.error = action.error.message ?? "Failed to remove note";
      });
  },
});

export default notesSlice.reducer;
