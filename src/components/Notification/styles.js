import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;
export const Circle = styled.View`
  display: flex;
  width: 93px;
  align-items: center;
  justify-content: center;
  height: 93px;
  flex-direction: column;
  border: 1px solid #7bbdf5;
  border-radius: 100px;
  margin-top: 80px;
  margin-bottom: 50px;
`;
export const View = styled.View`
  padding: 0px 80px 0px 80px;
`;
export const ContainerButtom = styled.View`
  width: 100%;
  margin-top: 45%;
  padding: 20px;
`;
