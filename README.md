## ℹ Acerca de

El proyecto consiste en el desarrollo de una página web.
Esta constatará de varias secciones en las cuales por una parte, el usuario cliente podrá 
observar las diferentes paradas registradas así como las unidades que están actualmente en 
ruta y su ubicación cercana con respecto a las paradas, así como solicitar la parada a la 
unidad más cercana.

Por otro lado el usuario conductor iniciará la trayectoria de la unidad 
y podrá reportar incidentes que se presenten en la ruta como accidentes, marchas, baches, etc.

Por último el usuario administrador tendrá acceso a las diferentes entidades como las unidades,
conductores, otros administradores, para crear, editar y/o eliminar alguna de estas, adicionalmente
podrá asignarle a los conductores las unidades a operar, así como sancionar a alguno de estos en
caso de existir algún retraso no justificado.

---

## 🎨 Diseños UI

- [Diseño UI del usuario cliente](https://www.figma.com/file/bUKQYkadlfoOSMKwa21cek/Circuito-Morelia?node-id=112%3A1269)
- [Diseño UI del usuario administrador](https://www.figma.com/file/bUKQYkadlfoOSMKwa21cek/Circuito-Morelia?node-id=29%3A287)

---

## 🔀 Flujo de trabajo

### 🪵 Ramas de git

- ```frontend``` 🧩: aquí solo se trabajará con todo lo relacionado a lo visual para el
cliente en su navegador.
- ```backend``` 🧪: en esta rama se trabajará únicamente la lógica de negocio del sistema
para desarrollar una API que pueda ser de utilidad para la aplicación móvil que está siendo
desarrollada en React Native.
- ```integración``` 🧬: una vez finalizado el desarrollo del frontend y el backend se hará la
integración de estas dos en la rama indicada, lo cuál involucra en hacer llamadas a la API
con custom hooks.
- ```main``` 🚀: al haber concluido con todo el desarrollo los cambios se desplegarán en esta
rama para hacer el deploy.
