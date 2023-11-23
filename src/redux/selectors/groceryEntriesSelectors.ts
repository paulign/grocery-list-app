import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@src/redux/store'
import { isNumber, orderBy } from 'lodash'

export const selectGroceryEntriesState = (state: RootState) =>
  state.groceryEntries

export const selectEntryById = (id: string) =>
  createSelector(selectGroceryEntriesState, state => state.records?.[id])

export const selectCurrentFilter = createSelector(
  selectGroceryEntriesState,
  ({ currentFilter }) => currentFilter,
)

export const selectSortedEntriesList = createSelector(
  selectGroceryEntriesState,
  ({ records, currentFilter }) => {
    const allRecords = Object.values(records || {})
    const filteredRecords = isNumber(currentFilter)
      ? allRecords.filter(i => i.status === currentFilter)
      : allRecords

    return orderBy(filteredRecords, ['priority', i => i.title.toLowerCase()])
  },
)
