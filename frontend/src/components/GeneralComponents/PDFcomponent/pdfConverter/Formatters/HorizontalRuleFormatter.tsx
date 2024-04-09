import { Text, View } from "@react-pdf/renderer";
import React from "react";

function HorizontalRuleFormatter() {
  return (
    <View key={Math.random()} style={{ marginRight: 15 }}>
      <Text
        style={{
          borderBottomColor: "#111827",
          borderBottomStyle: "solid",
          borderBottomWidth: 2,
          margin: 10,
          width: "100%",
        }}
      ></Text>
    </View>
  );
}

export default HorizontalRuleFormatter;
