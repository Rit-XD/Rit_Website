import { TextDoc } from "alinea"

export function isEmptyTextDoc(doc: TextDoc<{}>) {
  return (
    !doc ||
    doc.length === 0 ||
    (doc[0].type === "paragraph" && doc[0].content?.length === 0)
  )
}
