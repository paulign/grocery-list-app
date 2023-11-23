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
  statusHistory?: Record<string, IEntryItemStatusHistoryRecord>
  statusUpdatedAt: number
}

export const entryItemStatusOptions = Object.entries(EntryItemStatuses).map(
  ([key, value]) => ({ key, value, label: upperFirst(key) }),
)

export const entryItemStatusLabelsByValue = entryItemStatusOptions.reduce<
  Record<string, string>
>((acc, curr) => {
  return { ...acc, [curr.value]: curr.label }
}, {})

export const entryItemPriorities = Array.from({ length: 5 }).map(
  (_, index) => index + 1,
)

export const entryItemPriorityOptions = entryItemPriorities.map(i => ({
  key: i,
  value: i,
  label: i,
}))
