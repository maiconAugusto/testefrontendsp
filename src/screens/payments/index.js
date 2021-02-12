import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Container, Row} from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Buttom';
import TextBold from '../../components/TextBold';
import TextInfo from '../../components/Text';
import {Divider} from 'react-native-elements';
import Notification from '../../components/Notification';
import convertSuffix from '../../config/suffix';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Payment = ({navigation, route}) => {
  const [success, setSuccess] = useState(false);
  const [percent] = useState(10);
  const errorMessage = 'Campo obrigatório';

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : -80;

  const {id: courseId, price: coursePrice, name: courseName} = route.params;

  function percentCalculation(value, percentX) {
    var response = parseFloat(value).toFixed(2) * (Number(percentX) / 100);
    return parseFloat(response.toFixed(2));
  }

  function applyDiscount(value, discount) {
    const response =
      parseFloat(value).toFixed(2) - parseFloat(discount).toFixed(2);
    return convertSuffix(String(response));
  }

  const validationSchema = Yup.object().shape({
    nameCard: Yup.string().required(errorMessage),
    cardNumber: Yup.string()
      .required(errorMessage)
      .min(14, errorMessage)
      .max(20, errorMessage),
    cardValidate: Yup.string().required(errorMessage).min(5, errorMessage),
    cvv: Yup.string().required(errorMessage).min(3, errorMessage),
  });

  return (
    <>
      {success ? (
        <Notification
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'Initial'}]})
          }
          info="Sucesso! Compra concluída"
          message="Você receberá um email com os detalhes da sua compra."
        />
      ) : (
        <Container keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <Formik
              onSubmit={(values) => {
                setSuccess(true);
              }}
              validationSchema={validationSchema}
              initialValues={{
                cardNumber: '',
                nameCard: '',
                cardValidate: '',
                cvv: '',
              }}>
              {({handleChange, handleSubmit, values, isValid, errors}) => (
                <>
                  <Card
                    cardNumber={values.cardNumber}
                    nameCard={values.nameCard}
                    cardValidate={values.cardValidate}
                    cvv={values.cvv}
                  />
                  <Input
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 18,
                      backgroundColor: 'white',
                    }}
                    label="Número do cartão de crédito"
                    mode="outlined"
                    setValue={handleChange('cardNumber')}
                    value={values.cardNumber}
                    returnKeyType="done"
                    error={isValid}
                    type="custom"
                    keyboardType="numeric"
                    autoFocus
                    options={{
                      mask: '9999 9999 9999 9999 9999 ',
                    }}
                  />
                  <Input
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 10,
                      backgroundColor: 'white',
                    }}
                    label="Nome"
                    mode="outlined"
                    value={values.nameCard}
                    maxLength={35}
                    error={isValid}
                    setValue={handleChange('nameCard')}
                    returnKeyType="done"
                    keyboardType="default"
                    numberOfLines={30}
                    autoCapitalize="characters"
                  />
                  <Row>
                    <Input
                      style={{
                        marginTop: 10,
                        width: '48%',
                        marginRight: 10,
                        backgroundColor: 'white',
                      }}
                      label="Validade"
                      mode="outlined"
                      type="custom"
                      error={isValid}
                      value={values.cardValidate}
                      setValue={handleChange('cardValidate')}
                      returnKeyType="done"
                      keyboardType="numeric"
                      options={{
                        mask: '99/99',
                      }}
                    />
                    <Input
                      style={{
                        marginTop: 10,
                        width: '40%',
                        backgroundColor: 'white',
                      }}
                      label="CVV"
                      mode="outlined"
                      value={values.cvv}
                      error={isValid}
                      setValue={handleChange('cvv')}
                      type="custom"
                      maxLength={3}
                      returnKeyType="done"
                      keyboardType="numeric"
                      options={{
                        mask: '999',
                      }}
                    />
                  </Row>
                  <Divider
                    style={{
                      backgroundColor: '#CCCCCC',
                      marginTop: 26,
                      marginBottom: 14,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  />
                  <Row
                    style={{
                      justifyContent: 'space-between',
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 12,
                    }}>
                    <TextInfo
                      style={{
                        color: '#707070',
                        fontSize: 14,
                        fontFamily: 'HelveticaNeue Light',
                      }}
                      data={courseName}
                    />
                    <TextInfo
                      style={{
                        color: '#707070',
                        fontSize: 14,
                        marginTop: 2,
                        fontFamily: 'HelveticaNeue Light',
                      }}
                      data={convertSuffix(parseFloat(coursePrice).toFixed(2))}
                    />
                  </Row>
                  <Row
                    style={{
                      justifyContent: 'space-between',
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: -8,
                    }}>
                    <TextInfo
                      style={{
                        color: '#707070',
                        fontSize: 14,
                        fontFamily: 'HelveticaNeue Light',
                      }}
                      data={`Desconto ${percent}%`}
                    />
                    <TextInfo
                      style={{
                        color: '#FF8686',
                        fontSize: 14,
                        marginTop: 2,
                        fontFamily: 'HelveticaNeue Light',
                      }}
                      data={`- ${convertSuffix(
                        String(percentCalculation(coursePrice, percent)),
                      )}`}
                    />
                  </Row>
                  <Divider
                    style={{
                      backgroundColor: '#CCCCCC',
                      marginTop: 15,
                      marginBottom: 20,
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  />
                  <Row
                    style={{
                      justifyContent: 'space-between',
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    <TextBold
                      data="Total:"
                      style={{
                        color: '#707070',
                        fontSize: 20,
                        fontFamily: 'HelveticaNeue Bold',
                      }}
                    />
                    <TextBold
                      data={` R$ ${applyDiscount(
                        coursePrice,
                        percentCalculation(coursePrice, percent),
                      )}`}
                      style={{
                        color: '#707070',
                        fontSize: 20,
                        fontFamily: 'HelveticaNeue Bold',
                      }}
                    />
                  </Row>
                  <Row style={{margin: 20}}>
                    <Button
                      action={handleSubmit}
                      disabled={!isValid}
                      color="#FF8686"
                      data="Pagar"
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
                    />
                  </Row>
                </>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
};
export default Payment;
