"use client";
import React from "react";

import { Document, Page, Text, View } from "@react-pdf/renderer";

import { createTw } from "react-pdf-tailwind";

// The 'theme' object is your Tailwind theme config
const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

function DocumentView() {
  return (
    <Document>
      <Page size="A4" style={tw("p-12 font-sans h-full w-full bg-slate-300")}>
        <View style={tw("p-20 bg-gray-100")}>
          <Text style={tw("text-custom text-3xl")}>Section #1</Text>
        </View>
        <View style={tw("mt-12 px-8 rotate-2")}>
          <Text style={tw("text-amber-600 text-2xl")}>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

export default DocumentView;
