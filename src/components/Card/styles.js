import styled from 'styled-components/native';

export const ContainerCard = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Card = styled.View.attrs({
  shadowColor: '#707070',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.28,
  shadowRadius: 5.65,
  elevation: 10,
})`
  width: 82%;
  display: flex;
  flex-direction: column;
  height: 184px;
  margin-top: 20px;
  background-color: #7bbdf5;
  border-radius: 8px;
`;
export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 14px 0px 25px;
  width: 100%;
  height: 35%;
`;
export const CardBody = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35%;
  margin-left: 25px;
`;
export const CardFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30%;
`;
export const Chip = styled.View`
  width: 31px;
  height: 22px;
  border-radius: 4px;
  background-color: #ffdc7e;
`;
export const ContainerFlag = styled.View`
  display: flex;
  flex-direction: row;
`;
export const FlagX = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background-color: #ff8686;
`;
export const FlagY = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background-color: #ffdc7e;
  position: relative;
  right: 10px;
`;
