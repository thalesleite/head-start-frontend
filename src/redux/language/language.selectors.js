import { createSelector } from 'reselect';

const getLanguage = state => state.language;

export const selectLanguage = createSelector(
    [getLanguage],
    (language) => language.language
);