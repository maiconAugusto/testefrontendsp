import React from 'react';
import {Container, Circle, View, ContainerButtom} from './styles';
import {Icon} from 'react-native-elements';
import Button from '../Buttom/index';
import TextInfo from '../Text';

const Notification = ({info, message, onPress}) => {
  return (
    <Container>
      <View>
        <TextInfo
          style={{
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'HelveticaNeue Light',
          }}
          data={info}
        />
      </View>
      <Circle>
        <Icon size={40} name="check" color="#7BBDF5" />
      </Circle>
      <View>
        <TextInfo
          style={{
            fontSize: 14,
            fontFamily: 'HelveticaNeue Light',
            textAlign: 'center',
          }}
          data={message}
        />
      </View>
      <ContainerButtom>
        <Button
          color="#FF8686"
          data="Ok"
          uppercase={false}
          style={{
            borderRadius: 8,
            width: '100%',
          }}
          contentStyle={{height: 40, width: '100%'}}
          labelStyle={{
            color: 'white',
            fontFamily: 'HelveticaNeue Medium',
            fontSize: 14,
          }}
          mode="contained"
          onPress={onPress}
        />
      </ContainerButtom>
    </Container>
  );
};
export default Notification;
