
Feature: Se testea la aplicación iniciada

Background:     
Given se ingresa al sistema como administrador
    When se completa con mail "test-admin@baufest.com"
    When se completa con la contraseña "baufest123"
    Then el usuario intenta ingresar a la aplicación

Scenario: Validacion de la pagina dashboard para un administrador

When Se muestra el dashboard
Then Se muestra el mensaje "Iniciaste sesión correctamente."

# Given Dado que el usuario se logueo correctamente con el mail "test-admin@baufest.com" y la contraseña "baufest123"

Scenario: Validacion de la pagina dashboard para un administrador

When Se muestra el dashboard
    Then Se muestra unbox con el texto "Jugadoras Fichadas Activas - 2021"
    Then Se muestra el input DNI

@alta_prensa 
    Scenario: Agregar nuevo usario a prensa
    Given Se ingresa al alta de usuario
    When Entrar a Nuevo Miembro
    Then Ingresar nombre "Sebastian"
        And Ingresar Apellido "Amarante"
        And Ingresar DNI "41105287"
        And Ingresar Email "amaranteprodwe@gmail.com"
        And Crear otro

@alta_division @run
    Scenario: Agregar una nueva division
    Given Se ingresa a alta divison
    When Entrar a Nueva Division
    Then Ingresar Nombre
        And Ingresar Descripcion
        And Seleccionar categoria
        And Crear Division
    Then Validar alta division