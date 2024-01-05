/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import CommonPlugins from "@/components/GeneralComponents/AppLexical/CommonPlugins";

export default function SonoEditor(): JSX.Element {
  /* const [editor] = useLexicalComposerContext();

  const onClick = useCallback(() => {
    editor.dispatchCommand(INSERT_SONO_LEFT_VG_FUNC_TABLE, {
      rows: generateDataTableRows({ configuration: LVFunctionConfig }),
    });
  }, [editor]); */

  return (
    <>
      {/* <div className="flex justify-end">
        <Button onClick={onClick}>Ajouter un tableau</Button>
      </div> */}
      <CommonPlugins />
    </>
  );
}
