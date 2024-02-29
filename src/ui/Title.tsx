import { Variant } from "@/utils/styler";
import { fromModule } from "@/utils/styler/Styler";
import React, { HTMLProps } from "react";
import css from "./Title.module.scss";

const styles = fromModule(css);

type HeadingMods = Variant<"inherit" | "black" | "blue">;
type Heading = React.FC<
  HTMLProps<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5";
    mod?: HeadingMods;
  }
>;

const H1: Heading = ({ as: Tag = "h1", mod, ...props }) => (
  <Tag
    {...props}
    className={styles.title.mod("h1").mod(mod).mergeProps(props)()}
  />
);
const H2: Heading = ({ as: Tag = "h2", mod, ...props }) => (
  <Tag
    {...props}
    className={styles.title.mod("h2").mod(mod).mergeProps(props)()}
  />
);
const H3: Heading = ({ as: Tag = "h3", mod, ...props }) => (
  <Tag
    {...props}
    className={styles.title.mod("h3").mod(mod).mergeProps(props)()}
  />
);
const H4: Heading = ({ as: Tag = "h4", mod, ...props }) => (
  <Tag
    {...props}
    className={styles.title.mod("h4").mod(mod).mergeProps(props)()}
  />
);
const H5: Heading = ({ as: Tag = "h5", mod, ...props }) => (
  <Tag
    {...props}
    className={styles.title.mod("h5").mod(mod).mergeProps(props)()}
  />
);

export const Title = { H1, H2, H3, H4, H5 };
