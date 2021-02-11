import React from 'react';
import {TextInput} from 'react-native-paper';
import {TextInputMask} from 'react-native-masked-text';

const Input = ({
  value,
  setValue,
  keyboardType,
  returnKeyType,
  label,
  style,
  mode,
  maxLength,
  type,
  autoCapitalize,
  options,
  autoFocus,
  error,
}) => {
  return (
    <>
      {type === undefined ? (
        <TextInput
          autoFocus={autoFocus === undefined ? false : autoFocus}
          mode={mode}
          selectionColor="#707070"
          label={label}
          error={!error}
          theme={{
            colors: {
              primary: '#707070',
              underlineColor: 'red',
              error: '#FF8686',
            },
          }}
          style={{...style}}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCapitalize={
            autoCapitalize === undefined ? 'none' : autoCapitalize
          }
        />
      ) : (
        <TextInput
          mode={mode}
          theme={{
            colors: {
              primary: '#707070',
              underlineColor: 'transparent',
              error: '#FF8686',
            },
          }}
          selectionColor="#707070"
          label={label}
          error={!error}
          style={{...style}}
          value={value}
          onChangeText={(text) => setValue(text)}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          render={(props) => (
            <TextInputMask {...props} options={options} type={type} />
          )}
        />
      )}
    </>
  );
};
export default Input;
