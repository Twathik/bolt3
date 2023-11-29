import { StyleSheet } from "@react-pdf/renderer";

export const globalStyles = StyleSheet.create({
  container: {},
  inline: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    fontFamily: "Arial",
    fontSize: "12px",
    lineHeight: 2,
  },
  bold: {
    fontWeight: "black",
  },
  italic: {
    fontStyle: "italic",
  },
  boldAndItalic: {
    fontWeight: "black",
    fontStyle: "italic",
  },
  superScript: {
    verticalAlign: "super",
    fontSize: "8px",
  },
  subScript: {
    verticalAlign: "sub",
    fontSize: "8px",
  },
  underLined: {
    textDecoration: "underline",
  },
  link: {
    color: "rgb(33, 111, 219)",
    textDecoration: "underline",
  },
  lineThrow: {
    textDecoration: "line-through",
  },
  textCode: {
    backgroundColor: "rgb(240, 242, 245)",
    padding: "1px",
    fontFamily: "MonoSpace",
  },
});

export const getStyle = (format: number) => {
  let style: { [key: string]: any } = { ...globalStyles.inline };

  switch (format) {
    case 1:
      return { ...style, ...globalStyles.bold };
    case 2:
      return { ...style, ...globalStyles.italic };
    case 3:
      return { ...style, ...globalStyles.boldAndItalic };
    case 4:
      return { ...style, ...globalStyles.lineThrow };
    case 5:
      return { ...style, ...globalStyles.lineThrow, ...globalStyles.bold };
    case 6:
      return { ...style, ...globalStyles.lineThrow, ...globalStyles.italic };
    case 7:
      return {
        ...style,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };

    case 8:
      return { ...style, ...globalStyles.underLined };
    case 9:
      return { ...style, ...globalStyles.underLined, ...globalStyles.bold };
    case 10:
      return { ...style, ...globalStyles.underLined, ...globalStyles.italic };
    case 11:
      return {
        ...style,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 12:
      return {
        ...style,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
      };
    case 13:
      return {
        ...style,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 14:
      return {
        ...style,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 15:
      return {
        ...style,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 16:
      return {
        ...style,
        ...globalStyles.textCode,
      };
    case 17:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.bold,
      };
    case 18:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.italic,
      };
    case 19:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.boldAndItalic,
      };
    case 20:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.lineThrow,
      };
    case 21:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 22:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 23:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 24:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
      };
    case 25:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 26:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 27:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 28:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
      };
    case 29:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 30:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 31:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };

    case 32:
      return { ...style, ...globalStyles.subScript };
    case 33:
      return { ...style, ...globalStyles.subScript, ...globalStyles.bold };
    case 34:
      return { ...style, ...globalStyles.subScript, ...globalStyles.italic };
    case 35:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.boldAndItalic,
      };
    case 36:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
      };
    case 37:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 38:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 39:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 40:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
      };
    case 41:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 42:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 43:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 44:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
      };
    case 45:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 46:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 47:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 48:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
      };
    case 49:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.bold,
      };
    case 50:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.italic,
      };
    case 51:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.boldAndItalic,
      };
    case 52:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
      };
    case 53:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 54:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 55:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 56:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
      };
    case 57:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 58:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 59:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 60:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
      };
    case 61:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 62:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 63:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 64:
      return { ...style, ...globalStyles.superScript };
    case 65:
      return { ...style, ...globalStyles.superScript, ...globalStyles.bold };
    case 66:
      return { ...style, ...globalStyles.superScript, ...globalStyles.italic };
    case 67:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.boldAndItalic,
      };
    case 68:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
      };
    case 69:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 70:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 71:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 72:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
      };
    case 73:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 74:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 75:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 76:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
      };
    case 77:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 78:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 79:
      return {
        ...style,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 80:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
      };
    case 81:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.bold,
      };
    case 82:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.italic,
      };
    case 83:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.boldAndItalic,
      };
    case 84:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
      };
    case 85:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 86:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 87:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 88:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
      };
    case 89:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 90:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 91:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 92:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
      };
    case 93:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 94:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 95:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 96:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
      };
    case 97:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.bold,
      };
    case 98:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.italic,
      };
    case 99:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.boldAndItalic,
      };
    case 100:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
      };
    case 101:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 102:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 103:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 104:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
      };
    case 105:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.bold,
      };
    case 106:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.italic,
      };
    case 107:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.boldAndItalic,
      };
    case 108:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
      };
    case 109:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 110:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 111:
      return {
        ...style,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 112:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
      };
    case 113:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.bold,
      };
    case 114:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.italic,
      };
    case 115:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.boldAndItalic,
      };
    case 116:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
      };
    case 117:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 118:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 119:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    case 120:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
      };
    case 121:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.bold,
        ...globalStyles.underLined,
      };
    case 122:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.italic,
        ...globalStyles.underLined,
      };
    case 123:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.boldAndItalic,
        ...globalStyles.underLined,
      };
    case 124:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
      };
    case 125:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.bold,
      };
    case 126:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.italic,
      };
    case 127:
      return {
        ...style,
        ...globalStyles.textCode,
        ...globalStyles.subScript,
        ...globalStyles.superScript,
        ...globalStyles.underLined,
        ...globalStyles.lineThrow,
        ...globalStyles.boldAndItalic,
      };
    default:
      return style;
  }
};
