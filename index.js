const fs = require("fs").promises;

async function main() {
  const outcome = process.env.INPUT_OUTCOME;// || "success"; //Obtiene el valor de la variable de entorno INPUT_OUTCOME. Si no está definida, usa "success" como valor predeterminado.
  
  console.log(`Valor de Outcome: ${outcome}`);

  let badge;
  if (outcome === "success") {
    badge = "![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)";
  } else {
    badge = "![Test Failure](https://img.shields.io/badge/test-failure-red)";
  }

  console.log("Valor de Badge:", badge);

  // Agregar el badge al README después de la sección "RESULTAT DELS ÚLTIMS TESTS"
  const readmePath = "./README.md"; // Define la ruta al archivo README.md.
  try {
    const readmeContent = await fs.readFile(readmePath, "utf-8");
    
    // Buscar el lugar para insertar el badge
    const updatedContent = readmeContent.replace(
      /<!---Start place for the badge-->/g,
      `<!---Start place for the badge-->\n${badge}`
    );
    
    await fs.writeFile(readmePath, updatedContent, "utf-8");
    console.log("Badge added to README.md successfully.");
  } catch (error) {
    console.error("Error updating README.md:", error);
  }
}

main().catch((error) => {
  console.error("Error in main function:", error);
});
