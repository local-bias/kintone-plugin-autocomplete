import { Autocomplete } from '@/components/autocomplete';
import { PluginErrorBoundary } from '@/lib/components/error-boundary';
import { ThemeProvider } from '@/lib/components/theme-provider';
import React, { FC, useState } from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { useOptionsInitializer } from './hooks/use-options-initializer';
import { autoCompleteOptionsState, pluginConditionState } from './states';
import { getCurrentRecord, setCurrentRecord } from '@konomi-app/kintone-utilities';

const Input: FC = () => {
  const condition = useRecoilValue(pluginConditionState);
  const [value, setValue] = useState<{ label: string; value: string } | undefined>(undefined);
  const options = useRecoilValue(autoCompleteOptionsState);

  const onValueChange = (value: { label: string; value: string }) => {
    console.log('new value', value);
    setValue(value);
    if (!condition) {
      return;
    }

    const { targetFieldCode } = condition;
    const { record } = getCurrentRecord();

    record[targetFieldCode].value = value.value;
    setCurrentRecord({ record });
  };

  return (
    <Autocomplete
      value={value}
      onValueChange={onValueChange}
      options={options}
      emptyMessage='候補が存在しません'
    />
  );
};

const Component: FC = () => {
  useOptionsInitializer();
  return <Input />;
};

const Container: FC<{ condition: Plugin.Condition }> = ({ condition }) => (
  <RecoilRoot
    initializeState={({ set }) => {
      set(pluginConditionState, condition);
    }}
  >
    <ThemeProvider>
      <PluginErrorBoundary>
        <div className='🐸'>
          <Component />
        </div>
      </PluginErrorBoundary>
    </ThemeProvider>
  </RecoilRoot>
);

export default Container;
