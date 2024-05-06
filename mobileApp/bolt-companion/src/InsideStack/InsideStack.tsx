import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorStack from "./DoctorStack/DoctorStack";
import SecretaryStack from "./SecretaryStack/SecretaryStack";
import AppHeader from "../GeneralComponent/AppHeader/AppHeader";
import { useMobileBoltStore } from "@/lib/stores/mobileBoltStore";
import PatientRootScreen from "./PatientStack/PatientRootScreen";
import { BoltNavigationStackType } from "@/lib/types/navigationStackType";
import DocumentScannerRootComponent from "./DocumentScannerStack/DocumentScannerRootComponent";
import DocumentScannerPageComponent from "./DocumentScannerStack/DocumentScannerPageComponent";
import PatientScannedDocumentPage from "./DocumentScannerStack/RenderPatientScannedDocuments/PatientScannedDocumentPage";
import { ReadyState } from "react-use-websocket";
import { WebsocketMessageInterface } from "@/Websockets/interfaces/WebsocketMessageInterface";
import { v4 as uuid } from "uuid";

const Stack = createNativeStackNavigator<BoltNavigationStackType>();
function InsideStack() {
  const setAppSpinnerLoading = useMobileBoltStore(
    (s) => s.setAppSpinnerLoading
  );
  const user = useMobileBoltStore((s) => s.user);
  const setPatientScannedDocuments = useMobileBoltStore(
    (s) => s.setPatientScannedDocuments
  );
  const socket = useMobileBoltStore((s) => s.socket);

  useEffect(() => {
    setAppSpinnerLoading(false);
  }, []);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{
          title: "Bolt3 companion",
          header: (props) => <AppHeader {...props} />,
        }}
        component={
          user?.mobileDeviceType == "DOCTOR" ? DoctorStack : SecretaryStack
        }
        listeners={{
          focus: (_e) => {
            if (socket?.readyState === ReadyState.OPEN) {
              let message: WebsocketMessageInterface = {
                id: uuid(),
                type: "subscribe",
                global: false,
                payload: { operation: "subscribeTo", SubscribeTo: [] },
                subscriptionIds: [],
                destination: ["consultation-list"],
              };
              socket.sendJsonMessage(message, false);
            }
          },
        }}
      />
      <Stack.Screen
        name="PatientFolder"
        options={{
          title: "Dossier de patient",
          header: (props) => <AppHeader {...props} />,
          animation: "slide_from_right",
        }}
        component={PatientRootScreen}
        initialParams={{ patient: null }}
      />
      <Stack.Screen
        name="ScanPatientDocument"
        options={{
          title: "Documents du patient",
          header: (props) => <AppHeader {...props} />,
          animation: "slide_from_right",
        }}
        component={DocumentScannerRootComponent}
        initialParams={{ patient: null }}
        listeners={{
          beforeRemove: (e) => {
            setPatientScannedDocuments([]);
          },
        }}
      />
      <Stack.Screen
        name="ScanDocument"
        options={{
          title: "Scanner un document",
          header: (props) => <AppHeader {...props} />,
          animation: "slide_from_right",
        }}
        component={DocumentScannerPageComponent}
        initialParams={{ patient: null }}
      />
      <Stack.Screen
        name="ScannedPatientDocumentsPage"
        options={{
          title: "Scanner un document",
          header: (props) => <AppHeader {...props} />,
          animation: "slide_from_right",
        }}
        component={PatientScannedDocumentPage}
        initialParams={{
          doc: undefined,
          patient: null,
        }}
      />
    </Stack.Navigator>
  );
}

export default InsideStack;
