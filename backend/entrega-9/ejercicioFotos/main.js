const fs = require("fs").promises;
const minimist = require("minimist");
const sharp = require("sharp");
const path = require("path");

async function miniaturizer() {
  const args = minimist(process.argv.slice(2));
  if (!args["input-dir"] || !args["output-dir"]) {
    console.error("Los parametros input-dir y output-dir son obligatorios");
    process.exit();
  }
  try {
    let inputPathInfo;
    let inputPathName = path.join(__dirname, args["input-dir"]);

    let outputPathName = path.join(__dirname, args["output-dir"]);
    let outputPathInfo;

    try {
      // Sacar información del path
      inputPathInfo = await fs.stat(inputPathName);
    } catch (error) {
      throw new Error(`La ruta ${inputPathName} no existe`);
    }

    // Comprobar que el path es un directorio
    if (!inputPathInfo.isDirectory()) {
      throw new Error(`La ruta ${inputPathName} no es un directorio`);
    }

    try {
      outputPathInfo = await fs.stat(outputPathName);
    } catch (error) {
      try {
        await fs.mkdir(outputPathName, { recursive: true });
      } catch (error) {
        throw new Error("Hubo un error creando la carpeta");
      }
    }

    const files = await fs.readdir(inputPathName);

    for (const file of files) {
      const fileExt = path.extname(path.join(inputPathName, file));
      const filePath = path.join(inputPathName, file);
      const image = sharp(filePath);
      if (fileExt === ".jpg" || fileExt === ".png") {
        image.resize(500, 500);
        image.composite([
          {
            input: "./logo.png",
            gravity: "southeast",
          },
        ]);
        await image.toFile(path.join(outputPathName, file));
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

miniaturizer();
