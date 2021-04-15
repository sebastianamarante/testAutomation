@pei
Feature: Login a la aplicación como administrador
    Como usuario administrador de la liga de futbol
    Ingreso a la aplicación

@login
Scenario Outline: Login como administrador - <mail>
    Given se ingresa al sistema como administrador
    When se completa con mail "<mail>"
    When se completa con la contraseña "<password>"
    Then el usuario intenta ingresar a la aplicación
    Then el usuario ingresa a la aplicación
    Then el usuario cierra la sesion
    Then el usuario cerro la sesion

Examples:
| mail | password |
| test-admin@baufest.com | baufest123 |

@login_fallido
Scenario Outline: Login como administrador - <mail>
    Given se ingresa al sistema como administrador
    When se completa con mail "<mail>"
    When se completa con la contraseña "<password>"
    Then el usuario intenta ingresar a la aplicación
    But el usuario no logra ingresar

Examples:
| mail | password |
| test-admin@baufest.com | failadmin |

