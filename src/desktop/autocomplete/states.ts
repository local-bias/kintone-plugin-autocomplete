import { LOCAL_STORAGE_KEY } from '@/lib/static';
import { getCurrentRecord, getYuruChara, setCurrentRecord } from '@konomi-app/kintone-utilities';
import { atom, selector } from 'recoil';

const PREFIX = 'autocomplete';

export const autoCompleteOptionsState = atom<Plugin.AutocompleteOption[]>({
  key: `${PREFIX}/options`,
  default: [],
});

export const pluginConditionState = atom<Plugin.Condition | null>({
  key: `${PREFIX}/pluginConditionState`,
  default: null,
});

export const cacheState = selector<Plugin.CacheData>({
  key: `${PREFIX}/cache`,
  get: () => {
    const item = localStorage.getItem(LOCAL_STORAGE_KEY) || '{}';
    return JSON.parse(item);
  },
});

export const cachedOptionsState = selector<string[]>({
  key: `${PREFIX}/cachedOptions`,
  get: ({ get }) => {
    const condition = get(pluginConditionState);
    if (!condition) {
      return [];
    }
    const cache = get(cacheState);
    return cache[condition.cacheId] || [];
  },
});

export const inputValueState = atom<string>({
  key: `${PREFIX}/inputValue`,
  default: '',
  effects: [
    ({ onSet, getPromise }) => {
      onSet(async (newValue) => {
        const condition = await getPromise(pluginConditionState);
        if (!condition?.targetFieldCode) {
          return;
        }
        const { record } = getCurrentRecord();
        record[condition.targetFieldCode].value = newValue;
        setCurrentRecord({ record });
      });
    },
  ],
});

export const optionCursorState = atom<number>({
  key: `${PREFIX}/optionCursor`,
  default: -1,
});

export const filteredOptionsState = selector({
  key: `${PREFIX}/filteredOptions`,
  get: ({ get }) => {
    const inputValue = get(inputValueState);
    const options = get(autoCompleteOptionsState);

    if (!inputValue) {
      return options;
    }

    const words = getYuruChara(inputValue).split(/\s+/g);

    return options.filter(({ quickSearch }) => words.every((word) => quickSearch.includes(word)));
  },
});