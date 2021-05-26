import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #efefef;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
export const CurrentDay = styled.View`
  position: relative;
  flex: 10;
  margin-top: 60px;
  align-items: center;
`;

export const City = styled.Text`
  font-size: 22px;
  font-weight: 300;
  color: black;
  padding-bottom: 20px;
`;
export const BigText = styled.Text`
  font-size: 35px;
  font-weight: 100;
  color: black;
  padding-bottom: 20px;
`;

export const BigIcon = styled.Image`
  width: 168px;
  height: 168px;
  padding-bottom: 40px;
`;

export const Temp = styled.Text`
  font-size: 80px;
  font-weight: 100;
  
  color: black;
`;
export const Description = styled.Text`
  font-size: 24px;
  font-weight: 100;
  color: black;
  padding-top: 20px;
`;

export const Week = styled.ScrollView`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  position: absolute;
  background: #BCD0C7;
`;

export const Day = styled.View`
  height: 150px;
  width: 75px;
  justify-content: center;
  align-items: center;
`;

export const SmallIcon = styled.Image`
  width: 50px;
  height: 50px;
`;
export const SmallText = styled.Text`
  font-size: 20px;
  font-weight: 300;
  color: black;
`;

export const header = styled.Text`
  font-size: 25px,
  margin-top: 20px,
  align-items: center,
  color: #fff
`;
