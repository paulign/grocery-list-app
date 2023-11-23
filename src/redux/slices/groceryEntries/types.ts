import { IEntryItem, TEntryItemStatus } from '@src/models/entry-item'

export const TAG = 'groceryEntries'

export interface IGroceryEntriesState {
  records: Record<string, IEntryItem>
  currentFilter: TEntryItemStatus | null
}
