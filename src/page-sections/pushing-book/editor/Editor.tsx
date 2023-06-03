import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import ExampleTheme from "./themes/ExampleTheme";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import prepopulatedText from "./SampleText";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
function Placeholder() {
  return (
    <div className="editor-placeholder">
      Play around with the Markdown plugin...
    </div>
  );
}

const editorConfig = {
  editorState: prepopulatedText,
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};
export default function Editor() {
  const a: any = <></>;
  return (
    <div className="editor">
      <LexicalComposer initialConfig={editorConfig as any}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <ListPlugin />
            <LinkPlugin />
            <CheckListPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <CodeHighlightPlugin />
          </div>
          {/* <ActionsPlugin /> */}
        </div>
      </LexicalComposer>
    </div>
  );
}
