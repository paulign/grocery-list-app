import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGroceryEntriesState, TAG } from './types'
import { TEntryItemSchema } from '@src/validators/entry-item'
import { v4 as uuidv4 } from 'uuid'
import {
  EntryItemStatuses,
  IEntryItem,
  TEntryItemStatus,
} from '@src/models/entry-item'
import { cloneDeep } from 'lodash'

const initialState: IGroceryEntriesState = {
  currentFilter: null,
  records: {},
}

const createStatusHistoryItem = (status: TEntryItemStatus) => ({
  date: new Date().valueOf(),
  status,
  id: uuidv4(),
})

export const groceryEntriesSlice = createSlice({
  name: TAG,
  initialState,
  reducers: {
    addEntry: (state, { payload }: PayloadAction<TEntryItemSchema>) => {
      const id = uuidv4()
      const status = EntryItemStatuses.RAN_OUT
      const historyItem = createStatusHistoryItem(status)
      const newEntry: IEntryItem = {
        ...payload,
        id,
        status,
        statusUpdatedAt: historyItem.date,
        statusHistory: {
          [historyItem.id]: historyItem,
        },
      }

      state.records[id] = newEntry
    },
    toggleEntryStatus: (state, { payload }: PayloadAction<string>) => {
      if (state.records?.[payload]) {
        const updatedEntry = cloneDeep(state.records?.[payload])

        const status =
          updatedEntry.status === EntryItemStatuses.HAVE
            ? EntryItemStatuses.RAN_OUT
            : EntryItemStatuses.HAVE
        const historyItem = createStatusHistoryItem(status)

        updatedEntry.status = status
        updatedEntry.statusUpdatedAt = historyItem.date
        updatedEntry.statusHistory = {
          ...updatedEntry.statusHistory,
          [historyItem.id]: historyItem,
        }

        state.records[payload] = updatedEntry
      }
    },
    deleteEntry: (state, { payload }: PayloadAction<string>) => {
      if (state.records?.[payload]) {
        delete state.records[payload]
      }
    },
    toggleFilter: (
      state,
      { payload }: PayloadAction<TEntryItemStatus | null>,
    ) => {
      state.currentFilter = payload
    },
  },
})

export const { addEntry, toggleEntryStatus, deleteEntry, toggleFilter } =
  groceryEntriesSlice.actions

export default groceryEntriesSlice.reducer
