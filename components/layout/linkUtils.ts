const phpPathPattern = /\.php(?:$|[?#])/i;

export function getPhpLinkTargetProps(href: string): {
  target?: "_blank";
  rel?: "noreferrer";
} {
  if (!phpPathPattern.test(href)) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}
