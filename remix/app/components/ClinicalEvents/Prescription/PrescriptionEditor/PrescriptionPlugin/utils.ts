import type { MenuTextMatch } from "@lexical/react/LexicalTypeaheadMenuPlugin";
import {
  AtSignPrescriptionsRegex,
  AtSignPrescriptionsRegexAliasRegex,
} from "./PrescriptionPluginConsts";

function checkForAtSignPrescriptions(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  let match = AtSignPrescriptionsRegex.exec(text);

  if (match === null) {
    match = AtSignPrescriptionsRegexAliasRegex.exec(text);
  }
  if (match !== null) {
    // The strategy ignores leading whitespace but we need to know it's
    // length to add it to the leadOffset
    const maybeLeadingWhitespace = match[1];

    const matchingString = match[3];
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2],
      };
    }
  }
  return null;
}

export function getPossibleQueryMatch(text: string): MenuTextMatch | null {
  return checkForAtSignPrescriptions(text, 1);
}
