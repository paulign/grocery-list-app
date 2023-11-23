import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@src/redux/store'

export const selectGroceryEntriesState = (state: RootState) =>
  state.groceryEntries

export const selectSurveySummaryById = createSelector(
  selectGroceryEntriesState,
  state => state.records,
)
