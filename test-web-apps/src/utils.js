export const getLabel = (field) =>
  field.label ??
  field.name
    .split('_')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
