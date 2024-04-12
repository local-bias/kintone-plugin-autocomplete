import { Skeleton, Tab } from '@mui/material';
import React, { FC, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { PluginConditionTabs } from '@konomi-app/kintone-utilities-react';
import { conditionsState, tabIndexState } from '../../../states/plugin';
import { t } from '@/lib/i18n';
import { appFieldsState } from '@/config/states/kintone';

const TabLabel: FC<{ fieldCode: string }> = ({ fieldCode }) => {
  const appProperties = useRecoilValue(appFieldsState);

  const field = appProperties.find((field) => field.code === fieldCode);

  return field ? `(${field.label})` : '';
};

const TabLabelContainer: FC<{ fieldCode: string }> = ({ fieldCode }) => {
  return (
    <Suspense fallback={<Skeleton variant='text' width={80} />}>
      <TabLabel fieldCode={fieldCode} />
    </Suspense>
  );
};

const Component: FC = () => {
  const tabIndex = useRecoilValue(tabIndexState);
  const conditions = useRecoilValue(conditionsState);

  const onTabChange = useRecoilCallback(
    ({ set }) =>
      (_: any, index: number) => {
        set(tabIndexState, index);
      },
    []
  );

  return (
    <PluginConditionTabs tabIndex={tabIndex} onChange={onTabChange}>
      {conditions.map((condition, i) => (
        <Tab
          label={
            <div className='flex items-center'>
              {t('config.sidebar.tab.label')}
              {i + 1}
              <TabLabelContainer fieldCode={condition.targetFieldCode} />
            </div>
          }
          key={i}
        />
      ))}
    </PluginConditionTabs>
  );
};

export default Component;
