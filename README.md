# Rick and Morty SPA

Aplicación **SPA** con **Vite** y JavaScript vanilla con **inicio de sesión** y dos vistas según el rol: administrador (dashboard) y usuario.

## Estructura
- `src/router/`: router propio
- `src/pages/`: vistas (login, dashboard, admin)
- `src/services/`: autenticación y usuarios
- `src/data/db.json`: datos para **json-server**

## Cómo ejecutar
En una terminal, levanta la API simulada; en otra, el front-end:
```bash
npm install
npm run api
npm run dev
```

> Proyecto de aprendizaje. El login es de demostración y no es seguro para producción.

## Proyecto de aprendizaje
Práctica de SPA, rutas protegidas por rol y consumo de API.
