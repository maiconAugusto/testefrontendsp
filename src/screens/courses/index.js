/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Container} from './styles';
import Loading from '../../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from '../../components/carousel/carousel';
import Pressable from '../../components/Pressable';
import TextInfo from '../../components/Text';
import * as ACTION_COURSE from '../../store/actions/course';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course.list);
  const loading = useSelector((state) => state.course.loading);
  const error = useSelector((state) => state.course.error);

  function getDataCourse() {
    dispatch(ACTION_COURSE.RESQUEST());
  }

  useEffect(() => {
    getDataCourse();
  }, []);

  if (loading) {
    return (
      <Container>
        <Loading color="#FF8686" size="large" style={{marginTop: 40}} />
      </Container>
    );
  }

  if (error === null) {
    return (
      <Container style={{alignItems: 'center'}}>
        <TextInfo
          style={{
            color: '#707070',
            fontSize: 14,
            marginTop: 40,
            fontFamily: 'HelveticaNeue Bold',
          }}
          data="Ops! não foi possível buscar os dados!"
        />
        <Pressable
          onPress={() => getDataCourse()}
          data="Tentar novamente"
          style={{
            color: '#707070',
            fontSize: 14,
            marginTop: 20,
            fontFamily: 'HelveticaNeue Medium',
          }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Carousel data={courses} navigation={navigation} />
    </Container>
  );
};
export default Home;
