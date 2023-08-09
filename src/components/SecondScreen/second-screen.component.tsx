import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react';
import { RootStackParamList } from '../../App';
import { MyTabsComponent } from '../MyTabs';

type SecondScreenComponentProps = NativeStackScreenProps<RootStackParamList, 'Second'>;

function SecondScreenComponent({route}: SecondScreenComponentProps): ReactElement {
  const { id } = route.params;
  console.log(id);
  return (
    <MyTabsComponent />
  )
}

export default SecondScreenComponent;