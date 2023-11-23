import { createSlice } from '@reduxjs/toolkit'
import { IGroceryEntriesState, TAG } from './types'

const initialState: IGroceryEntriesState = {
  records: {},
}

export const groceryEntriesSlice = createSlice({
  name: TAG,
  initialState,
  reducers: {
    addEntry: state => {
      return state
    },
  },
})

export const { addEntry } = groceryEntriesSlice.actions

export default groceryEntriesSlice.reducer
