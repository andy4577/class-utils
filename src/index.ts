/**
 * Creates new Set() of class stings;
 * Set API fits nicely with classes e.i Set.prototype.add(), Set.prototype.has()
 * it also removes any duplicate entries.
 * @param {String | Array<Sting>} style - String of CSS classes space separated
 * or Array of CSS class strings.
 * @returns new Set()
 */
 export const createClasses = (style: string | string[]): Set<string> => {
  // if array return set;
  if (style && Array.isArray(style)) return new Set(style);

  const styleArray = style.split(' ');
  return new Set(styleArray);
};

/**
 * Converts Set() into string.
 * @param {Set<String>} classesSet - Set of CSS classes strings.
 * @returns String
 */
export const getClasses = (classesSet: Set<string>): string => {
  const valueIterator = classesSet.values();
  const classes = Array.from(valueIterator).sort();
  return classes.join(' ');
};
