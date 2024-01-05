import CommonPlugins from "@/components/GeneralComponents/AppLexical/CommonPlugins";
import DiagnosticsPlugin from "./DiagnosticsPlugin/DiagnosticsPlugin";

export default function DiagnosticEditor(): JSX.Element {
  return (
    <>
      <CommonPlugins />
      <DiagnosticsPlugin />
    </>
  );
}
