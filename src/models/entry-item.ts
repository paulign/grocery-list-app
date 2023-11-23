import { upperFirst } from 'lodash'

export const EntryItemStatuses = {
  HAVE: 1,
  RAN_OUT: 0,
} as const

export type TEntryItemStatusesKeys = keyof typeof EntryItemStatuses
export type TEntryItemStatus =
  (typeof EntryItemStatuses)[TEntryItemStatusesKeys]

export interface IEntryItemStatusHistoryRecord {
  id: string
  date: number
  status: TEntryItemStatus
}

export interface IEntryItem {
  id: string
  title: string
  priority?: number
  status: TEntryItemStatus
  // TODO - add type for history items
  statusHistory?: Record<string, IEntryItemStatusHistoryRecord>
}

export const entryItemStatusOptions = Object.entries(EntryItemStatuses).map(
  ([key, value]) => ({ key, value, label: upperFirst(key) }),
)

export const entryItemPriorities = Array.from({ length: 5 }).map(
  (_, index) => index + 1,
)

export const entryItemPriorityOptions = entryItemPriorities.map(i => ({
  key: i,
  value: i,
  label: i,
}))
