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
  ({ records, currentFilter }) =>
    orderBy(
      Object.values(records || {}).filter(i =>
        isNumber(currentFilter) ? i.status === currentFilter : true,
      ),
      ['priority', i => i.title.toLowerCase()],
    ),
)
