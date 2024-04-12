import { Autocomplete } from '@/desktop/autocomplete/components/autocomplete';
import { PluginErrorBoundary } from '@/lib/components/error-boundary';
import { ThemeProvider } from '@/lib/components/theme-provider';
import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { useOptionsInitializer } from './hooks/use-options-initializer';
import { pluginConditionState } from './states';

const Component: FC = () => {
  useOptionsInitializer();
  return <Autocomplete />;
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
