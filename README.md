# Calculadora-prestamos
Es una aplicación web que calcula los meses que se debe pagar por un crédito.
##Empezar :rocket:
Los siguientes pasos te servira para poder tener una copia del proyecto funcionando en tu maquina local para tener un ambiente de ejecución, desarrollo y pruebas.
##Pre requisitos :clipboard:
Para instalar el software necesitas tener instalado lo siguiente:

``` bash
Un servidor web local para poder crear y probar sitios web.
Un ejemplo puede ser [Xampp](https://www.apachefriends.org/) 
Adicional debes contar con un editor de código uno muy bueno y liviano es [Sublime Text](https://www.sublimetext.com/)
```
## Instalación :wrench:
Esta es la secuencia de pasos que necesitar realizar
``` bash
Instalando `XAMPP`
`Paso 1 Descarga`
La version 3.* en adelante te sera de ayuda desde el sitio oficial [XAMPP](https://www.apachefriends.org/)
`Paso 2 Ejecuta el archivo con extensión .exe`
Debes hacer doble click
`Paso 3 Desactivar el programa antivirus`
Es recomendable deshabililtar el software antivirus mientras se instala el programa porque podria detener la ejecucion de instalación.
`Paso 4 Desactivar UAC`
Desactivar tambien el control de cuentas de usuario porque limita la escritura en el disco de la mquina local, te recomiendo ver [Desactivar UAC](https://www.autodesk.es/support/technical/article/caas/sfdcarticles/sfdcarticles/ESP/How-to-turn-off-User-Account-Control-in-Windows.html)
`Paso 5 Iniciar el asistente de instalación`
Ahora podras visualizar el asistente de instalación de XAMPP debes hacer click en next.
`Paso 6 Selección de componentes`
En nuestro caso solo utilizaremos los componentes de server si unicamente queremos visualizar la aplicación. Si eres desarrollador debes elegir lenguajes de programación.
`Paso 7 Selección del directorio de instalación`
Es recomendable instalarlo en el directorio por defecto.
`Paso 8 Inicia el proceso de instalación`
El asistente de instalación procesará los componentes elegidos por lo tanto tomará algunos minutos hasta finalizar la instalación el progreso se visualiza en la barra de color verde.
`Paso 9 Configurar Firewall`
Se mostrara una ventana de diálogo donde tienes que habilitar el permiso para que el servidor de apache pueda ejecutarse debes seleccionar redes privadas, la opción de redes publicas no se recomienda por ser vulnerables ataques.
`Paso 10 Cerrar la instalación`
Cuando finaliza la instalación de los componentes debes cerrar el asistente en el botón Finish. Para visualizar el panel de configuración seleciona la casilla para iniciarlo.
`Paso 11 Iniciar módulos`
Para visualizar la aplicación web debes selecionar el módulo de servio apache en actions elegir start.
```
```bash
Ahora veremos el proceso para visualizar la aplicación web
`Paso 1 Abre un navegador web`
Selecciona el navegador web Firefox o bien Google Chrome
`Paso 2 ubicar el directorio de Xampp en el disco C`
Dirigete a C:\xampp\htdocs esta es la ruta donde se guardará el archivo fuente del proyecto 
`Paso 3 Almacenar el archivo fuente`
El arcihvo con los documentos del proyecto se guarda en el directorio anterior para poder ejecutar la aplcación,  esa ruta la usa el servidor por defecto para las aplicaciones y sitios web.
`Paso 4 Ejecutar la aplicación`
Utiliza el navegador web de tu preferencia en el espacio de URL escribe la ruta donde se encuentra el proyecto [Ruta](http://localhost/Calculadora de prestamos/src/)
```
## DEMO
Como entrada podemos ver la calculadora de prestamos
![Sitio inicial](https://drive.google.com/file/d/1rNyOAbtxZ_P9yek22vU0am48CLY8Sesn/view?usp=share_link)
Vamos a selecionar el monto a cargar a la cuenta del usuario adicional selecionamos el porcentaje de interés y pago en meses y el resultado se muestra en la parte inferior en mensualidades

## Construido con :hammer_and_wrench:
+  HTML
+ JavaScript
+ CSS
