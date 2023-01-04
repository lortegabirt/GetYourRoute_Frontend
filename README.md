# GetYourRoute

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

# Descripcion de la aplicación

Aplicación de seguimiento que usa tecnología de Geolocalización a partir de un dispositivo móvil. El dispositivo móvil envía al servidor los puntos del recorrido en tiempo real para a posteriori a través de una aplicación web poder visualizar las rutas o espacios recorridos en un mapa de calor y poder visualizar Puntos de Interés relacionados con cada usuario.

## Necesidades y respuesta o problema al que responde

Uno de los objetivos de la aplicación es usar datos de Geolocalización que ofrece Open Data Euskadi de puntos de interés (POIs) para mostrarlos en la aplicación Web, de tal manera que el usuario los pueda ubicar al revisar las rutas establecidas.

Se podrían establecer rutas de tipo gastronómico, de consumo local, de alojamientos o de carácter festivo, personalizadas compartiendo sus itinerarios con los POIs visitados.

A nivel analítico de Open Data estos registros podrían ser de utilidad para negocios, administraciones públicas, departamentos de turismo, etc. para estudios de mercado o de carácter sociológico sobre los itinerarios de los usuarios. 

## Funcionalidades de la aplicación

Las funcionalidades de la aplicación serán las siguientes
Mostrar itinerarios de los usuarios a través de un mapa de calor en su aplicación web
Registrar mediante tecnología de geolocalización las ubicaciones recorridas por estos usuarios
Registro de itinerarios para usuarios registrados

La aplicación tendrá una versión web y otra versión móvil con distintos propósitos. 

### Principales características funcionales de cada versión en la primera fase de desarrollo

#### Aplicación Web 

El principal objetivo de la aplicación web es el de poder listar y visualizar el conjunto de recorridos registrados por el usuario.

#### Aplicación móvil 

El uso principal de la aplicación móvil es el de generar nuevos itinerarios, enviando la geolocalización del usuario periódicamente al back para su registro en la base de datos.

#### Proceso batch de persistencia de POIs 

También desplegamos un proceso que se encargará de transformar, guardar e ir actualizando periódicamente la info de puntos de interés recogida de Open Data Euskadi. 

#### Implementaciones para una segunda fase de desarrollo

Mostrar POIs de Open Data Euskadi de diferentes categorías sobre los itinerarios creados para que el usuario pueda ubicarlos.
Generar una reconstrucción cronológica del itinerario realizado.

#### Implementaciones de carácter social en una tercera fase de desarrollo

Ofrecer un mapa de calor con zonas calientes (zonas más visitadas de los usuarios que usan la aplicación).
Seguir a otros usuarios, compartir recorridos, comentar recorridos, dar like a los recorridos de otros usuarios…
Posibilidad de sacar fotos con el móvil y que se guarden en el contexto del recorrido,
para poder verlas a posteriori en el mapa de visualización.

## Tecnologías usadas

### Front end 

#### - Angular

Para la parte web se usa este framework por las ventajas que ofrece en el desarrollo de aplicaciones web

#### - Ionic

Para la parte móvil se usa este framework ya que permite el desarrollo de una aplicación tanto para iOS como para Android, además dispone de componentes visuales que se adaptan a cada uno de ellos. 

### Back end

#### - Spring Boot

Se ha elegido este framework por la facilidad que ofrece en el desarrollo de los servicios REST y en el uso del API MongoDB para obtener y persistir los datos.

### Base de datos

#### - MongoDB

En este tipo de base de datos se permite almacenar objetos de tipo GeoJSON que son necesarios para el tipo de aplicación que se ha definido.

### APIs

#### - Open Data Euskadi

La aplicación obtiene datos de Open Data Euskadi como restaurantes, casas rurales y etc.. que luego utiliza la aplicación para visualizarlos en el mapa.

## Repositorios en GitHub

Se han creado varios repositorios uno para el Backend, otros para los diferentes Frontends y un proceso Batch para extraer datos del portal Open Data Euskadi
Para cada uno de ellos se crean diferentes ramas que una vez que son consensuadas por el equipo se hace el merge con la rama main.

### Backend
https://github.com/lortegabirt/GetYourRoute_Backend.git

### Frontend Web
https://github.com/lortegabirt/GetYourRoute_Frontend.git
 
### Frontend Móvil
https://github.com/lortegabirt/GetYourRoute_Mobile.git

### Proceso Batch
https://github.com/lortegabirt/GetYourRoute_OpenData.git


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
```java
public class Prueba {
    private final String hola;
    public Prueba {
        this.hola = "Ejemplo";
    }
}
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
