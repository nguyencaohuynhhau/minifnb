import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '.';
const CoffeeTeaIcon = (props: IconProps) => {
  const {width = 64, height = 64} = props;
  return (
    <>
      <Svg
        width={width}
        height={height}
        viewBox='-9.04 0 92.9246 92.9246'
        // @ts-ignore
        xmlns='http://www.w3.org/2000/svg'
        fill='#000000'>
        <G id='SVGRepo_bgCarrier' strokeWidth={0} />
        <G id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
        <G id='SVGRepo_iconCarrier'>
          <G id='Layer_2' data-name='Layer 2'>
            <G id='Layer_1-2' data-name='Layer 1'>
              <G id='Coffee_Icon' data-name='Coffee Icon'>
                <Path
                  id='Coffee_Cup'
                  data-name='Coffee Cup'
                  d='M6.178,17.986a6.233,6.233,0,0,1,6.19643-6.9074H62.46275A6.233,6.233,0,0,1,68.65908,17.986L61.10845,87.36586a6.23293,6.23293,0,0,1-6.19656,5.55874H19.92509a6.233,6.233,0,0,1-6.19642-5.55874Z'
                  // @ts-ignore
                  style={{
                    fill: '#7b7b7b',
                  }}
                />
                <Path
                  id='Lid'
                  d='M69.34614,6.984H67.72467V5.4909A5.49109,5.49109,0,0,0,62.23353,0H12.75319a5.491,5.491,0,0,0-5.491,5.4909V6.984H5.491A5.491,5.491,0,0,0,0,12.475v2.98816a5.491,5.491,0,0,0,5.491,5.491H69.34614a5.49091,5.49091,0,0,0,5.4909-5.491V12.475A5.49091,5.49091,0,0,0,69.34614,6.984Z'
                  // @ts-ignore
                  style={{
                    fill: '#98c7eb',
                  }}
                />
                <G id='Cup_Sleeve' data-name='Cup Sleeve'>
                  <Path
                    id='Cup_Sleeve-2'
                    data-name='Cup Sleeve'
                    d='M3.57687,43.06086a5.491,5.491,0,0,1,5.44954-6.16461H65.95725a5.49092,5.49092,0,0,1,5.44954,6.16461L68.31857,68.04453A5.491,5.491,0,0,1,62.869,72.86192H12.11467a5.491,5.491,0,0,1-5.44952-4.81739Z'
                    // @ts-ignore
                    style={{
                      fill: '#edaea3',
                    }}
                  />
                  <Path
                    id='Heart'
                    d='M37.5316,63.53239l-1.29778-1.2902C31.41349,58.00292,28.26174,55.146,28.26174,51.644a5.01153,5.01153,0,0,1,5.09842-5.06869,5.58418,5.58418,0,0,1,4.17144,1.93532A5.58414,5.58414,0,0,1,41.703,46.57534,5.01153,5.01153,0,0,1,46.80145,51.644c0,3.502-3.15175,6.35889-7.97207,10.59816Z'
                    // @ts-ignore
                    style={{
                      fill: '#ff7878',
                    }}
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
      </Svg>
    </>
  );
};
export default CoffeeTeaIcon;
