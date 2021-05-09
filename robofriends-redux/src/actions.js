import { CHANGE_SEARCH_FIELD } from "./contants";

export const setSearchField = (text) => {
  console.log("Text: ", text);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};
