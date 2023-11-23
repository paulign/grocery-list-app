import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGroceryEntriesState, TAG } from './types'
import { TEntryItemSchema } from '@src/validators/entry-item'
import { v4 as uuidv4 } from 'uuid'
import { EntryItemStatuses, IEntryItem } from '@src/models/entry-item'

const initialState: IGroceryEntriesState = {
  records: {},
}

export const groceryEntriesSlice = createSlice({
  name: TAG,
  initialState,
  reducers: {
    addEntry: (state, { payload }: PayloadAction<TEntryItemSchema>) => {
      const id = uuidv4()
      const statusHistoryRecordId = uuidv4()
      const status = EntryItemStatuses.RAN_OUT

      const newEntry: IEntryItem = {
        ...payload,
        id,
        status,
        statusHistory: {
          [statusHistoryRecordId]: {
            id: statusHistoryRecordId,
            date: new Date().valueOf(),
            status,
          },
        },
      }

      state.records[id] = newEntry
    },
  },
})

export const { addEntry } = groceryEntriesSlice.actions

export default groceryEntriesSlice.reducer
