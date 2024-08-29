# rn-animated-wave

Animated rings component for React Native

Made by [DannyGlade](https://github.com/DannyGlade)

## Demo
https://github.com/user-attachments/assets/642adbb9-2c81-4434-ad70-c7e26dccb043

## Installation

> please install `react-native-reanimated` to use this package.
```sh
npm install react-native-reanimated
```
OR
> if using expo
```sh
npx expo install react-native-reanimated
```

---

```sh
npm install rn-animated-wave
```

## Ready to use component

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

# Customize your waves
```jsx
// Container to contain the rings
import { RingsContainer, Ring } from 'rn-animated-wave';

export default function App() {
  return (
    <View>
      {/* Use Container */}
      <RingsContainer width={100} height={100}>
        {/* Use and style individual Rings */}
        <Ring delay={0} width={100} height={100} isRunning={true} />
        <Ring delay={500} width={100} height={100} isRunning={true} />

        {/* Content to show inside Box/Circle */}
        <View
          style={{
            position: 'absolute',
            zIndex: 2,
          }}
        >
          <Text>Box</Text>
        </View>
      </RingsContainer>
    </View>
  );
}

```

### WavyRings Component
Premade ready to use rings component

| Props | Description | Required | Default |
| :---- | :---------------------------- | :------- | ------- |
| rings | number of rings to display | yes | -- |
| width | width of the visible Box/Circle | yes | -- |
| height | height of the visible Box/Circle | no | width |
| delay | delay in miliseconds between each ring's animation | yes | -- |
| isRunning | boolean to toggle animation | yes | -- |
| ringsStyle | stylesheet object to style every ring | no | -- |
| containerStyle | stylesheet object to style the parent wrapper | no | -- |
| boxStyle | stylesheet object to style the visible shape | no | -- |
| childrenContainerStyle | stylesheet object to style children wrapper | no | -- |

### RingsContainer Component
A wrapper to use if you wish to customize your individual rings

| Props | Description | Required | Default |
| :---- | :---------------------------- | :------- | ------- |
| width | width of the visible Box/Circle | yes | -- |
| height | height of the visible Box/Circle | no | width |
| containerStyle | stylesheet object to style the parent wrapper | no | -- |
| boxStyle | stylesheet object to style the visible shape | no | -- |

### Ring Component
Animated ring component

| Props | Description | Required | Default |
| :---- | :---------------------------- | :------- | ------- |
| delay | delay in miliseconds between each ring's animation | yes | -- |
| width | width of the visible Box/Circle | yes | -- |
| height | height of the visible Box/Circle | no | width |
| isRunning | boolean to toggle animation | yes | -- |
| style | stylesheet object to style the ring | no | -- |


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
