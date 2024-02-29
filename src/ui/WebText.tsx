import { fromModule } from "@/utils/styler/Styler"
import { Schema } from "alinea"
import { RichText, RichTextProps } from "alinea/ui/RichText"
import Link from "next/link"
import React from "react"
import css from "./WebText.module.scss"
import { isEmptyTextDoc } from "@/utils/textDoc"

const styles = fromModule(css)

const Anchor: React.FC<any> = ({ children, ...props }) => {
  if (props["data-entry"] && props.href) {
    return (
      <Link className={styles.link()} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a className={styles.link()} {...props}>
      {children}
    </a>
  )
}

export function WebText<T extends Schema>(
  props: RichTextProps<T> & { className?: string }
) {
  if (isEmptyTextDoc(props.doc)) return null
  return (
    <div className={styles.webtext.with(props.className)()}>
      <RichText
        p={<p />}
        b={<b />}
        h1={<h1 />}
        h2={<h2 />}
        h3={<h3 />}
        h4={<h4 />}
        h5={<h5 />}
        ol={<ol />}
        ul={<ul />}
        li={<li />}
        a={<Anchor />}
        {...props}
      />
    </div>
  )
}
