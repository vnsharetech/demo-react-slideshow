import { createSelector } from "reselect";
export const selectCards = () => (state) => state.card;
export const getDetail = () => createSelector(selectCards(), (state) => state);
