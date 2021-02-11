import React from 'react';
import {View} from 'react-native';
import {
  Card,
  ContainerCard,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  FlagX,
  FlagY,
  ContainerFlag,
} from './styles';
import TextInfo from '../../components/Text';

const Payment = ({cardNumber, nameCard, cardValidate, cvv}) => {
  return (
    <ContainerCard>
      <Card>
        <CardHeader>
          <Chip />
          <ContainerFlag>
            <FlagX />
            <FlagY />
          </ContainerFlag>
        </CardHeader>
        <CardBody>
          <TextInfo
            style={{
              color: 'white',
              fontSize: 20,
              fontFamily: 'HelveticaNeue Bold',
            }}
            data={cardNumber === '' ? '•••• •••• •••• ••••' : cardNumber}
          />
        </CardBody>
        <CardFooter>
          <View
            style={{
              width: '50%',
              marginLeft: 20,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 8,
                  fontFamily: 'HelveticaNeue Light',
                }}
                data="Nome"
              />
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'HelveticaNeue Medium',
                }}
                data={nameCard}
              />
            </View>
            <View />
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 8,
                  fontFamily: 'HelveticaNeue Light',
                }}
                data="Validade"
              />
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'HelveticaNeue Medium',
                }}
                data={cardValidate}
              />
            </View>
            <View />
          </View>
          <View
            style={{
              width: '15%',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 8,
                  fontFamily: 'HelveticaNeue Light',
                }}
                data="CVV"
              />
              <TextInfo
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontFamily: 'HelveticaNeue Medium',
                }}
                data={cvv}
              />
            </View>
            <View />
          </View>
        </CardFooter>
      </Card>
    </ContainerCard>
  );
};
export default Payment;
