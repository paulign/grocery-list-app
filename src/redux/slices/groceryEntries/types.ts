import { IEntryItem } from '@src/models/entry-item'

export const TAG = 'groceryEntries'

export interface IGroceryEntriesState {
  // TODO - add correct type
  records: Record<string, IEntryItem>
}
