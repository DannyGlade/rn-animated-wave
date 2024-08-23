import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Ring from './Ring';
import type { PropsWithChildren } from 'react';
import RingsContainer, { type RingsContainerProps } from './RingsContainer';

export type WavyRingsProps = PropsWithChildren<{
  rings: number;
  width: number;
  height?: number;
  delay: number;
  isRunning: boolean;
  ringsStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}> &
  RingsContainerProps;

/**
 * WavyRings component - default rings wrapper
 *
 * @param {Number} rings - Number of rings
 * @param {Number} width - Width of the WavyRings
 * @param {Number} height - `Optional` Height of the WavyRings
 * @param {Number} delay - Delay between each ring
 * @param {Boolean} isRunning - Animation state
 * @param {Object} containerStyle - `Optional` Custom container styles
 * @param {Object} boxStyle - `Optional` Custom box styles
 * @param {Object} ringsStyle - `Optional` Custom ring styles
 * @param {Object} childrenContainerStyle - `Optional` Custom children container styles
 * @param {ReactNode} children - `Optional` Children components
 *
 */
export default function WavyRings({
  children,
  rings,
  width,
  height,
  delay,
  isRunning,
  containerStyle,
  boxStyle,
  ringsStyle,
  childrenContainerStyle,
}: WavyRingsProps) {
  return (
    <>
      <RingsContainer
        width={width}
        height={height}
        containerStyle={containerStyle}
        boxStyle={boxStyle}
      >
        {Array.from({ length: rings }).map((_, index) => (
          <Ring
            key={index}
            delay={delay * index}
            width={width}
            height={height}
            isRunning={isRunning}
            style={[styles.ring, ringsStyle]}
          />
        ))}
        <View style={[styles.childrenBox, childrenContainerStyle]}>
          {children}
        </View>
      </RingsContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 999,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    position: 'absolute',
  },
  ring: {
    borderColor: '#4486f8',
  },
  childrenBox: {
    position: 'absolute',
    zIndex: 2,
  },
});
