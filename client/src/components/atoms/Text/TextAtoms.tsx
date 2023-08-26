import React, { CSSProperties, useMemo } from "react";
import { TextAtom } from "./styles";

const TextAtoms = ({
  content,
  fontSize,
  fontWeight,
  color,
  customStyle,
}: {
  content: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  customStyle?: CSSProperties;
}) => {
  const style = useMemo(() => {
    return {
      fontSize,
      fontWeight,
      color,
      ...customStyle,
    };
  }, [fontSize, fontWeight, color, customStyle]);
  return <TextAtom style={style}>{content}</TextAtom>;
};

export default TextAtoms;
