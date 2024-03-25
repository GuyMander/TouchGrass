import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomePage from "./components/WelcomePage";


// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");

//   function onInitialized(state: any, reason: ViroTrackingReason) {
//     console.log("onInitialized", state, reason);
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText("Hello Team The mega BYTES");
//     } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
//       // Handle loss of tracking
//     }
//   }

//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroText
//         text={text}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0, -1]}
//         style={styles.helloWorldTextStyle}
//       />
//     </ViroARScene>
//   );
// };

// export default () => {
//   return (
//     // <ViroARSceneNavigator
//     //   autofocus={true}
//     //   initialScene={{
//     //     scene: HelloWorldSceneAR,
//     //   }}
//     //   style={styles.f1}
//     // />
//     <View>
//       <MyComponent />
//     </View>
//   );
// };

const App = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

if (!isLoggedIn) {
  return (
    <View>
      <WelcomePage  setIsLoggedIn= {setIsLoggedIn} />
    </View>
  );
}else{
  return(<Text>this is the map</Text>)
}


  
}

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default App;