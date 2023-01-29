# AngularExchanges

Crea un proyecto con o sin lazy loading.

En la pagina principal crea un input de tipo number con el valor por defecto 1.

Haz una petición a `https://api.vatcomply.com/rates` para obtener todos los rates disponibles e imprimelos debajo del input creando una galería con todos esos rates y el nombre de ellos en grande...debajo de cada nombre además añade el numero del rate correspondiente multiplicado por el número del input.

Por defecto haz un estilo que evidencie que el rate base que se usa es el EUR.

Si el usuario hace click en otro rate cambia el estilo y haz una peticion a `https://api.vatcomply.com/rates?base=USD` cambiando `USD` por la moneda correspondiente.

Hecho eso, actualiza todos los valores con el rate correspondiente