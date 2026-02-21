import Link from "next/link";

import type { InstitutionalInlineNode, InstitutionalRichTextItem } from "./types";

type InstitutionalRichTextProps = {
  content: InstitutionalRichTextItem[];
};

function getInlineClasses(node: InstitutionalInlineNode) {
  const classes = ["text-inherit"];

  if (node.bold) {
    classes.push("font-bold");
  }

  if (node.italic) {
    classes.push("italic");
  }

  if (node.underline || node.link) {
    classes.push("underline", "underline-offset-2");
  }

  if (node.link) {
    classes.push(
      "transition-colors",
      "duration-200",
      "hover:text-zinc-950",
      "text-zinc-700",
    );
  }

  return classes.join(" ");
}

function renderInlineNodes(nodes: InstitutionalInlineNode[], keyPrefix: string) {
  return nodes.map((node, index) => {
    const key = `${keyPrefix}-${index}`;
    const className = getInlineClasses(node);

    if (node.link) {
      const external =
        node.link.startsWith("http://") || node.link.startsWith("https://");

      return (
        <Link
          key={key}
          href={node.link}
          className={className}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {node.text}
        </Link>
      );
    }

    return (
      <span key={key} className={className}>
        {node.text}
      </span>
    );
  });
}

export function InstitutionalRichText({ content }: InstitutionalRichTextProps) {
  return (
    <div className="space-y-5 text-[1.05rem] leading-8 text-zinc-800">
      {content.map((item, itemIndex) => {
        const previousItem = content[itemIndex - 1];

        if (item.kind === "subheading") {
          return (
            <h3
              key={`subheading-${itemIndex}`}
              className="font-helvetica-condensed text-3xl leading-tight font-black uppercase text-zinc-950"
            >
              {renderInlineNodes(item.nodes, `subheading-${itemIndex}`)}
            </h3>
          );
        }

        if (item.kind === "list") {
          const listClassName = item.ordered
            ? "list-decimal pl-6 marker:font-semibold marker:text-zinc-900"
            : "list-disc pl-6 marker:text-zinc-700";

          return (
            <ol
              key={`list-${itemIndex}`}
              className={`${listClassName} space-y-2 ${
                previousItem?.kind === "subheading" ? "-mt-3" : ""
              }`}
              aria-label="Lista institucional"
            >
              {item.items.map((listItem, listItemIndex) => (
                <li key={`list-${itemIndex}-${listItemIndex}`}>
                  {renderInlineNodes(listItem, `list-${itemIndex}-${listItemIndex}`)}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={`paragraph-${itemIndex}`}>
            {renderInlineNodes(item.nodes, `paragraph-${itemIndex}`)}
          </p>
        );
      })}
    </div>
  );
}
