import { readdir } from "node:fs/promises";
import path from "node:path";

export interface Sound {
  id: string;
  name: string;
  format: "mp3" | "wav";
  path: string; // ruta relativa: /sounds/archivo.mp3
}

/** Lee public/sounds en build y devuelve la lista ordenada. */
export async function getSounds(): Promise<Sound[]> {
  const dir = path.resolve("public/sounds");
  const files = (await readdir(dir)).filter((f) => /\.(mp3|wav)$/i.test(f));

  return files.sort().map((file) => {
    const id = file.replace(/\.[^.]+$/, "");
    return {
      id,
      name: id.replace(/[-_]+/g, " "),
      format: file.split(".").pop()!.toLowerCase() as Sound["format"],
      path: `/sounds/${file}`,
    };
  });
}
