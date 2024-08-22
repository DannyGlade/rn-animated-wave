import { StyleSheet, View } from 'react-native';
import Ring from './Ring';
import type { PropsWithChildren } from 'react';

export type WavyRingsProps = PropsWithChildren<{
  rings: number;
  width: number;
  height?: number;
  delay: number;
  isRunning: boolean;
}>;

const WavyRings = ({
  children,
  rings,
  width,
  height,
  delay,
  isRunning,
}: WavyRingsProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.box, { width: width, height: height ?? width }]} />
        {Array.from({ length: rings }).map((_, index) => (
          <Ring
            key={index}
            delay={delay * index}
            width={width}
            height={height}
            isRunning={isRunning}
          />
        ))}
        <View style={styles.childrenBox}>{children}</View>
      </View>
    </>
  );
};

export default WavyRings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  childrenBox: {
    position: 'absolute',
    zIndex: 2,
  },
});
