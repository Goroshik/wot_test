import React from "react"
import { tableMode } from "./types";

type modeContext = {
  tableMode: tableMode;
  setMode: (tableMode: tableMode) => void
}

export const ModeContext = React.createContext<modeContext>({
  tableMode: 'row', setMode: () => null
});

type searchContext = {
  inputValue: string;
  setInputValue: (value: string) => void
}

export const SearchContext = React.createContext<searchContext>({
  inputValue: '', setInputValue: () => null
});
