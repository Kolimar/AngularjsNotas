# AngularjsNotas
Desarrollé una aplicación simple utilizando adrede varias herramientas y técnicas con fines demostrativos, modularizando en la medida de lo posible algunas partes. Si bien con un poco más de tiempo se podría hacer más clean, actualmente se dividen entre "common" y "components", los common son módulos independientes que pueden ser reutilizados a traves del tag a lo largo de toda la aplicación, mientras que en "components" se guardan los contenedores que dicho sea de paso deberían ir un subnivel por debajo para dar lugar a componentes más generales.

Todas las request que realiza la aplicación pasan por el módulo "interceptors", que si bien no está pulido es funcional y permite tanto el manejo de las peticiones al servidor como el control de errores http de manera centralizada.

Permite: Listar, ver, eliminar y editar el contenido de una nota.

Arquitectura:

La arquitectura está basada en componentes y el data flow es en un solo sentido.

DEMO:
https://stackblitz.com/edit/angularjs-es6-notas
