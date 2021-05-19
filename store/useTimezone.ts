import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import create from 'zustand'

dayjs.extend(utc)
dayjs.extend(timezone)

type timezoneState = {
  localTimezone: string
  defaultTimezone: string
  setTimezone: (timezone: string) => void
}

export const useTimezone = create<timezoneState>((set) => ({
  localTimezone: dayjs.tz.guess(),
  defaultTimezone: 'Asia/Singapore',
  setTimezone: (localTimezone) => set({ localTimezone }),
}))
