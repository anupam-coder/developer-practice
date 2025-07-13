"use client";
import { lastDayOfMonth, startOfMonth, format } from "date-fns";
import { useMemo, useState } from "react";
import { FaBackward, FaForward } from "react-icons/fa";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

type Event = {
  title: string;
  identifier: string;
  date: string;
};
interface EventProps {
  events: Array<Event>;
}

type DateStringEventMap = Record<string, Event>;

interface MonthWiseCalenderProps {
  eventsMapper: DateStringEventMap;
  month: number;
  year: number;
}

const MonthWiseCalender = ({
  eventsMapper,
  month,
  year,
}: MonthWiseCalenderProps) => {
  const today = new Date(year, month);
  const firstDateOfMonth = startOfMonth(today);
  const lastDateOfMonth = lastDayOfMonth(today).getDate();
  const firstDay = new Date(firstDateOfMonth).getDay();
  const netToday = new Date();
  const currentMonthMapper: Record<number, Event> = useMemo(() => {
    return (
      eventsMapper &&
      Object.keys(eventsMapper).reduce(
        (acc: { [key: number]: Event }, key: string) => {
          const date = new Date(key);
          if (date.getMonth() != month || date.getFullYear() != year)
            return acc;
          acc[date.getDate()] = eventsMapper[key];
          return acc;
        },
        {} as { [key: number]: Event }
      )
    );
  }, [eventsMapper, month, year]);
  return (
    <div className="grid grid-cols-7 p-2">
      {days.map((day) => (
        <div
          key={day}
          className="justify-center flex border-2 border-gray-300 mb-2 py-4"
        >
          {day}
        </div>
      ))}
      {new Array(firstDay).fill(0).map((day) => (
        <div className="border-2 border-gray justify-center flex items-center w-full h-28"></div>
      ))}
      {new Array(lastDateOfMonth).fill(0).map((day, index) => (
        <div>
          <div className="border-2 border-gray flex flex-col items-center w-full h-28">
            {netToday.getDate() === index + 1 &&
              netToday.getMonth() === month &&
              netToday.getFullYear() === year && (
                <div className="w-full flex items-end justify-end">
                  <div className="rounded-lg bg-green-800 w-4 h-4"></div>
                </div>
              )}
            <div className="flex items-center justify-center h-32">
              <span>{index + 1}</span>
            </div>
            {currentMonthMapper && currentMonthMapper[index + 1] != null && (
              <div
                className={`m-2 h-32 text-sm rounded-sm border-4 border-transparent font-bold ml-2 flex items-center justify-items-center bg-${
                  currentMonthMapper[index + 1].identifier
                }-200`}
              >
                {currentMonthMapper[index + 1].title}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const EventCalender = ({ events }: EventProps) => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const eventsMapper = useMemo(
    () =>
      events?.reduce((acc: { [key: string]: Event }, event: Event) => {
        acc[format(new Date(event.date), "yyyy-MM-dd")] = event;
        return acc;
      }, {} as { [key: string]: Event }),
    [events]
  );
  return (
    <div className="mx-auto">
      <div className="flex gap-x-4 items-center justify-center">
        <button
          onClick={() => {
            if (month === 0) {
              setYear(year - 1);
            }
            setMonth((month) => (month + 11) % 12);
          }}
        >
          <FaBackward></FaBackward>
        </button>
        <div className="align-center justify-center flex mb-4 mt-4 font-bold">
          {" "}
          Event Calender
        </div>
        <button
          onClick={() => {
            if (month === 11) setYear(year + 1);
            setMonth((month) => (month + 1) % 12);
          }}
        >
          <FaForward></FaForward>
        </button>
        {month + 1}/{year}
      </div>

      <MonthWiseCalender
        eventsMapper={eventsMapper}
        month={month}
        year={year}
      />
    </div>
  );
};

export default EventCalender;
