import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStackParamList } from '../../App';
import { RootState } from '../../redux';
import { decrement, increment, incrementByAmount } from '../../redux/counter.slice';

interface HomeComponentProps extends NativeStackScreenProps<RootStackParamList, 'Home'> {};

function HomeComponent({navigation}: HomeComponentProps): ReactElement {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 30,
      }}>Home Screen - {count}</Text>
      <Button title="Ir a segunda pantalla" onPress={
        () => navigation.navigate('Second', {
        id: 1123,
        })} />
      <Button title="Add" onPress={() => dispatch(increment())} />
      <Button title="Rest" onPress={() => dispatch(decrement())} />
      <Button title="Add 5" onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  )
}

export default HomeComponent;