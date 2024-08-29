import { ScrollView, StyleSheet, Text } from 'react-native';
import WavyRings from 'rn-animated-wave';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WavyRings
        rings={7}
        width={200}
        height={200}
        delay={500}
        isRunning={true}
      >
        <Text style={styles.header}>Wavy Rings</Text>
        <Text style={styles.footer}>By DannyGlade</Text>
      </WavyRings>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    color: 'rgba(0, 0, 0, 0.8)',
  },
  footer: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
