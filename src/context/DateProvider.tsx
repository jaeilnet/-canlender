"use client";

import useDate from "@/hooks/useDate";
import { ReactNode, createContext, useState } from "react";

interface DateContextProviderProps {
  children: ReactNode;
}

export const DateContext = createContext({
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  date: new Date().getDate(),
  handleMonthClick: (type: "plus" | "minus") => {},
  handleTodayClick: () => {},
});

export const DateContextProvider = ({ children }: DateContextProviderProps) => {
  const { date, handleMonthClick, handleTodayClick, month, year } = useDate();

  const payload = {
    year,
    month,
    date,
    handleMonthClick,
    handleTodayClick,
  };

  return (
    <DateContext.Provider value={payload}>{children}</DateContext.Provider>
  );
};
