# Vicezon

> Proyecto de una tienda de tecnologia online

## Instrucciones para instalar: 📋

_Para instalar el proyecto solo hay que cargar la base de datos que proporciono._

Mirar **tienda.sql** para importarla.

### Pre-requisitos:

_Necesitaras instalar lo siguiente para su correcto funcionamiento_

Aqui hay una guia de como instalar la pila LAMP manualmente:
```
https://www.alvarolara.com/2013/06/14/instalar-apache-php-mysql-y-phpmyadmin-en-ubuntu/
```

## Images: 📷
#### Homepage
![Image of Client view](https://i.imgur.com/ytT7vZu.jpg)
#### Shop
![Image of Shop](https://i.imgur.com/YKTPp3i.png)
#### Contact
![Image of Contact](https://i.imgur.com/wrC01mc.png)
#### Admin Panel
![Image of Admin Panel](https://i.imgur.com/u2nB71P.png)

## Tecnologias
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

* [JQuery](https://jquery.com/)


* [PHP](https://www.php.net/)

* [MySQL](https://www.mysql.com/)

## Funcionalidades: ⌨️ 
_En la aplicación tenemos dos modulos principales y dentro de ellos hay distintos modulos:_

#### Admin: 

*Aquí esta el panel de administración donde puedes gestionar los productos y las categorias.*

| Modulo | Descripción |
| --- | --- |
| Dashboard | *Aqui el administrador puede gestionar los productos.* |

#### Client:

*Esta es la vista del cliente, donde pueden comprar, ver productos y valorarlos.*
  
| Modulo | Descripción |
| --- | --- |
| Homepage | *Es donde el cliente puede visualizar lo más destacado de la web.* |
| Shop | *Aqui es donde el cliente puede ver todos los productos o filtrarlos.* |
| Contact | *Formulario de contacto y ubicacion de la empresa.* |
| Search | *Es el modulo de busqueda, que esta situada en todos los modulos de cliente, donde puedes buscar productos en cualquier lugar de la web.* |

## APIs: 💻 
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es) - Usada para el mapa del modulo *Contact* en la parte cliente.

* [NEWSAPI](http://newsapi.org/) - Usada en el homepage para cargar noticias sobre tablets.

## Construido con: 🛠️ 

_Herramientas utilizadas para la realización del proyecto_

* [Material Bootstrap](https://mdbootstrap.com/) - Para mejorar visualmente y rapidamente el Panel Admin.
* [DataTables](https://datatables.net/) - Las tablas de los productos en el panel Admin.
* [FontAwesome](https://fontawesome.com/) - Usado para los iconos.
* [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/index.html) - Usado para el carousel del homepage.

## Novedades: 📑
_Aqui estan las novedades más importantes con su fecha de actualización_

#### 10/03/2020
```
Añadido **Popular Brands** al home
- Muestra las marcas que más visitas tienen.
-Cuando apretas el boton cambia a la siguiente pagina y si no hay más vuelve a la primera.

Añadida nueva copia de seguridad de la BD.
-con las nuevas columnas views tanto en brands como en Tablets.
```

#### 12/03/2020
```
- Añadida la paginacion funcionando con promesas y con todos los filtros.
- Arreeglado el shop ya que repetia productos.
```
#### 15/03/2020
```
- CSS del pager propio ( ya que yo uso mdbootstrap y no tiene uno predefinido)
- Añadida function en el top_page del modulo contact para cargar la API y ponerla en el SRC.
- Añadido el .gitignore funcionando con las dos APIs
- Añadida la API Noticias sobre tablets con css propio en el Home.
- Añadido boton Load more y reset news.
- Boton "Load more news": Cada vez que apretas carga 4 noticias más.
- Boton "Reset News": Cuando lo apretas vuelve la seccion NEWS a su estado principal.
```

#### 16/03/2020
```
- creada estructura del login.
- en el client_pages añadidas las redirecciones.
- reorganizado client_functions.js en funciones.
- form register creado con su css propio usando mdbootstrap ( Se accede desde el menu/register)
-form register validacion js completada.
- form register llega al controlador php y a la validacion en BD con los datos del formulario.
[CONTINUAR CREANDO LA TABLA EN BD, ACABAR LA VALIDACION PHP]
```
