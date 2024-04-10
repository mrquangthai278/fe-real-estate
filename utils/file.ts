import type { FileItem } from "@@/interfaces/file";

export const transformFileToModel = (file: File) => {
  if (!file) return file;

  const result: FileItem = {
    url: file.name,
    name: file.name,
    type: file.type,
  };

  return result;
};
