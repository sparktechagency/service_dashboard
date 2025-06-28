/* eslint-disable @typescript-eslint/no-explicit-any */
import JoditEditor from "jodit-react";
import { Controller } from "react-hook-form";

type TProps = {
  label: string;
  name: string;
  height?: number;
  control: any;
};

const CustomQuilEditor = ({ label, name, control, height = 200 }: TProps) => {
  const config = {
    readonly: false,
    height: height,
    placeholder: "Start writing your privacy policy...",
    buttons: [
      "source",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "ul",
      "ol",
      "|",
      "font",
      "fontsize",
      "paragraph",
      "|",
      "table",
      "link",
      "|",
      "undo",
      "redo",
      "|",
      "hr",
      "eraser",
      "fullsize",
    ],
    toolbarAdaptive: false,
  };

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <JoditEditor
                value={value || ""}
                config={config}
                onBlur={() => {}}
                onChange={(newContent) => onChange(newContent)}
              />
              {error && (
                <p className="text-red-600 text-sm mt-1">{error.message}</p>
              )}
            </>
          )}
        />
      </div>
    </>
  );
};

export default CustomQuilEditor;
