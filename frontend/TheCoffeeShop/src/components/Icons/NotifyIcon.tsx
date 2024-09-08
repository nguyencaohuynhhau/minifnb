import Svg, {Circle, G, Path, Polygon} from 'react-native-svg';
import {IconProps} from '.';
const NotifyIcon = (props: IconProps) => {
  const {width = 64, height = 64} = props;
  return (
    <>
      <Svg
        height={width}
        width={height}
        id='Layer_1'
        // @ts-ignore
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 512 512'
        xmlSpace='preserve'
        fill='#000000'>
        <G id='SVGRepo_bgCarrier' strokeWidth={0} />
        <G id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
        <G id='SVGRepo_iconCarrier'>
          <Circle
            // @ts-ignore
            style={{
              fill: '#00BCD4',
            }}
            cx={256}
            cy={256}
            r={244.989}
          />
          <Path
            // @ts-ignore
            style={{
              fill: '#FFC107',
            }}
            d='M256,125.523L256,125.523c-56.25,0-101.849,45.6-101.849,101.849v101.849h203.699V227.372 C357.849,171.123,312.25,125.523,256,125.523z'
          />
          <Path
            // @ts-ignore
            style={{
              fill: '#ECF0F1',
            }}
            d='M256,429.419L256,429.419c-15.203,0-27.527-12.324-27.527-27.527v-27.527h55.054v27.527 C283.527,417.095,271.203,429.419,256,429.419z'
          />
          <Polygon
            // @ts-ignore
            style={{
              fill: '#FFC107',
            }}
            points='385.376,374.366 126.624,374.366 154.151,329.222 357.849,329.222 '
          />
          <G>
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M437.019,74.981C388.667,26.63,324.38,0,256,0S123.333,26.63,74.981,74.981S0,187.619,0,256 s26.628,132.667,74.981,181.019S187.62,512,256,512s132.667-26.629,181.019-74.981S512,324.381,512,256 S485.372,123.333,437.019,74.981z M256,489.979C126.984,489.979,22.022,385.016,22.022,256S126.984,22.022,256,22.022 S489.979,126.984,489.979,256S385.016,489.979,256,489.979z'
            />
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M76.264,297.058c-1.344-5.931-7.243-9.647-13.172-8.305c-5.93,1.344-9.649,7.242-8.304,13.172 c0.743,3.278,1.575,6.572,2.474,9.795c1.358,4.869,5.781,8.055,10.6,8.055c0.979,0,1.974-0.132,2.963-0.407 c5.858-1.633,9.282-7.706,7.648-13.564C77.67,302.927,76.927,299.985,76.264,297.058z'
            />
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M125.589,110.016c-4.3-4.299-11.272-4.299-15.573,0c-38.932,38.933-60.371,90.777-60.366,145.985 c0,6.08,4.931,11.01,11.012,11.01s11.011-4.931,11.01-11.012c-0.004-49.324,19.143-95.638,53.916-130.41 C129.888,121.288,129.888,114.316,125.589,110.016z'
            />
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M401.984,110.016c-4.3-4.299-11.272-4.299-15.573,0c-4.3,4.3-4.3,11.272,0,15.573 c0.954,0.952,1.894,1.915,2.822,2.884c2.163,2.259,5.056,3.396,7.954,3.396c2.737,0,5.48-1.015,7.614-3.058 c4.392-4.206,4.543-11.176,0.338-15.568C404.101,112.157,403.05,111.083,401.984,110.016z'
            />
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M430.527,145.676c-3.25-5.14-10.052-6.674-15.19-3.422c-5.14,3.249-6.673,10.051-3.423,15.19 c27.769,43.923,35.647,97.999,21.614,148.363c-1.632,5.857,1.794,11.929,7.651,13.561c0.989,0.275,1.983,0.407,2.961,0.407 c4.819,0,9.245-3.189,10.601-8.059C470.441,255.368,461.616,194.848,430.527,145.676z'
            />
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M368.86,326.129v-98.757c0-58.517-44.766-106.769-101.849-112.322V88.637 c0-6.08-4.93-11.011-11.011-11.011c-6.081,0-11.011,4.931-11.011,11.011v26.414c-57.083,5.553-101.849,53.805-101.849,112.322 v98.757l-25.917,42.505c-2.072,3.399-2.149,7.651-0.2,11.123c1.95,3.472,5.62,5.62,9.601,5.62h90.839v16.516 c0,21.25,17.288,38.538,38.538,38.538s38.538-17.288,38.538-38.538v-16.516h90.839c3.98,0,7.651-2.148,9.601-5.62 c1.949-3.471,1.873-7.724-0.2-11.123L368.86,326.129z M165.161,227.372c0-50.088,40.75-90.839,90.839-90.839 s90.839,40.751,90.839,90.839v47.346h-87.535c-6.081,0-11.011,4.931-11.011,11.011s4.93,11.011,11.011,11.011h87.535v21.471 H165.161V227.372z M272.516,401.892c0,9.107-7.409,16.516-16.516,16.516c-9.107,0-16.516-7.409-16.516-16.516v-16.516h33.032 V401.892z M146.234,363.355l14.099-23.123h191.335l14.099,23.123H146.234z'
            />
            <Path
              // @ts-ignore
              style={{
                fill: '#231F20',
              }}
              d='M220.766,274.718h-7.341c-6.081,0-11.011,4.931-11.011,11.011s4.93,11.011,11.011,11.011h7.341 c6.081,0,11.011-4.931,11.011-11.011S226.847,274.718,220.766,274.718z'
            />
          </G>
        </G>
      </Svg>
    </>
  );
};
export default NotifyIcon;
