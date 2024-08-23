# rn-animated-wave

Animated rings component for React Native

## Installation

```sh
npm install react-native-reanimated
```
> please install `react-native-reanimated` to use this package.

```sh
npm install rn-animated-wave
```

## Usage

```jsx
// add import
import WavyRings from 'rn-animated-wave';

export default function App() {
  return (
    <View>
      {/* Use Component */}
      <WavyRings
        rings={7}
        width={200}
        height={200}
        delay={500}
        isRunning={true}
      >
        {/*children*/}
      </WavyRings>
    </View>
  );
}
```

## Demo
https://github.com/user-attachments/assets/642adbb9-2c81-4434-ad70-c7e26dccb043


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
