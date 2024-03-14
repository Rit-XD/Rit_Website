import {Node, TextDoc} from 'alinea/core/TextDoc'

export function isEmptyTextDoc(doc: TextDoc) {
  if (!doc || doc.length === 0) return true
  if (doc.length > 1) return false
  const first = doc[0]
  const emptyParagraph =
    Node.isElement(first) &&
    first._type === 'paragraph' &&
    first.content?.length === 0
  return emptyParagraph
}
