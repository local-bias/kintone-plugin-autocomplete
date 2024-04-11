import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';
import { srcAppFieldsState } from '../../../states/kintone';
import { getConditionPropertyState } from '../../../states/plugin';

const state = getConditionPropertyState('srcFieldCode');

const Component: FC = () => {
  const fieldCode = useRecoilValue(state);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (code: string) => {
        set(state, code);
      },
    []
  );

  return <RecoilFieldSelect state={srcAppFieldsState} onChange={onChange} fieldCode={fieldCode} />;
};

export default Component;
