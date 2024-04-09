import { View } from "@react-pdf/renderer";
import React from "react";

export default function PageBreakFormatter() {
  return <View key={Math.random()} break />;
}
