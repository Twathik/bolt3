import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { type RawDocumentSettingsInterface } from "@/lib/generalUtils/getDocumentSettings";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";

function PaddingSlider({
  title,
  paddingType,
  rawSettings,
  setSettings,
  size,
  settingsId,
  disabled,
}: {
  title: string;
  paddingType: "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight";
  rawSettings: RawDocumentSettingsInterface;
  setSettings: React.Dispatch<
    React.SetStateAction<RawDocumentSettingsInterface>
  >;
  size: "A4" | "A5";
  settingsId: string;
  disabled: boolean;
}) {
  const [value, setValue] = useState([
    rawSettings.paddings[`${size}${paddingType}`],
  ]);

  const save = useCallback(
    async (value: number[]) => {
      setSettings((raw) => {
        const v: RawDocumentSettingsInterface = {
          paddings: { ...raw.paddings },
          urls: { ...raw.urls },
        };
        v.paddings[`${size}${paddingType}`] = value[0];
        return v;
      });
    },
    [paddingType, setSettings, size]
  );
  const debounced = React.useRef(debounce(save, 500));

  const onChange = useCallback((value: number[]) => setValue([value[0]]), []);
  useEffect(() => {
    debounced.current(value);
  }, [value]);
  return (
    <div>
      <div className="flex flex-col gap-4 mt-5 mx-14">
        <Label htmlFor={paddingType}>
          {title} : {value} mm
        </Label>
        <Slider
          id={paddingType}
          value={value}
          min={5}
          max={60}
          step={1}
          onValueChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default PaddingSlider;
