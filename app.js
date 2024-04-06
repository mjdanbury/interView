import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { exampleSetup } from "prosemirror-example-setup";

const editorSchema = new Schema({
  nodes: schema.spec.nodes,
  marks: schema.spec.marks,
});

const editorState = EditorState.create({
  schema: editorSchema,
  plugins: exampleSetup({ schema: editorSchema }),
});

const editorView = new EditorView(document.querySelector("#editor"), {
  state: editorState,
});
