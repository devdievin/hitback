import CodeEditor from "@uiw/react-textarea-code-editor";

// Styles
import { colors } from "../../styles/colors";

type CodeEditorProps = {
  value: string | number | readonly string[] | undefined;
  language: string | undefined;
  placeholder?: string | undefined;
  padding?: number | undefined;
  theme?: "dark" | "light";
  style?: React.CSSProperties;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function CodeEditorComponent({
  value = "",
  language = "js",
  placeholder = "Please enter JS code.",
  padding = 15,
  theme = "dark",
  style = {
    width: "100%",
    height: "100%",
    borderRadius: "0.375rem",
    fontSize: 14,
    backgroundColor: theme === "dark" ? colors.darkOne : colors.pacificGray,
    color: theme === "dark" ? colors.softWhite : colors.darkTwo,
    fontFamily:
      "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
    overflowY: "auto",
  },
  required = true,
  onChange,
}: CodeEditorProps) {
  return (
    <CodeEditor
      data-color-mode={theme}
      value={value}
      language={language}
      placeholder={placeholder}
      onChange={onChange}
      padding={padding}
      style={style}
      required={required}
    />
  );
}
