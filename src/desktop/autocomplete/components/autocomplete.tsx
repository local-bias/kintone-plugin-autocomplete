import React, { ChangeEventHandler, FocusEventHandler, useRef, useState } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import {
  filteredOptionsState,
  inputValueState,
  optionCursorState,
} from '@/desktop/autocomplete/states';
import { KintoneInput } from '../../../components/ui/kintone-input';

export function Autocomplete() {
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const optionCursor = useRecoilValue(optionCursorState);
  const [open, setOpen] = useState(false);
  const options = useRecoilValue(filteredOptionsState);
  const value = useRecoilValue(inputValueState);

  const onFocus = () => setOpen(true);
  const onBlur: FocusEventHandler<HTMLInputElement> = useRecoilCallback(
    ({ reset, set }) =>
      (event) => {
        setTimeout(() => {
          setOpen(false);
          reset(optionCursorState);
        }, 0);
      },
    []
  );

  const onValueChange: ChangeEventHandler<HTMLInputElement> = useRecoilCallback(
    ({ set }) =>
      (event) => {
        set(inputValueState, event.target.value);
      },
    []
  );

  const handleSelectOption = useRecoilCallback(
    ({ set }) =>
      (selectedOption: Plugin.AutocompleteOption) => {
        set(inputValueState, selectedOption.label);
        setTimeout(() => {
          inputRef?.current?.blur();
        }, 0);
      },
    []
  );

  const onKeyDown = useRecoilCallback(
    ({ set, snapshot }) =>
      async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (
          (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter') ||
          options.length === 0
        ) {
          return;
        }
        event.preventDefault();
        let optionCursor = await snapshot.getPromise(optionCursorState);
        if (event.key === 'ArrowDown') {
          optionCursor = Math.min(optionCursor + 1, options.length - 1);
        } else if (event.key === 'ArrowUp') {
          optionCursor = Math.max(optionCursor - 1, -1);
        } else if (event.key === 'Enter') {
          const selectedOption = options[optionCursor];
          if (selectedOption) {
            handleSelectOption(selectedOption);
          }
          return;
        }
        set(optionCursorState, optionCursor);
        if (optionCursor === -1) {
          return;
        }
        optionsRef.current?.scrollTo({
          top: (optionsRef.current?.children[optionCursor] as HTMLElement)?.offsetTop,
        });
      },
    [options]
  );

  return (
    <div className='relative' onBlur={onBlur}>
      <KintoneInput
        ref={inputRef}
        value={value}
        onChange={onValueChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
      />
      {open && (
        <div className='absolute top-full left-0 w-full z-50 py-2 text-sm rounded overflow-hidden bg-background/95 backdrop-blur-md border shadow-sm'>
          <div
            ref={optionsRef}
            className='overflow-y-hidden px-2 pr-2 hover:pr-0 hover:overflow-y-auto max-h-[400px]'
          >
            {options.length === 0 && (
              <div className='p-2 text-foreground/70'>候補が見つかりませんでした</div>
            )}
            {options.map((option, index) => (
              <div
                key={option.value}
                data-cursor={index === optionCursor ? '' : undefined}
                onClick={() => handleSelectOption(option)}
                onMouseDown={(event) => event.preventDefault()}
                className='p-2 rounded cursor-pointer hover:bg-foreground/5 active:bg-foreground/10 data-[cursor]:bg-foreground/5'
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
