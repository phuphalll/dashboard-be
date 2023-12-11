const filterNullOrUndefinedObj = (objToSave: { [key: string]: any }) => {
  return Object.fromEntries(
    Object.entries(objToSave).filter(([_, v]) => v != null)
  );
};

export { filterNullOrUndefinedObj };
