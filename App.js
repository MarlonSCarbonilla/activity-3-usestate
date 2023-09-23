import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles"; 

const Main = () => {
  const [main, setmain] = useState(false);
  const [flight, setflight] = useState(false);
  const [counter, setcounter] = useState(false);
  const [back, setBack] = useState(false);

  const tomain = () => {
    setmain(true);
    setflight(false);
    setcounter(false);
    setBack(false);
  };
  const toflight = () => {
    setmain(false);
    setflight(true);
    setcounter(false);
    setBack(true);
  };
  const tocounter = () => {
    setmain(false);
    setflight(false);
    setcounter(true);
    setBack(true);
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button
          title="F-LIGHT"
          disabled={flight || counter}
          onPress={toflight}
        />
        <Button
          title="COUNTER"
          disabled={flight || counter}
          onPress={tocounter}
        />
      </View>
      <View style={styles.body}>
        {flight && <Flight />}
        {counter && <Counter />}
      </View>
      <View style={styles.btn}>
        {back && <Button title="BACK" onPress={tomain} />}
      </View>
    </View>
  );
};

const Flight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("ON");

  const toImage = () => {
    setimage(!image);
    setText(image ? "ON" : "OFF");
  };

  return (
    <View>
      {image ? (
        <Image
          source={require("./assets/off.png")}
          style={{
            width: 150,
            height: 150,
            resizeMode: "stretch",
            marginVertical: 20,
          }}
        />
      ) : (
        <Image
          source={require("./assets/on.png")}
          style={{
            width: 150,
            height: 150,
            resizeMode: "stretch",
            marginVertical: 20,
          }}
        />
      )}
      <Button title={text} onPress={toImage} color={text === "ON" ? "green" : "red"} />
    </View>
  );
};

const Counter = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = (increment) => {
    setNumber(number + increment);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button
          title="-1"
          onPress={() => incrementNumber(-1)}
          color="red"
          disabled={number === 0}
        />
        <Button title="+1" onPress={() => incrementNumber(1)} color="green" />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}
