import React, {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Card, Container, HeaderCard, HeaderBody, HeaderFooter} from './styles';
import {scrollInterpolator, animatedStyles} from './animation';
import TextBold from '../TextBold';
import TextInfo from '../Text/index';
import Button from '../Buttom/index';
import convertSuffix from '../../config/suffix';
import {Pagination} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const CarouselComponent = ({data, navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [entries, setEntries] = useState(0);

  function pagination() {
    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'transparent'}}
        dotStyle={{
          width: 13,
          height: 13,
          borderRadius: 10,
          marginHorizontal: 8,
          backgroundColor: '#FF8686',
        }}
        inactiveDotStyle={{
          backgroundColor: 'white',
          borderColor: '#FF8686',
          borderWidth: 2,
          width: 20,
          height: 20,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    );
  }

  function renderDescription(item) {
    return (
      <>
        <TextInfo
          style={{
            color: '#707070',
            fontSize: 14,
            marginLeft: 20,
            marginTop: 2,
            fontFamily: 'HelveticaNeue Light',
          }}
          data={item}
        />
      </>
    );
  }
  function renderItems({item, index}) {
    return (
      <Card>
        <HeaderCard>
          <TextBold
            data={item.name}
            style={{
              color: '#707070',
              fontSize: 24,
              fontFamily: 'HelveticaNeue Bold',
            }}
          />
        </HeaderCard>
        <HeaderBody>
          {renderDescription(item.description)}
          <View style={{flexDirection: 'row', marginTop: 22}}>
            <TextBold
              data="Duração:"
              style={{
                color: '#707070',
                fontSize: 14,
                marginLeft: 21,
                fontFamily: 'HelveticaNeue Bold',
              }}
            />
            <TextInfo
              style={{
                color: '#707070',
                fontSize: 14,
                marginLeft: 4,
                fontFamily: 'HelveticaNeue Light',
              }}
              data={item.duration}
            />
          </View>
        </HeaderBody>
        <HeaderFooter>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '50%', marginBottom: 0}}>
              <TextInfo
                style={{color: '#707070', fontSize: 10}}
                data="Investimento:"
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TextBold
                  data="R$"
                  style={{
                    color: '#7BBDF5',
                    fontSize: 20,
                    marginTop: 2,
                    marginRight: 6,
                    fontFamily: 'HelveticaNeue Bold',
                  }}
                />
              </View>
              <View>
                <TextBold
                  data={convertSuffix(parseFloat(item.price).toFixed(2))}
                  style={{
                    color: '#7BBDF5',
                    fontSize: 30,
                    fontFamily: 'HelveticaNeue Bold',
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              color="#FF8686"
              data="Comprar"
              uppercase={false}
              style={{borderRadius: 8, width: 150, marginBottom: 10}}
              contentStyle={{height: 40, width: 147}}
              labelStyle={{
                color: 'white',
                fontFamily: 'HelveticaNeue Medium',
                fontSize: 14,
              }}
              mode="contained"
              onPress={() =>
                navigation.navigate('Payment', {
                  id: item.id,
                  price: item.price,
                  name: item.name,
                })
              }
            />
          </View>
        </HeaderFooter>
      </Card>
    );
  }
  return (
    <Container>
      <View style={{width: '80%', margin: 22}}>
        <TextBold
          data="Conheça nossos cursos:"
          style={{
            color: '#FF8686',
            fontSize: 32,
            marginTop: 10,
            fontFamily: 'HelveticaNeue Light',
          }}
        />
      </View>
      <View>
        <Carousel
          layout="default"
          data={data}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={315}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView
          enableMomentum
          renderItem={renderItems}
          activeSlideAlignment="center"
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
      {pagination()}
    </Container>
  );
};
export default CarouselComponent;

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT + 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2e5d0c',
    borderRadius: 5,
  },
});
