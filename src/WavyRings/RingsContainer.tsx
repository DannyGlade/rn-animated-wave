import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

export type RingsContainerProps = PropsWithChildren<{
  width: number;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
}>;

/**
 * RingsContainer component - default rings container
 *
 * @param {Number} width - Width of the RingsContainer
 * @param {Number} height - `Optional` Height of the RingsContainer
 * @param {Object} containerStyle - `Optional` Custom container styles
 * @param {Object} boxStyle - `Optional` Custom box styles
 * @param {ReactNode} children - `Optional` Children components
 *
 */
export default function RingsContainer({
  width,
  height,
  children,
  containerStyle,
  boxStyle,
}: RingsContainerProps) {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View
          style={[
            styles.box,
            { width: width, height: height ?? width },
            boxStyle,
          ]}
        />
        {children}
      </View>
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
});
