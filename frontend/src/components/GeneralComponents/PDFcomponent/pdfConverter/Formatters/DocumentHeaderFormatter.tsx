import React from "react";
import type { PdfCheckerProps } from "../PdfCheckerInterface";
import { View, Text } from "@react-pdf/renderer";
import { InlineStyle } from "../DefaultStyles";
import { parseISO, format } from "date-fns";
import { generatePDFDocumentTitles } from "@/lib/utils/generatePDFDocumentTitles";
import type { mainDb_EventTypesValues } from "@/components/wg-generated/models";

function DocumentHeaderFormatter({ patient, content }: PdfCheckerProps) {
  const ddn = patient ? format(parseISO(patient.ddn), "dd-MM-yyyy") : "";
  return (
    <View>
      <View
        style={{
          ...InlineStyle,
          margin: 16,
          borderRadius: 10,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          padding: 10,
          borderColor: "#000",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "70%" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "black" }}>Nom :</Text>
            <Text style={{}}>{patient?.lastName}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "black" }}>Prenom :</Text>
            <Text style={{}}>{patient?.firstName}</Text>
          </View>
        </View>
        <View style={{ width: "30%" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "black" }}>DDN :</Text>
            <Text style={{}}>{ddn}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontWeight: "black" }}>Date :</Text>
            <Text style={{ fontWeight: "black" }}>
              {content.createdAt as string}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          ...InlineStyle,
          fontSize: "14px",
          display: "flex",
          padding: 3,
          marginHorizontal: "15%",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderWidth: 1,
          backgroundColor: "#f1f5f9",
          borderRadius: 5,
          borderColor: "#0f172a",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "black" }}>
          {generatePDFDocumentTitles({
            eventType: content.documentType as mainDb_EventTypesValues,
          })}
        </Text>
      </View>
    </View>
  );
}

export default DocumentHeaderFormatter;
