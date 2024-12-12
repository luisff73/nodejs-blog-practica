Example of nextjs project using Cypress.iosss

<!---Start place for the badge-->
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Test Failure](https://img.shields.io/badge/test-failure-red)
![Test Failure](https://img.shields.io/badge/test-failure-red)
![Test Failure](https://img.shields.io/badge/test-failure-red)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![Test Failure](https://img.shields.io/badge/test-failure-red)
![Tested with Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
<!---End place for the badge-->



# Práctica - GitHub Actions

## Introducción
En esta práctica, se utilizan varias herramientas y conceptos importantes en el desarrollo y despliegue de aplicaciones web. A continuación, presento una breve introducción a cada uno de estos conceptos que trataremos en esta práctica:

### GitHub Actions
GitHub Actions es una plataforma de integración continua y entrega continua (CI/CD) que permite automatizar flujos de trabajo directamente desde el repositorio de GitHub. Con GitHub Actions, se pueden definir *workflows* que se ejecutan en respuesta a eventos específicos, como *commits* y *pull requests*.

### Linter
Un **linter** es una herramienta que analiza el código fuente para identificar errores de programación, *bugs* y problemas de estilo. En esta práctica, utilizaremos un linter para asegurar la calidad y fiabilidad del código.

### Cypress
**Cypress** es una herramienta de pruebas *end-to-end* (E2E) para aplicaciones web. Permite escribir y ejecutar pruebas que simulan la interacción del usuario con la aplicación, verificando que todo funcione como se espera.

### Vercel
**Vercel** es una plataforma de despliegue para aplicaciones web estáticas. Permite desplegar aplicaciones de manera rápida y sencilla, proporcionando una infraestructura escalable y de alto rendimiento.

### Badges
Los **badges** son insignias que se pueden agregar a los archivos `README.md` para mostrar el estado de las pruebas, la cobertura del código y otros indicadores de calidad del proyecto.

### Artefactos
En el contexto de CI/CD, los artefactos son archivos generados durante la ejecución de un *workflow* que pueden ser almacenados y compartidos. En esta práctica, se utilizan artefactos para guardar los resultados de las pruebas de Cypress.

### Métricas
Las métricas proporcionan información sobre el rendimiento y la calidad del código. En esta práctica, se generan métricas y se agregan al archivo `README.md` del perfil principal para proporcionar una visión general del proyecto.



## Documentación del Workflow de GitHub Actions

### Nombre del Workflow
name: nodejs_blog_practica

### Eventos Disparadores del Workflow
on:
  push:
    branches:
      - main

