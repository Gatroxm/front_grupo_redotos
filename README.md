# Frontend para Gestión de Tareas - Grupo Rédotos

Este proyecto es el frontend de una plataforma diseñada para gestionar tareas. Los administradores pueden crear y asignar tareas a los usuarios, y tanto administradores como usuarios pueden visualizar las tareas según sus roles. Está construido en **Angular** y utiliza **Tailwind CSS** para los estilos.

## Características

- **Autenticación**: Login con generación y validación de tokens JWT.
- **Gestión de Tareas**:
  - Los administradores pueden crear, asignar y visualizar todas las tareas.
  - Los usuarios pueden ver únicamente sus propias tareas.
- **Interfaz Adaptativa**:
  - Diseño responsivo utilizando **Tailwind CSS**.
  - Visualización de tareas en formato de tarjetas adaptado para dispositivos móviles y web.

## Tecnologías Utilizadas

- **Angular**: Framework principal para el desarrollo frontend.
- **Tailwind CSS**: Sistema de utilidades CSS para el diseño responsivo y estilizado.
- **Angular Services**: Conexión con el backend para la gestión de datos.
- **RxJS**: Manejo de flujos de datos reactivos.

## Requisitos Previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [Angular CLI](https://angular.io/cli)
- Un backend funcional para conectar el frontend. [Repositorio del backend](#).

## Instalación y Ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Gatroxm/front_grupo_redotos.git

   cd front_grupo_redotos

   npm install

   export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api' // URL del backend
   };
   ```

ng serve

http://localhost:4200/

```
## Uso de la Aplicación

### Inicio

Al iniciar la aplicación, se muestra la pantalla de inicio. Aquí se puede acceder a las diferentes secciones de la aplicación.

![Inicio](https://user-images.githubusercontent.com/105947164/221231820-c7c5b0d6-f4c0-4f3f-b8f1-e8c8b1f2f7e7.png)

### Inicio de Sesión

Para acceder a la aplicación, se debe iniciar sesión. Para ello, debe ingresar su correo electrónico y contraseña.

![Inicio de Sesión](https://user-images.githubusercontent.com/105947164/221231837-f8c7c0f7-c4a7-4f0a-b8b1-e8f1b0e2f7e7.png)

### Gestión de Tareas

La aplicación cuenta con una sección dedicada a la gestión de tareas. Aquí se pueden crear, asignar y ver las tareas de los usuarios.

![Gestión de Tareas](https://user-images.githubusercontent.com/105947164/221231849-f8c7c0f7-c4a7-4f0a-b8b1-e8f1b0e2f7e7.png)

## Autor

[Tavo X](https://github.com/Gatroxm)

## Licencia

Este proyecto está licenciado bajo la licencia MIT.
```
