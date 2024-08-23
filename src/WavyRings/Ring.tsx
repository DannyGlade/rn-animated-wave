import { useEffect } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export type RingProps = {
  delay: number;
  width: number;
  height?: number;
  isRunning: boolean;
  style?: StyleProp<ViewStyle>;
};

const AnimatedView = Animated.createAnimatedComponent(View);

/**
 * Ring component - default ring
 * @param {Number} delay - Delay between each ring
 * @param {Number} width - Width of the Ring
 * @param {Number} height - `Optional` Height of the Ring
 * @param {Boolean} isRunning - Animation state
 * @param {Object} style - `Optional` Custom styles for the Ring
 */
export default function Ring({
  delay,
  width,
  height,
  isRunning,
  style,
}: RingProps) {
  const circle = useSharedValue(0);

  const circleStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - circle.value,
      transform: [
        {
          scale: interpolate(circle.value, [0.1, 1], [1, 2.3]),
        },
      ],
    };
  });

  useEffect(() => {
    isRunning
      ? (circle.value = withDelay(
          delay,
          withRepeat(
            withTiming(1, {
              duration: 3000,
            }),
            -1,
            false
          )
        ))
      : (circle.value = withTiming(0));
  }, [circle, delay, isRunning]);

  return (
    <AnimatedView
      style={[
        styles.ring,
        { width: width, height: height ?? width },
        circleStyle,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ring: {
    position: 'absolute',
    borderRadius: 999,
    borderWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
