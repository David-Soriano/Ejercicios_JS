window - addEventListener("load", iniciar);
function iniciar() {
  let bxMenu = document.getElementById("bx-menu");
  let bxEje1 = document.getElementById("box-contrasena");
  let bxEje2 = document.getElementById("box-numPrimos");
  let bxEje3 = document.getElementById("box-cntPrimos");
  let bxEje4 = document.getElementById("box-fnc");
  let bxEje5 = document.getElementById("box-trq");
  let bxEje6 = document.getElementById("box-cMgc");
  let bxEje7 = document.getElementById("box-frm");
  let bxEje8 = document.getElementById("box-aJson");

  let bxMEjers = document.getElementById("box-mEjer");

  let btnEje1 = document.getElementById("valContrasena");
  let btnEje2 = document.getElementById("nPrimos");
  let btnEje3 = document.getElementById("cPrimos");
  let btnEje4 = document.getElementById("srFibonacci");
  let btnEje5 = document.getElementById("Triqui");
  let btnEje6 = document.getElementById("cMagico");
  let btnEje7 = document.getElementById("Formulario");
  let btnEje8 = document.getElementById("aJSON");
  let btnMEjers = document.getElementById("MEjercicios");

  let bxVolver = document.getElementById("box-volver");
  let btnVolver = document.getElementById("box-volver");
  let btnEjersVol = document.getElementById("icon-ejers");
  ocultar(bxVolver);

  ocultar(bxEje1);
  ocultar(bxEje2);
  ocultar(bxEje3);
  ocultar(bxEje4);
  ocultar(bxEje5);
  ocultar(bxEje6);
  ocultar(bxEje7);
  ocultar(bxEje8);

  ocultar(bxMEjers);

  accionBtn(btnEje1, bxMenu, bxEje1, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje1, bxMenu);

  accionBtn(btnEje2, bxMenu, bxEje2, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje2, bxMenu);

  accionBtn(btnEje3, bxMenu, bxEje3, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje3, bxMenu);

  accionBtn(btnEje4, bxMenu, bxEje4, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje4, bxMenu);

  accionBtn(btnEje5, bxMenu, bxEje5, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje5, bxMenu);

  accionBtn(btnEje6, bxMenu, bxEje6, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje6, bxMenu);

  accionBtn(btnEje7, bxMenu, bxEje7, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje7, bxMenu);

  accionBtn(btnEje8, bxMenu, bxEje8, bxVolver);
  accionVolver(btnVolver, bxVolver, bxEje8, bxMenu);

  accionBtn(btnMEjers, bxMenu, bxMEjers, bxVolver, bxVolver);
  accionVolver(btnVolver, bxVolver, bxMEjers, bxMenu);

  btnMEjers.addEventListener("click", crearmenu);

  accionVolver(btnEjersVol, bxMEjers, bxVolver, bxMenu);

  nLimite();
  validarContrasena();
  serieFibonacci();

  ocultar_contenido();

  ejercicio1();
  ejercicio2();
  ejercicio4();
  ejercicio5();
  ejercicio6();
  ejercicio8();
  ejercicio9();
  ejercicio10();
  ejercicio11();
  ejercicio12();
  ejercicio13();
  ejercicio14();
  ejercicio15();
  ejercicio17();
  ejercicio18();
  ejercicio19();
  ejercicio20();
  ejercicio21();
  ejercicio22();
  ejercicio23();
  ejercicio24();
  ejercicio25();
  ejercicio26();
  ejercicio27();
  ejercicio28();
  ejercicio29();
  ejercicio30();
  ejercicio33();
  ejercicio34();
  ejercicio36();
  ejercicio37();
  ejercicio38();
  ejercicio39();
  ejercicio40();
  ejercicio41();
  ejercicio42();
  ejercicio43();
  ejercicio44();
  ejercicio45();
  ejercicio46();
  ejercicio47();
  ejercicio48();
  ejercicio49();
  ejercicio50();
  ejercicio51();
  ejercicio52();
  ejercicio53();
  ejercicio54();
  ejercicio55();
  ejercicio56();
  ejercicio57();
  ejercicio58();
  ejercicio59();
  ejercicio60();
  ejercicio61();
  ejercicio62();
  ejercicio63();
  ejercicio64();
  ejercicio65();
  ejercicio66();
  ejercicio67();
  ejercicio69();
  ejercicio70();
  ejercicio71();
}

function mostrar(box) {
  box.style.display = "flex";
}

function ocultar(box) {
  box.style.display = "none";
}

function ocultar_contenido() {
  for (var i = 0; i < 71; i++) {
    document.getElementById("box-mEjer" + (i + 1)).style.display = "none";
  }
}

function mostrar_contenido(numeroBoton) {
  var idContenido = "box-mEjer" + numeroBoton;
  let bxPresentacion = document.getElementById('bx-presentacion');
  ocultar_contenido();
  // Mostrar el contenido asociado al botón
  document.getElementById(idContenido).style.display = "flex";
  bxPresentacion.style.display = 'none';
}

function accionBtn(btn, box1, box2, box3, box4) {
  btn.addEventListener("click", () => {
    ocultar(box1);
    mostrar(box2);
    mostrar(box3);
    ocultar(box4);
  });
}

function accionVolver(btn, box1, box2, box3) {
  btn.addEventListener("click", () => {
    ocultar(box1);
    ocultar(box2);
    mostrar(box3);
  });
}

function crearmenu() {
  let men = "";
  for (var i = 0; i < 71; i++) {
    men +=
      '<div class="col"><button id="btnEje' +
      (i + 1) +
      '" onclick=" mostrar_contenido(' +
      (i + 1) +
      ')">Ejercicio ' +
      (i + 1) +
      "</button></div>";
  }
  document.getElementById("caja-ejs").innerHTML = men;
}

function insertTexto(id, texto) {
  document.getElementById(id).innerHTML = texto;
}

//------------------------------------------------------------

function validarContrasena() {
  let btnVal = document.getElementById("btn-val-con");

  let rta = document.getElementById("resPassword");

  btnVal.addEventListener("click", () => {
    let inpContrasena1 = document.getElementById("password-1");
    let inpContrasena2 = document.getElementById("password-2");

    if (inpContrasena1.value == "" || inpContrasena2.value == "") {
      rta.innerHTML = "Campos Vacíos.";
    } else {
      if (inpContrasena1.value == inpContrasena2.value) {
        rta.innerHTML = "Las contraseñas coinciden.";
        inpContrasena1.focus();
        inpContrasena2.focus();
      } else {
        rta.innerHTML = "Las contraseñas no coinciden.";
        inpContrasena1.focus();
        inpContrasena2.focus();
      }
    }
  });
}

function validarNPrimo(valor) {
  let resNPrimo = document.getElementById("resNPrimo");
  parseFloat(valor);
  if (isNaN(valor)) {
    resNPrimo.innerHTML = "Inserte un número";
  } else {
    if (esPrimo(valor)) {
      resNPrimo.innerHTML = "Es primo";
    } else {
      resNPrimo.innerHTML = "Es Compuesto";
    }
  }
}

function nLimite() {
  let btnNP2 = document.getElementById("gen-nL");
  btnNP2.addEventListener("click", () => {

    let resNP = document.getElementById("resCantNP");
    let valorLimite = parseInt(document.getElementById("numeroP2").value);
    let valor = 2;
    let num = "";
    if (isNaN(valorLimite)) {
      insertTexto('resCantNP', "Llene los campos");
    } else if (valorLimite < 0) {
      insertTexto('resCantNP', "Valor incorrecto");
    } else {
      let i = 0;
      while (i < valorLimite) {
        if (esPrimo(valor)) {
          num += valor + " ";
          i++;
        }
        valor++;
      }
      resNP.innerHTML = num;
    }
  });
}

function serieFibonacci() {
  document.getElementById('eje-fibonacci').addEventListener('click', () => {
    let limite = parseInt(document.getElementById('lmtFibonacci').value);
    if (isNaN(limite)) {
      insertTexto('res-fibonacci', "Llene los campos");
    } else if (limite < 0) {
      insertTexto('res-fibonacci', "Valor Incorrecto");
    } else {
      let i = 2;
      let valor1 = 0;
      let valor2 = 1;
      let valor3 = 0;
      let serie = "";
      serie += valor1 + " " + valor2 + " ";
      while (i < limite) {
        valor3 = (valor1 + valor2);
        serie += valor3 + " ";
        valor1 = valor2;
        valor2 = valor3;
        i++;
      }
      insertTexto('res-fibonacci', serie);
    }
  })
}
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i * i <= numero; i++) {
    if (numero % i == 0) {
      return false;
    }
  }
  return true;
}

function n_aleatorios(limite) {
  let numeros = [];
  for (let i = 0; i < limite; i++) {
    numeros[i] = Math.floor(Math.random() * 10 + 1);
  }
  return numeros;
}

function n_aleatorios2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function n_decimalesAleatorios(min, max) {
  return Math.random() * (max - min) + min;
}

function compararNumeros(a, b) {
  return b - a;
}
function presionarEnter(idForm, idBtn,) {
  let formulario = document.getElementById(idForm);
  let boton = document.getElementById(idBtn);

  // Agregar un evento de escucha de teclado al formulario
  formulario.addEventListener('keypress', function (e) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (e.key === 'Enter') {
      // Disparar el clic en el botón
      boton.click();
    }
  });

}
//------------------------------------------------------------
function ejercicio1() {
  let opSuma = document.getElementById("opSuma");
  let opResta = document.getElementById("opResta");
  let opMultiplicacion = document.getElementById("opMultiplicacion");
  let opDivision = document.getElementById("opDivision");

  opSuma.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje1_N1").value);
    let N_2 = parseInt(document.getElementById("Eje1_N2").value);

    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res-eje1", "Llene los campos.");
    } else {
      insertTexto(
        "res-eje1",
        "Suma: " + N_1 + " + " + N_2 + " = " + (N_1 + N_2)
      );
    }
  });
  opResta.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje1_N1").value);
    let N_2 = parseInt(document.getElementById("Eje1_N2").value);

    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res-eje1", "Llene los campos.");
    } else {
      insertTexto(
        "res-eje1",
        "Resta: " + N_1 + " - " + N_2 + " = " + (N_1 - N_2)
      );
    }
  });
  opMultiplicacion.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje1_N1").value);
    let N_2 = parseInt(document.getElementById("Eje1_N2").value);

    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res-eje1", "Llene los campos.");
    } else {
      insertTexto(
        "res-eje1",
        "Multiplicación: " + N_1 + " * " + N_2 + " = " + N_1 * N_2
      );
    }
  });
  opDivision.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje1_N1").value);
    let N_2 = parseInt(document.getElementById("Eje1_N2").value);

    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res-eje1", "Llene los campos.");
    } else {
      if (N_2 == 0)
        insertTexto("res-eje1", "La división por cero es imposible");
      else
        insertTexto(
          "res-eje1",
          "División: " + N_1 + " / " + N_2 + " = " + N_1 / N_2
        );
    }
  });
}

function ejercicio2() {
  presionarEnter('form-eje2', 'eje2_verify');
  let btnVerify = document.getElementById("eje2_verify");

  btnVerify.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje2_N1").value);
    let N_2 = parseInt(document.getElementById("Eje2_N2").value);

    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res-eje2", "Llene los campos.");
    } else {
      if (N_1 > N_2) {
        insertTexto("res-eje2", N_1 + " es mayor que " + N_2);
      } else if (N_1 < N_2) {
        insertTexto("res-eje2", N_1 + " es menor que " + N_2);
      } else {
        insertTexto("res-eje2", N_1 + " es igual que " + N_2);
      }
    }
  });
}

function ejercicio3(valor) {
  if (valor > 100) {
    insertTexto("res-eje3", valor + " es mayor que 100");
  } else if (valor < 100) {
    insertTexto("res-eje3", valor + " es menor que 100");
  } else {
    insertTexto("res-eje3", valor + " es igual a 100");
  }
}

function ejercicio4() {
  presionarEnter('form-eje4', 'eje4_verify');
  let btnOrder = document.getElementById("eje4_verify");
  let menor;
  let medio;
  let mayor;
  btnOrder.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje4_N1").value);
    let N_2 = parseInt(document.getElementById("Eje4_N2").value);
    let N_3 = parseInt(document.getElementById("Eje4_N3").value);

    if (N_1 <= N_2 && N_1 <= N_3) {
      menor = N_1;
      if (N_2 <= N_3) {
        medio = N_2;
        mayor = N_3;
      } else {
        medio = N_3;
        mayor = N_2;
      }
    } else if (N_2 <= N_1 && N_2 <= N_3) {
      menor = N_2;
      if (N_1 <= N_3) {
        medio = N_1;
        mayor = N_3;
      } else {
        medio = N_3;
        mayor = N_1;
      }
    } else {
      menor = N_3;
      if (N_1 <= N_2) {
        medio = N_1;
        mayor = N_2;
      } else {
        medio = N_2;
        mayor = N_1;
      }
    }

    if (isNaN(N_1) || isNaN(N_2) || isNaN(N_3)) {
      insertTexto("res-eje4", "Llene los campos.");
    } else {
      insertTexto(
        "res-eje4",
        "Menor: " + menor + " Medio: " + medio + " Mayor: " + mayor
      );
    }
  });
}

function ejercicio5() {
  let btnVerify = document.getElementById("eje5_verify");
  presionarEnter('form-eje5', 'eje5_verify');
  btnVerify.addEventListener("click", () => {
    let N_1 = parseFloat(document.getElementById("Eje5_N1").value);
    let N_2 = parseFloat(document.getElementById("Eje5_N2").value);
    let N_3 = parseFloat(document.getElementById("Eje5_N3").value);

    if (isNaN(N_1) || isNaN(N_2) || isNaN(N_3)) {
      insertTexto("res-eje5", "LLene los campos.");
      insertTexto("res-eje5-2", "");
    } else {
      if (N_1 < 0 || N_1 > 5 || N_2 < 0 || N_2 > 5 || N_3 < 0 || N_3 > 5) {
        insertTexto("res-eje5", "Notas Incorrectas");
        insertTexto("res-eje5-2", "");
      } else {
        let promedio = (N_1 + N_2 + N_3) / 3;
        insertTexto("res-eje5", "Su promedio es: " + promedio.toFixed(2));
        if (promedio >= 3.5) {
          insertTexto("res-eje5-2", "Aprovado");
        } else {
          insertTexto("res-eje5-2", "No Aprovado");
        }
      }
    }
  });
}

function ejercicio6() {
  let btnVerify = document.getElementById("eje6_verify");
  presionarEnter('form-eje6', 'eje6_verify');
  btnVerify.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje6_N1").value);
    let N_2 = parseInt(document.getElementById("Eje6_N2").value);

    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res-eje6", "LLene los campos.");
      ejercicio6();
    } else {
      let area = (N_1 * N_2) / 2;
      insertTexto("res-eje6", "Area del triangulo: " + area);
      ejercicio6();
    }
  });
}

function ejercicio7() {
  let valor = parseInt(document.getElementById("Eje7_N1").value);
  if (isNaN(valor)) {
    insertTexto("res-eje7", "Llene los campos");
  } else {
    if (valor % 2 == 0) {
      insertTexto("res-eje7", valor + " es Par");
    } else {
      insertTexto("res-eje7", valor + " es Impar");
    }
  }
}

function ejercicio8() {
  let btnVerify = document.getElementById("eje8_verify");
  let btnVerify2 = document.getElementById("eje8_verify2");
  let btnVerify3 = document.getElementById("eje8_verify3");
  let bxCantRosas = document.getElementById("bxCantidadRosas");
  let bxRadios = document.getElementById("form_venta-rosas");
  let respuestas = document.getElementById("respuestas");

  ocultar(bxCantRosas);
  ocultar(btnVerify2);
  ocultar(btnVerify3);
  presionarEnter('form_venta-rosas', 'eje8_verify');
  presionarEnter('bxCantidadRosas', 'eje8_verify2');
  btnVerify.addEventListener("click", () => {
    let optRadio = document.querySelector('input[name="colorR"]:checked');

    if (optRadio) {
      let optRadio = document.getElementsByName("colorR");
      let opcionSeleccionada;

      for (var i = 0; i < optRadio.length; i++) {
        if (optRadio[i].checked) {
          opcionSeleccionada = optRadio[i].value;
          break;
        }
      }

      insertTexto("colRosa", opcionSeleccionada);
      ocultar(bxRadios);
      mostrar(bxCantRosas);
      mostrar(btnVerify2);
      mostrar(btnVerify3);
      ocultar(btnVerify);
      btnVerify2.addEventListener("click", () => {
        mostrar(respuestas);

        let valorDescuento = 0;
        let valorTotal = 0;
        let inpCantidadRosas = parseInt(
          document.getElementById("cantidadRosas").value
        );
        let optRadio = document.getElementsByName("colorR");
        let opcionSeleccionada;

        for (var i = 0; i < optRadio.length; i++) {
          if (optRadio[i].checked) {
            opcionSeleccionada = optRadio[i].value;
            break;
          }
        }

        if (isNaN(inpCantidadRosas)) {
        } else {
          switch (opcionSeleccionada) {
            case "Rojo":
              valorDescuento = 4000 * inpCantidadRosas * 0.1;
              valorTotal = 4000 * inpCantidadRosas - valorDescuento;
              break;
            case "Blanco":
              valorDescuento = 5000 * inpCantidadRosas * 0.08;
              valorTotal = 5000 * inpCantidadRosas - valorDescuento;
              break;
            case "Negro":
              valorDescuento = 0;
              valorTotal = 18000 * inpCantidadRosas;
              break;
            case "Otro":
              valorDescuento = 6000 * inpCantidadRosas * 0.02;
              valorTotal = 6000 * inpCantidadRosas - valorDescuento;
              break;
            default:
              alert("Opcion incorrecta.");
          }
          insertTexto("res-eje8", "Descuento otorgado: $" + valorDescuento);
          insertTexto("res2-eje8", "Valor total: $" + valorTotal);
        }

        btnVerify3.addEventListener("click", () => {
          ocultar(bxCantRosas);
          ocultar(btnVerify2);
          ocultar(btnVerify3);
          ocultar(respuestas);
          bxRadios.style.display = "block";
          mostrar(btnVerify);
        });
      });
    } else {
      alert("Seleccione una opción");
    }
  });
}

function ejercicio9() {
  let btnVerify = document.getElementById("eje9_verify");
  presionarEnter('form-eje9', 'eje9_verify');
  btnVerify.addEventListener("click", () => {
    let productoVendido = parseInt(document.getElementById("Eje9_N1").value);
    let valorTotalVendido = parseInt(document.getElementById("Eje9_N2").value);
    let porcentajeGanado;

    if (isNaN(productoVendido) || isNaN(valorTotalVendido)) {
      insertTexto("res-eje9", "LLene los campos.");
    } else {
      if (productoVendido < 0 || productoVendido > 100) {
        insertTexto("res-eje9", "Producto invalido");
      } else {
        if (productoVendido <= 20) {
          porcentajeGanado = valorTotalVendido * 0.05;
        } else if (productoVendido >= 21 && productoVendido <= 50) {
          porcentajeGanado = valorTotalVendido * 0.1;
        } else if (productoVendido >= 51 && productoVendido <= 80) {
          porcentajeGanado = valorTotalVendido * 0.15;
        } else if (productoVendido >= 81 && productoVendido <= 100) {
          porcentajeGanado = valorTotalVendido * 0.2;
        }
        insertTexto(
          "res-eje9",
          "Valor Porcentaje Ganado: $" + porcentajeGanado
        );
      }
    }
  });
}

function ejercicio10() {
  presionarEnter('form-eje10', 'eje10_verify');
  document.getElementById("eje10_verify").addEventListener("click", () => {
    let opcRadio = document.querySelector('input[name="colorAuto"]:checked');

    if (opcRadio) {
      let precio = 60000000;
      let precioFinal;
      let modelo = parseInt(document.getElementById("Eje10_N2").value);
      let marca = document.getElementById("Eje10_N3").value;
      let opcRadio = document.getElementsByName("colorAuto");
      let opcionSeleccionada;

      for (var i = 0; i < opcRadio.length; i++) {
        if (opcRadio[i].checked) {
          opcionSeleccionada = opcRadio[i].value;
          break;
        }
      }

      if (isNaN(modelo) || marca == "") {
        alert("Llene los campos");
      } else {
        if (opcionSeleccionada == "Rojo" && modelo > 1995) {
          insertTexto("res5-eje10", "<strong>Descuento:</strong> 10%");
          precioFinal = precio - precio * 0.1;
        } else if (opcionSeleccionada == "Verde") {
          insertTexto("res5-eje10", "<strong>Descuento:</strong> 15%");
          precioFinal = precio - precio * 0.15;
        } else {
          insertTexto("res5-eje10", "<strong>Sin Descuento</strong>");
          precioFinal = precio;
        }

        insertTexto("res1-eje10", "<strong>Precio:</strong> $" + precio);
        insertTexto("res2-eje10", "<strong>Marca:</strong> " + marca);
        insertTexto("res3-eje10", "<strong>Modelo:</strong> " + modelo);
        insertTexto(
          "res4-eje10",
          "<strong>Color:</strong> " + opcionSeleccionada
        );
        insertTexto(
          "res6-eje10",
          "<strong>Precio Final:</strong> $" + precioFinal
        );
      }
    } else {
      alert("Seleccione un color");
    }
  });
}

function ejercicio11() {
  presionarEnter('form-eje11', 'eje11_verify');
  document.getElementById("eje11_verify").addEventListener("click", () => {
    let valorFijo = 200;
    let msj = "";

    while (valorFijo > 0) {
      msj += "<p>" + valorFijo + '</p">';
      valorFijo -= 3;
    }

    insertTexto("rta11", msj);
  });
}

function ejercicio12() {
  presionarEnter('form-eje12', 'eje12_verify');
  document.getElementById("eje12_verify").addEventListener("click", () => {
    let valor = parseInt(document.getElementById("Eje12_N1").value);
    let numero_1 = 0;
    let numero_2 = 1;
    let numero_3;
    let i = 3;
    let sumaSerie;
    let msj;

    if (isNaN(valor)) {
      alert("Llene los campos");
    } else {
      sumaSerie = numero_1 + numero_2;

      if (valor >= 10 && valor <= 30) {
        msj = numero_1 + " " + numero_2;
        while (i <= valor) {
          numero_3 = numero_1 + numero_2;
          sumaSerie += numero_3;

          msj += " " + numero_3;
          insertTexto("res1-eje12", msj);
          numero_1 = numero_2;
          numero_2 = numero_3;
          i = i + 1;
        }
        insertTexto(
          "res2-eje12",
          "<strong>Suma Total Serie:</strong> " + sumaSerie
        );
        insertTexto(
          "res3-eje12",
          "<strong>Números Mostrados:</strong> " + (i - 1)
        );
      } else {
        alert("Valor incorrecto");
      }
    }
  });
}

function ejercicio13() {
  presionarEnter('form-eje13', 'eje13_verify');
  document.getElementById("eje13_verify").addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje13_N1").value);
    if (isNaN(limite)) {
      insertTexto("res-eje13", "Llene los campos");
    } else {
      let contador = 0;
      let i = 0;
      let msj = "";
      while (i < limite) {
        if (esPrimo(contador) == true) {
          msj += contador + " ";
          i++;
        }
        contador++;
      }
      insertTexto("res-eje13", msj);
    }
  });
}

function ejercicio14() {
  presionarEnter('form-eje14', 'eje14_verify');
  document.getElementById("eje14_verify").addEventListener("click", () => {
    let valor = parseInt(document.getElementById("Eje14_N1").value);
    if (isNaN(valor)) {
      alert("Llene los campos");
    } else {
      let sumaPares = 0;
      let sumaImpares = 0;
      let cantidadPares = 0;
      let cantidadImpares = 0;

      let msjPares = "";
      let msjImpares = "";

      console.log(sumaPares);
      console.log(sumaImpares);
      console.log(cantidadPares);
      console.log(cantidadImpares);
      if (valor <= 10) {
        alert("Valor incorrecto");
      } else {
        for (let i = 0; i < valor; i++) {
          if (i % 2 == 0) {
            msjPares += i + " ";
            sumaPares = sumaPares + i;
            cantidadPares = cantidadPares + 1;
          } else {
            msjImpares += i + " ";
            sumaImpares = sumaImpares + i;
            cantidadImpares = cantidadImpares + 1;
          }
        }
        console.log(sumaPares);
        console.log(sumaImpares);
        console.log(cantidadPares);
        console.log(cantidadImpares);
        insertTexto("res1-eje14", "<strong>Pares:<br></strong> " + msjPares);
        insertTexto(
          "res2-eje14",
          "<strong>Impares:<br></strong> " + msjImpares
        );
        insertTexto(
          "res3-eje14",
          "<strong>Suma <br>Pares:<br></strong> " + sumaPares
        );
        insertTexto(
          "res4-eje14",
          "<strong>Suma Impares:<br></strong> " + sumaImpares
        );
        insertTexto(
          "res5-eje14",
          "<strong>Promedio Pares:<br></strong> " + sumaPares / cantidadPares
        );
        insertTexto(
          "res6-eje14",
          "<strong>Promedio Impares:<br></strong> " +
          sumaImpares / cantidadImpares
        );
        insertTexto(
          "res7-eje14",
          "<strong>Diferencia Pares-Impares:<br></strong> " +
          Math.abs(sumaPares - sumaImpares)
        );
      }
    }
  });
}

function ejercicio15() {
  presionarEnter('form-eje15', 'eje15_verify');
  document.getElementById("eje15_verify").addEventListener("click", () => {
    let J = parseInt(document.getElementById("Eje15_N1").value);
    let K = parseInt(document.getElementById("Eje15_N2").value);
    let opc = parseInt(document.getElementById("Eje15_N3").value);

    let rta = "";
    let operacion = 0;
    if (isNaN(J) || isNaN(J) || isNaN(opc)) {
      alert("Llene los campos");
    } else {
      if (opc == 1) {
        rta = J + " + " + K + " = " + (J + K);
      } else if (opc == 2) {
        operacion = J % K;
        rta = J + " % " + K + " = " + operacion;
      } else if (opc == 3) {
        rta = J + " / " + K + " = " + J / K;
      } else if (opc == 4) {
        rta = J + " + " + K + " + " + 1 + " = " + (J + K + 1);
      } else if (opc == 5) {
        rta = J + " * " + K + " * " + 1 + " = " + J * K * 1;
      } else {
        rta = "Opción invalida";
      }
    }
    insertTexto("res-eje15", rta);
  });
}

function ejercicio16() {
  let valor = parseInt(document.getElementById("Eje16_N1").value);
  if (isNaN(valor)) {
    insertTexto("res-eje16", "Llene los campos.");
  } else {
    if (valor % 3 == 0 && valor % 2 == 0) {
      insertTexto("res-eje16", "Divisible por 2 y 3.");
    } else {
      insertTexto("res-eje16", "No es divisible.");
    }
  }
}

function ejercicio17() {
  presionarEnter('form-eje17', 'eje17_verify');
  document.getElementById("eje17_verify").addEventListener("click", () => {
    let valor1 = parseInt(document.getElementById("Eje17_N1").value);
    let valor2 = parseInt(document.getElementById("Eje17_N2").value);
    let msj = "";

    if (isNaN(valor1) || isNaN(valor2)) {
      insertTexto("res-eje17", "Llene los campos");
    } else {
      insertTexto(
        "res-eje17",
        "Números primos en el rango [" + valor1 + ", " + valor2 + "]: "
      );

      for (let i = valor1; i < valor2; i++) {
        if (esPrimo(i)) {
          msj += i + " ";
        }
      }
      insertTexto("res2-eje17", msj);
    }
  });
}

function ejercicio18() {
  presionarEnter('form-eje18', 'eje18_verify');
  document.getElementById('eje18_verify').addEventListener('click', () => {
    let msj = '';
    let h;
    let m;
    let s;
    for (h = 0; h < 24; h++) {
      for (m = 0; m < 60; m++) {
        for (s = 0; s < 60; s++) {
          msj += h + " : " + m + " : " + s + " <br>";
        }
      }
    }
    insertTexto('res-eje18', msj);
  })
}

function ejercicio19() {
  presionarEnter('form-eje19', 'eje19_verify');
  document.getElementById("eje19_verify").addEventListener("click", () => {
    let valor = parseInt(document.getElementById("Eje19_N1").value);
    if (isNaN(valor)) {
      insertTexto("res-eje19", "Llene los campos");
    } else {
      let msj = "";
      let i = 1;
      while (i <= 10) {
        msj += valor + " * " + i + " = " + valor * i + "<br>";
        i++;
      }
      insertTexto("res-eje19", msj);
    }
  });
}

function ejercicio20() {
  presionarEnter('form-eje20', 'eje20_verify');
  document.getElementById("eje20_verify").addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje20_N1").value);
    if (isNaN(limite)) {
      alert("Llene los campos.");
    } else {
      let pares = new Array();
      let impares = new Array();
      let primos = new Array();
      let compuestos = new Array();

      let valores = n_aleatorios(limite);

      let msj1 = "";
      let msj2 = "";
      let msj3 = "";
      let msj4 = "";
      let msj5 = "";

      for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 == 0) {
          pares[i] = valores[i];
        } else {
          impares[i] = valores[i];
        }

        if (esPrimo(valores[i]) == true) {
          primos[i] = valores[i];
        } else {
          compuestos[i] = valores[i];
        }

        msj1 += valores[i] + " ";

        if (pares[i] != undefined) {
          msj2 += pares[i] + " ";
        }

        if (impares[i] != undefined) {
          msj3 += impares[i] + " ";
        }

        if (primos[i] != undefined) {
          msj4 += primos[i] + " ";
        }

        if (compuestos[i] != undefined) {
          msj5 += compuestos[i] + " ";
        }
      }

      insertTexto(
        "res1-eje20",
        "<strong>Números Generados:<br></strong> " + msj1
      );
      insertTexto("res2-eje20", "<strong>Números Pares:<br></strong> " + msj2);
      insertTexto(
        "res3-eje20",
        "<strong>Números Impares:<br></strong> " + msj3
      );
      insertTexto("res4-eje20", "<strong>Números Primos:<br></strong> " + msj4);
      insertTexto(
        "res5-eje20",
        "<strong>Números Compuestos:<br></strong> " + msj5
      );
    }
  });
}

function ejercicio21() {
  presionarEnter('form-eje21', 'eje21_verify');
  document.getElementById("eje21_verify").addEventListener("click", () => {
    let n1 = parseInt(document.getElementById("Eje21_N1").value);
    let n2 = parseInt(document.getElementById("Eje21_N2").value);

    if (isNaN(n1) || isNaN(n2)) {
      insertTexto("res-eje21", "Llene los campos");
    } else {
      insertTexto("res-eje21", n1 + " + " + n2 + " = " + (n1 + n2));
    }
  });
}

function ejercicio22() {
  presionarEnter('form-eje22', 'eje22_verify');
  document.getElementById("eje22_verify").addEventListener("click", () => {
    let N_1 = parseFloat(document.getElementById("Eje22_N1").value);
    let N_2 = parseFloat(document.getElementById("Eje22_N2").value);
    let N_3 = parseFloat(document.getElementById("Eje22_N3").value);
    let N_4 = parseFloat(document.getElementById("Eje22_N4").value);

    if (isNaN(N_1) || isNaN(N_2) || isNaN(N_3) || isNaN(N_4)) {
      insertTexto("res-eje22", "LLene los campos.");
    } else {
      if (
        N_1 < 0 ||
        N_1 > 5 ||
        N_2 < 0 ||
        N_2 > 5 ||
        N_3 < 0 ||
        N_3 > 5 ||
        N_4 < 0 ||
        N_4 > 5
      ) {
        insertTexto("res-eje22", "Notas Incorrectas");
      } else {
        let promedio = (N_1 + N_2 + N_3 + N_4) / 4;
        insertTexto("res-eje22", "Su promedio es: " + promedio);
        if (promedio >= 3.5) {
          insertTexto("res2-eje22", "Aprovado");
        } else {
          insertTexto("res2-eje22", "No Aprovado");
        }
      }
    }
  });
}

function ejercicio23() {
  presionarEnter('form-eje23', 'eje23_verify');
  document.getElementById("eje23_verify").addEventListener("click", () => {
    let base = parseFloat(document.getElementById("Eje23_N1").value);
    let altura = parseFloat(document.getElementById("Eje23_N2").value);

    if (isNaN(base) || isNaN(altura)) {
      insertTexto("res-eje23", "Llene los campos");
    } else {
      insertTexto("res-eje23", "<b>Área Rectangulo:<br></b>" + base * altura);
    }
  });
}

function ejercicio24() {
  presionarEnter('form-eje24', 'eje24_verify');
  document.getElementById("eje24_verify").addEventListener("click", () => {
    let radio = parseFloat(document.getElementById("Eje24_N1").value);
    if (isNaN(radio)) {
      insertTexto("res-eje24", "Llene los campos");
    } else {
      insertTexto(
        "res-eje24",
        "<b>Área Circunferencia:<br></b>" + Math.PI * radio ** 2
      );
    }
  });
}

function ejercicio25() {
  presionarEnter('form-eje25', 'eje25_verify');
  document.getElementById("eje25_verify").addEventListener("click", () => {
    let base = parseFloat(document.getElementById("Eje25_N1").value);
    let alturaTrg = parseFloat(document.getElementById("Eje25_N2").value);
    let alturaRtg = parseFloat(document.getElementById("Eje25_N3").value);

    if (isNaN(base) || isNaN(alturaTrg) || isNaN(alturaRtg)) {
      alert("Llene los campos");
    } else {
      let areaTrg = 0;
      let areaRtg = 0;
      let areaTot = 0;

      areaTrg = (base * alturaTrg) / 2;
      areaRtg = base * alturaRtg;
      areaTot = areaTrg + areaRtg;

      insertTexto(
        "res1-eje25",
        "<b>Área Triángulo:<br></b>" + areaTrg.toFixed(2) + " Mts"
      );
      insertTexto(
        "res2-eje25",
        "<b>Área Rectangulo:<br></b>" + areaRtg.toFixed(2) + " Mts"
      );
      insertTexto(
        "res3-eje25",
        "<b>Área Total:<br></b>" + areaTot.toFixed(2) + " Mts"
      );
    }
  });
}

function ejercicio26() {
  presionarEnter('form-eje26', 'eje26_verify');
  document.getElementById("eje26_verify").addEventListener("click", () => {
    let hipotenusa = parseFloat(document.getElementById("Eje26_N1").value);
    let mdBase_radio = parseFloat(document.getElementById("Eje26_N2").value); //mdBase = CatetoA. mdBase*2 = baseTotal
    let catetoB = 0; //altura = CatetoB

    let areaTrg = 0;
    let areaCrl = 0;
    let areaTot = 0;

    if (isNaN(hipotenusa) || isNaN(mdBase_radio)) {
      alert("Llene los campos");
    } else {
      operacion = hipotenusa ** 2 - mdBase_radio ** 2;
      catetoB = Math.sqrt(operacion);

      areaTrg = (mdBase_radio * 2 * catetoB) / 2;
      areaCrl = (Math.PI * mdBase_radio ** 2) / 2;
      areaTot = areaTrg + areaCrl;

      insertTexto(
        "res1-eje26",
        "<b>Área Triángulo:<br></b>" + areaTrg.toFixed(2) + " Mts"
      );
      insertTexto(
        "res2-eje26",
        "<b>Área Circulo:<br></b>" + areaCrl.toFixed(2) + " Mts"
      );
      insertTexto(
        "res3-eje26",
        "<b>Área Total:<br></b>" + areaTot.toFixed(2) + " Mts"
      );
    }
  });
}

function ejercicio27() {
  presionarEnter('form-eje27', 'eje27_verify');
  document.getElementById("eje27_verify").addEventListener("click", () => {
    let litros = parseFloat(document.getElementById("Eje27_N1").value);
    let precio = parseFloat(document.getElementById("Eje27_N2").value);
    let galon = 0;
    let precioFinal = 0;
    if (isNaN(litros) || isNaN(precio)) {
      alert("Llene los campos");
    } else {
      galon = litros / 3.785;
      precioFinal = galon * precio;
      insertTexto(
        "res1-eje27",
        "<b>Litros Producidos:<br></b> " + litros + "L"
      );
      insertTexto(
        "res2-eje27",
        "<b>Galónes Producidos:<br></b> " + galon.toFixed(2) + "Gal"
      );
      insertTexto(
        "res3-eje27",
        "<b>Precio Final:<br></b> $" + precioFinal.toFixed(2)
      );
    }
  });
}

function ejercicio28() {
  presionarEnter('form-eje28', 'eje28_verify');
  document.getElementById("eje28_verify").addEventListener("click", () => {
    let X1 = parseInt(document.getElementById("Eje28_N1").value);
    let X2 = parseInt(document.getElementById("Eje28_N2").value);
    let Y1 = parseInt(document.getElementById("Eje28_N2").value);
    let Y2 = parseInt(document.getElementById("Eje28_N4").value);
    let diferenciaX = 0;
    let diferenciaY = 0;
    let distancia = 0;

    if (isNaN(X1) || isNaN(X2) || isNaN(Y1) || isNaN(Y2)) {
      alert("Llene los campos");
    } else {
      diferenciaX = Math.abs(X1 - X2);
      diferenciaY = Math.abs(Y1 - Y2);

      distancia = Math.sqrt(diferenciaX ** 2 + diferenciaY ** 2); //diferencia euclidiana

      insertTexto(
        "res-eje28",
        "Distancia entre los puntos <b>[" +
        X1 +
        ", " +
        X2 +
        "]</b> y <b>[" +
        Y1 +
        ", " +
        Y2 +
        "]</b><br>" +
        distancia.toFixed(3)
      );
    }
  });
}

function ejercicio29() {
  presionarEnter('form-eje29', 'eje29_verify');
  document.getElementById("eje29_verify").addEventListener("click", () => {
    let telaM = parseFloat(document.getElementById("Eje29_N1").value);
    let telaP = 0;
    if (isNaN(telaM)) {
      insertTexto("res-eje29", "Llene los campos");
    } else {
      telaP = telaM / 0.0254;
      insertTexto("res-eje29", "Pulgadas: " + telaP.toFixed(2) + "in");
    }
  });
}

function ejercicio30() {
  presionarEnter('form-eje30', 'eje30_verify');
  document.getElementById("eje30_verify").addEventListener("click", () => {
    let altura = parseFloat(document.getElementById("Eje30_N1").value);
    let largo = parseFloat(document.getElementById("Eje30_N2").value);
    let ancho = parseFloat(document.getElementById("Eje30_N3").value);
    let volumen = 0;
    let costo = 500.0;
    let pago = 0;

    if (isNaN(altura) || isNaN(ancho) || isNaN(largo)) {
      insertTexto("res-eje30", "Llene los campos");
      insertTexto("res2-eje30", "");
      insertTexto("res3-eje30", "");
    } else {
      volumen = largo * ancho * altura;
      pago = costo * volumen;
      insertTexto(
        "res-eje30",
        "<b>Volumen Alberca:</b><br>" + volumen.toFixed(2) + "M2"
      );
      insertTexto(
        "res2-eje30",
        "<b>Pago Metro Cúbico:</b><br>$" + costo.toFixed(2)
      );
      insertTexto("res3-eje30", "<b>Pago Total:</b><br>$" + pago.toFixed(2));
    }
  });
}

function ejercicio31() {
  let valor1 = parseFloat(document.getElementById("Eje31_N1").value);
  let valor2 = parseFloat(document.getElementById("Eje31_N2").value);
  if (isNaN(valor1) || isNaN(valor2)) {
    insertTexto("res-eje31", "Llene los campos");
  } else {
    if (valor1 > valor2) {
      insertTexto("res-eje31", valor1 + " es mayor a " + valor2);
    } else if (valor1 < valor2) {
      insertTexto("res-eje31", valor2 + " es mayor a " + valor1);
    } else {
      insertTexto("res-eje31", valor1 + " es igual a " + valor2);
    }
  }
}

function ejercicio32() {
  let valor1 = parseFloat(document.getElementById("Eje32_N1").value);

  if (isNaN(valor1)) {
    insertTexto("res-eje32", "Llene los campos");
  } else {
    if (valor1 >= 0) {
      insertTexto("res-eje32", valor1 + " es positivo");
    } else {
      insertTexto("res-eje32", valor1 + " es negativo");
    }
  }
}

function ejercicio33() {
  presionarEnter('form-eje33', 'eje33_verify');
  document.getElementById("eje33_verify").addEventListener("click", () => {
    let cantLapices = parseInt(document.getElementById("Eje33_N1").value);
    let costoLapices = 0;
    if (isNaN(cantLapices)) {
      insertTexto("res-eje33", "Llene los campos");
    } else {
      if (cantLapices >= 1000) {
        costoLapices = 85;
      } else {
        costoLapices = 90;
      }
      insertTexto(
        "res-eje33",
        "Valor lapiz: $" +
        costoLapices +
        "<br>Valor Total: $" +
        costoLapices * cantLapices
      );
    }
  });
}

function ejercicio34() {
  presionarEnter('form-eje34', 'eje34_verify');
  document.getElementById("eje34_verify").addEventListener("click", () => {
    let costoVestido = parseFloat(document.getElementById("Eje34_N1").value);
    let descuento = 0;
    let precioFinal = 0;
    if (isNaN(costoVestido)) {
      insertTexto("res-eje34", "Llene los campos");
    } else {
      if (costoVestido >= 2500) {
        descuento = 15;
        precioFinal = costoVestido - costoVestido * (descuento / 100);
      } else {
        descuento = 8;
        precioFinal = costoVestido - costoVestido * (descuento / 100);
      }
      insertTexto(
        "res-eje34",
        "<b>Descuento: </b><br>" +
        descuento +
        "%<br>" +
        "Precio Final: <br>$" +
        precioFinal
      );
    }
  });
}

function ejercicio35() {
  let N_1 = parseFloat(document.getElementById("Eje35_N1").value);
  let N_2 = parseFloat(document.getElementById("Eje35_N2").value);
  let N_3 = parseFloat(document.getElementById("Eje35_N3").value);
  let menor = 0;
  let medio = 0;
  let mayor = 0;
  if (isNaN(N_1) || isNaN(N_2) || isNaN(N_3)) {
    insertTexto("res-eje35", "Llene los campos");
  } else {
    if (N_1 <= N_2 && N_1 <= N_3) {
      menor = N_1;
      if (N_2 <= N_3) {
        medio = N_2;
        mayor = N_3;
      } else {
        medio = N_3;
        mayor = N_2;
      }
    } else if (N_2 <= N_1 && N_2 <= N_3) {
      menor = N_2;
      if (N_1 <= N_3) {
        medio = N_1;
        mayor = N_3;
      } else {
        medio = N_3;
        mayor = N_1;
      }
    } else {
      menor = N_3;
      if (N_1 <= N_2) {
        medio = N_1;
        mayor = N_2;
      } else {
        medio = N_2;
        mayor = N_1;
      }
    }
    insertTexto("res-eje35", "Número mayor: " + mayor);
  }
}

function ejercicio36() {
  presionarEnter('form-eje36', 'eje36_verify');
  document.getElementById("eje36_verify").addEventListener("click", () => {
    let nPersonas = parseInt(document.getElementById("Eje36_N1").value);
    let costoPlato = 0;
    let pagoTotal = 0;
    if (isNaN(nPersonas) == true) {
      insertTexto("res-eje36", "Llene los campos");
    } else {
      if (nPersonas < 200) {
        costoPlato = 95.0;
      } else if (nPersonas >= 200 && nPersonas <= 300) {
        costoPlato = 85.0;
      } else {
        costoPlato = 75.0;
      }
      pagoTotal = nPersonas * costoPlato;
      insertTexto(
        "res-eje36",
        "Costo Plato: <br>$" +
        costoPlato +
        "<br><b>Valor a pagar: </b><br>$" +
        pagoTotal
      );
    }
  });
}

function ejercicio37() {
  presionarEnter('form-eje37', 'eje37_verify');
  document.getElementById("eje37_verify").addEventListener("click", () => {
    let KlUva = parseInt(document.getElementById("Eje37_N1").value);
    let opR1 = document.querySelector('input[name="tipo"]:checked');
    let opR2 = document.querySelector('input[name="tamaño"]:checked');

    if (opR1 || opR2) {
      if (isNaN(KlUva)) {
        alert("Llene los campos");
      } else {
        let opTipoUva = document.getElementsByName("tipo");
        let opTmnoUva = document.getElementsByName("tamaño");
        let opSelect1;
        let opSelect2;
        let precioProducto = 0;
        let precioFinal = 0;

        for (let i = 0; i < opTipoUva.length; i++) {
          if (opTipoUva[i].checked) {
            opSelect1 = opTipoUva[i].value;
          }
        }
        for (let i = 0; i < opTmnoUva.length; i++) {
          if (opTmnoUva[i].checked) {
            opSelect2 = opTmnoUva[i].value;
          }
        }
        if (opSelect1 == "A") {
          if (opSelect2 == "1") {
            precioProducto = 20;
          }
          if (opSelect2 == "2") {
            precioProducto = 30;
          }
        }
        if (opSelect1 == "B") {
          if (opSelect2 == "1") {
            precioProducto = 30;
          }
          if (opSelect2 == "2") {
            precioProducto = 50;
          }
        }
        precioFinal = KlUva * precioProducto;
        insertTexto("res1-eje37", "<b>Tipo Uva: </b><br>" + opSelect1);
        insertTexto("res2-eje37", "<b>Tamaño Uva: </b><br>" + opSelect2);
        insertTexto(
          "res3-eje37",
          "<b>Precio Producto: </b><br>$" + precioProducto
        );
        insertTexto("res4-eje37", "<b>Precio Final: </b><br>$" + precioFinal);
      }
    } else {
      alert("Seleccione una opción");
    }
  });
}

function ejercicio38() {
  presionarEnter('form-eje38', 'eje38_verify');
  document.getElementById("eje38_verify").addEventListener("click", () => {
    let cantEsts = parseInt(document.getElementById("Eje38_N1").value);
    let pagoAlumno = 0;
    let pagoTotal = 0;
    if (isNaN(cantEsts)) {
      insertTexto("res1-eje38", "Llene los campos");
      insertTexto("res2-eje38", "");
      insertTexto("res3-eje38", "");
    } else {
      if (cantEsts < 30 && cantEsts > 0) {
        pagoAlumno = 4000 / cantEsts;
      } else if (cantEsts >= 30 && cantEsts < 50) {
        pagoAlumno = 95.0;
      } else if (cantEsts >= 50 && cantEsts < 100) {
        pagoAlumno = 70.0;
      } else if (cantEsts >= 100) {
        pagoAlumno = 65.0;
      }
      pagoTotal = pagoAlumno * cantEsts;
      insertTexto("res1-eje38", "Cantidad Estudiantes: <br>" + cantEsts);
      insertTexto(
        "res2-eje38",
        "Pago Estudiante: <br>" + pagoAlumno.toFixed(2)
      );
      insertTexto("res3-eje38", "Total Viaje: <br>" + pagoTotal);
    }
  });
}

function ejercicio39() {
  presionarEnter('form-eje39', 'eje39_verify');
  document.getElementById("eje39_verify").addEventListener("click", () => {
    let tiempo = parseFloat(document.getElementById("Eje39_N1").value);
    let dia = document.getElementById("Eje39_N2").value;
    let turno = document.querySelector('input[name="turno"]:checked');
    let opTurno = document.getElementsByName("turno");
    let opSeleccionada;
    let pagoMinuto = 0;
    let pagoTiempo = 0;
    let impueto = 0;
    let nomDia = "";

    if (isNaN(tiempo) || dia == "") {
      insertTexto("res1-eje39", "");
      insertTexto("res2-eje39", "");
      insertTexto("res3-eje39", "");
      insertTexto("res4-eje39", "");
      alert("Llene los campos");
    } else {
      if (turno) {
        if (tiempo > 0 && tiempo < 5) {
          pagoMinuto = 1.0;
        } else if (tiempo >= 5 && tiempo < 8) {
          pagoMinuto = 0.8;
        } else if (tiempo >= 8 && tiempo < 10) {
          pagoMinuto = 0.7;
        } else {
          pagoMinuto = 0.5;
        }
        pagoTiempo = pagoMinuto * tiempo;
        if (
          dia == "l" ||
          dia == "m" ||
          dia == "mi" ||
          dia == "j" ||
          dia == "v" ||
          dia == "s" ||
          dia == "d"
        ) {
          switch (dia) {
            case "l":
              nomDia = "Lunes";
              break;
            case "m":
              nomDia = "Martes";
              break;
            case "mi":
              nomDia = "Miercoles";
              break;
            case "j":
              nomDia = "Jueves";
              break;
            case "v":
              nomDia = "Viernes";
              break;
            case "s":
              nomDia = "Sabado";
              break;
            case "d":
              nomDia = "Domingo";
              break;
          }
          for (let i = 0; i < opTurno.length; i++) {
            if (opTurno[i].checked) {
              opSeleccionada = opTurno[i].value;
            }
          }
          if (dia == "d") {
            impueto = 3;
          } else {
            if (opSeleccionada == "matutino") {
              impueto = 15;
            }
            if (opSeleccionada == "vespertino") {
              impueto = 10;
            }
          }
          pagoTiempo = pagoTiempo + pagoTiempo * (impueto / 100);
          insertTexto("res1-eje39", "<b>Tiempo: </b><br>" + tiempo + " min");
          insertTexto(
            "res2-eje39",
            "<b>Día y Turno:</b> <br>" + nomDia + "<br>" + opSeleccionada
          );
          insertTexto("res3-eje39", "<b>Impuesto: </b><br>" + impueto + "%");
          insertTexto(
            "res4-eje39",
            "<b>Total:</b> <br>$" + pagoTiempo.toFixed(2)
          );
        } else {
          insertTexto("res1-eje39", "");
          insertTexto("res2-eje39", "");
          insertTexto("res3-eje39", "");
          insertTexto("res4-eje39", "");
          alert("Día incorrecto");
        }
      } else {
        alert("Seleccione una opción");
      }
    }
  });
}

function ejercicio40() {
  presionarEnter('form-eje40', 'eje40_verify');
  document.getElementById("eje40_verify").addEventListener("click", () => {
    let TBus = document.querySelector('input[name = "tipoBus"]:checked');
    let opTBus = document.getElementsByName("tipoBus");
    let opSelect;

    let cantPersonas = parseInt(document.getElementById("Eje40_N1").value);

    let pagoPersona = 0.0;
    let pagoTotal = 0.0;

    if (isNaN(cantPersonas)) {
      insertTexto("res-eje40", "Llene los campos");
    } else {
      if (TBus) {
        for (let i = 0; i < opTBus.length; i++) {
          if (opTBus[i].checked) {
            opSelect = opTBus[i].value;
          }
        }
        if (opSelect == "A") {
          pagoPersona = 2.0;
        }
        if (opSelect == "B") {
          pagoPersona = 2.5;
        }
        if (opSelect == "C") {
          pagoPersona = 3.0;
        }

        if (cantPersonas > 0) {
          if (cantPersonas <= 20) {
            pagoTotal = pagoPersona * 20;
          } else {
            pagoTotal = pagoPersona * cantPersonas;
          }
          insertTexto(
            "res-eje40",
            "<b>Tipo Bus: </b><br>" +
            opSelect +
            "<br><b>Total Pago: </b>$" +
            pagoTotal
          );
        } else {
          insertTexto("res-eje40", "Cantidad Incorrecta");
        }
      } else {
        insertTexto("res-eje40", "Seleccione una opción");
      }
    }
  });
}

function ejercicio41() {
  let totPagTratamiento = 0;
  let btnVerify = document.getElementById("eje41_verify");
  let btnReload = document.getElementById("eje41_reload");
  btnReload.style.display = "none";
  presionarEnter('form-eje41', 'eje41_verify');
  btnVerify.addEventListener("click", () => {
    let cantidadCitas = parseInt(document.getElementById("Eje41_N1").value);
    let numCita = parseInt(document.getElementById("Eje41_N2").value);
    let valorCita = 0.0;
    let citasRestantes = cantidadCitas;
    if (isNaN(cantidadCitas) || isNaN(numCita)) {
      insertTexto("res-eje41", "Llene los campos");
      insertTexto("res1-eje41", "");
      insertTexto("res2-eje41", "");
      insertTexto("res3-eje41", "");
      insertTexto("res4-eje41", "");
    } else {
      if (numCita > citasRestantes) {
        insertTexto("res-eje41", "Número de cita incorrecto");
        insertTexto("res1-eje41", "");
        insertTexto("res2-eje41", "");
        insertTexto("res3-eje41", "");
        insertTexto("res4-eje41", "");
      } else {
        citasRestantes -= numCita;
        if (numCita > 0 && numCita <= 3) {
          valorCita = 200.0;
          totPagTratamiento = totPagTratamiento + valorCita;
        } else if (numCita > 3 && numCita <= 5) {
          valorCita = 150.0;
          totPagTratamiento = totPagTratamiento + valorCita;
        } else if (numCita > 5 && numCita <= 8) {
          valorCita = 100.0;
          totPagTratamiento = totPagTratamiento + valorCita;
        } else if (numCita > 8) {
          valorCita = 50.0;
        } else {
          insertTexto("res-eje41", "Número de cita incorrecto");
          insertTexto("res1-eje41", "");
          insertTexto("res2-eje41", "");
          insertTexto("res3-eje41", "");
          insertTexto("res4-eje41", "");
        }
        if (citasRestantes == 0) {
          insertTexto("resFn-eje41", "Tratamiento completado");
          btnVerify.style.display = "none";
          btnReload.style.display = "block";
          document.getElementById("Eje41_N1").disabled = true;
          document.getElementById("Eje41_N2").disabled = true;
        }
        insertTexto("res-eje41", "");
        insertTexto("res1-eje41", "<b>Citas Restantes: </b><br>" + citasRestantes);
        insertTexto("res2-eje41", "<b>Total Citas: </b><br>" + cantidadCitas);
        insertTexto("res3-eje41", "<b>Valor Cita: </b><br>$" + valorCita);
        insertTexto("res4-eje41", "<b>Valor Actual Tratamiento</b><br>$" + totPagTratamiento);
      }
    }
  });
  btnReload.addEventListener("click", () => {
    btnVerify.style.display = "block";
    btnReload.style.display = "none";
    document.getElementById("Eje41_N1").disabled = false;
    document.getElementById("Eje41_N2").disabled = false;
    document.getElementById("Eje41_N1").focus();
    insertTexto("resFn-eje41", "");
    insertTexto("res1-eje41", "");
    insertTexto("res2-eje41", "");
    insertTexto("res3-eje41", "");
    insertTexto("res4-eje41", "");
    totPagTratamiento = 0;
  });
}

function ejercicio42() {
  presionarEnter('form-eje42', 'eje42_verify');
  document.getElementById("eje42_verify").addEventListener("click", () => {
    let ubicacion = document.querySelector('input[name="zona"]:checked');
    let peso = parseFloat(document.getElementById("Eje42_N1").value);
    if (isNaN(peso)) {
      insertTexto("res-eje42", "Llene los campos");
    } else {
      if (ubicacion) {
        if (peso > 5) {
          insertTexto("res-eje42", "Sobrepasa el peso permitido");
          insertTexto("res1-eje42", "");
          insertTexto("res2-eje42", "");
          insertTexto("res3-eje42", "");
        } else if (peso <= 0) {
          insertTexto("res-eje42", "Peso incorrecto");
          insertTexto("res1-eje42", "");
          insertTexto("res2-eje42", "");
          insertTexto("res3-eje42", "");
        } else {
          let opUbicacion = document.getElementsByName("zona");
          let opSelect;
          let costoDestino;
          let costoFinal;
          for (let i = 0; i < opUbicacion.length; i++) {
            if (opUbicacion[i].checked) {
              opSelect = opUbicacion[i].value;
            }
          }
          switch (opSelect) {
            case "A-norte":
              costoDestino = 11;
              break;
            case "A-central":
              costoDestino = 10;
              break;
            case "A-sur":
              costoDestino = 12;
              break;
            case "Europa":
              costoDestino = 24;
              break;
            case "Asia":
              costoDestino = 27;
              break;
          }
          costoFinal = peso * costoDestino;
          insertTexto("res-eje42", "");
          insertTexto("res1-eje42", "<b>Destino: </b><br>" + opSelect);
          insertTexto(
            "res2-eje42",
            "<b>Costo Minimo: </b><br>$" + costoDestino
          );
          insertTexto(
            "res3-eje42",
            "<b>Total: </b><br>$" + costoFinal.toFixed(2)
          );
        }
      } else {
        insertTexto("res-eje42", "Seleccione un opción");
      }
    }
  });
}

function ejercicio43() {
  document.getElementById("eje43-radios").style.display = "none";
  document.getElementById("eje43-radios-apl").style.display = "none";
  document.getElementById("eje43_verify2").style.display = "none";
  document.getElementById("eje43_verify3").style.display = "none";
  presionarEnter('form-eje43', 'eje43_verify');
  document.getElementById("eje43_verify").addEventListener("click", () => {
    let cantTarjetas = parseInt(document.getElementById("Eje43_N1").value);
    if (isNaN(cantTarjetas)) {
      insertTexto("res-eje43", "Llene los campos");
    } else {
      let msj = "";
      for (var i = 0; i < cantTarjetas; i++) {
        msj +=
          '<div class="radios" id="eje43-radios' +
          (i + 1) +
          '"><label for="tipoTarjeta">Tipo de tarjeta ' +
          (i + 1) +
          '</label><section class="col rads"><input type="radio" name="tipoTarjeta' +
          (i + 1) +
          '" id="Eje43-' +
          (i + 1) +
          '_Op1" value="1"/><label for="Eje43-' +
          (i + 1) +
          '_Op1">1</label></section ><section class="col rads"><input type="radio" name="tipoTarjeta' +
          (i + 1) +
          '" id="Eje43-' +
          (i + 1) +
          '_Op2" value="2" /><label for="Eje43-' +
          (i + 1) +
          '_Op2">2</label></section><section class="col rads"><input type="radio" name="tipoTarjeta' +
          (+ i + 1) +
          '" id="Eje43-' +
          (i + 1) +
          '_Op3" value="3" /><label for="Eje43-' +
          (i + 1) +
          '_Op3">3</label></section></div>';
      }
      document.getElementById("bx-tpTarjetas").innerHTML = msj;

      document.getElementById("Eje43_N1").disabled = true;
      document.getElementById("eje43_verify2").style.display = "block";
      document.getElementById("eje43_verify").style.display = "none";
    }
  });
  document.getElementById("eje43_verify2").addEventListener("click", () => {
    document.getElementById("eje43-radios-apl").style.display = "block";
    let opTpTarjeta = [];
    let opSelectTpTarjeta;
    let opSelect = [];
    for (var i = 0; i < cantTarjetas; i++) {
      opTpTarjeta[i] = document.getElementsByName("tipoTarjeta" + (i + 1));

      document.getElementById("eje43-radios" + (i + 1)).style.display =
        "none";
      document.getElementById("eje43_verify2").style.display = "none";
      document.getElementById("eje43_verify3").style.display = "block";
    }

    for (let i = 0; i < opTpTarjeta.length; i++) {
      opSelectTpTarjeta = opTpTarjeta[i];
      opSelect[i] = [];
      for (let x = 0; x < opSelectTpTarjeta.length; x++) {
        if (opSelectTpTarjeta[x].checked) {
          opSelect[i].push(opSelectTpTarjeta[x].value);
        }
      }
    }

    let msj2 = "";
    for (var i = 0; i < cantTarjetas; i++) {
      msj2 +=
        '<section class="col rads"><input type="radio" name="aplTarjeta" id="Eje43-' +
        (i + 1) +
        '_apl" value="' +
        (i + 1) +
        '" /><label for="Eje43-' +
        (i + 1) +
        '_apl">Tarjeta ' +
        (i + 1) +
        "</label></section>";
    }
    document.getElementById("bx-aplTarjetas").innerHTML = msj2;
  });
  document.getElementById("eje43_verify3").addEventListener("click", () => {
    document.getElementById("eje43-radios-apl").style.display = "none";
    document.getElementById("eje43_verify3").style.display = "none";
    insertTexto("res1-eje43", "<b>Tipo Tarjeta: </b><br>");
    insertTexto("res2-eje43", "<b>Limite Aplicado: </b><br>");
  });
}

function ejercicio44() {
  let btnVolver = document.getElementById("eje44_reload");
  let btnGirar = document.getElementById("eje44_verify2");
  btnVolver.style.display = "none";
  btnGirar.style.display = "none";
  presionarEnter('form-eje44', 'eje44_verify')
  document.getElementById("eje44_verify").addEventListener("click", () => {
    let valCompra = parseFloat(document.getElementById("Eje44_N1").value);
    let opGenero = document.querySelector('input[name="genero"]:checked');

    let form = document.getElementById("form-eje44");

    if (isNaN(valCompra)) {
      insertTexto("res-eje44", "Llene los campos");
    } else if (opGenero) {
      let opGenero = document.getElementsByName("genero");
      let opGenSelect;
      for (let i = 0; i < opGenero.length; i++) {
        if (opGenero[i].checked) {
          opGenSelect = opGenero[i].value;
        }
      }
      if (valCompra < 0) {
        insertTexto("res-eje44", "Valor Incorrecto");
      } else if (valCompra > 25000 && opGenSelect == "maculino") {
        btnGirar.style.display = "block";
        form.style.display = "none";
        let nGn = n_aleatorios2(1, 3);
        let premio = "";

        insertTexto(
          "res-eje44",
          "Por tu compra, Supermercados SM <br><b>TE PREMIA</b><br>Da click en Girar"
        );
        insertTexto("res2-eje44", "");
        btnGirar.addEventListener("click", () => {
          if (nGn == 1) {
            premio = "Mercedez Benz GLE 450 Coupe";
          } else if (nGn == 2) {
            premio = "Bono de 3 millones";
          } else if (nGn == 3) {
            premio = "2 minutos para hacer mercado sin costo";
          }
          btnGirar.style.display = "none";
          btnVolver.style.display = "block";
          insertTexto(
            "res2-eje44",
            "<b>¡Felicidades!</b><br>Ganaste: " + "<b>" + premio + "</b>"
          );
          btnVolver.addEventListener("click", () => {
            form.style.display = "flex";
            btnVolver.style.display = "none";
            insertTexto("res-eje44", "");
            insertTexto("res2-eje44", "");
          });
        });
      } else {
        insertTexto("res2-eje44", "Gracias por su compra");
      }
    } else {
      insertTexto("res-eje44", "Seleccione una opción");
    }
  });
}

function ejercicio45() {
  let opSuma = document.getElementById("opSuma-2");
  let opResta = document.getElementById("opResta-2");
  let opMultiplicacion = document.getElementById("opMultiplicacion-2");
  let opDivision = document.getElementById("opDivision-2");
  opSuma.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje45_N1").value);
    let N_2 = parseInt(document.getElementById("Eje45_N2").value);
    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res2-eje45", "Llene los campos.");
      insertTexto("res-eje45", "");
    } else {
      insertTexto("res-eje45", N_1 + " + " + N_2 + " = " + (N_1 + N_2));
      insertTexto("res2-eje45", "");
    }
  });
  opResta.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje45_N1").value);
    let N_2 = parseInt(document.getElementById("Eje45_N2").value);
    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res2-eje45", "Llene los campos.");
      insertTexto("res-eje45", "");
    } else {
      insertTexto("res-eje45", N_1 + " - " + N_2 + " = " + (N_1 - N_2));
      insertTexto("res2-eje45", "");
    }
  });
  opMultiplicacion.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje45_N1").value);
    let N_2 = parseInt(document.getElementById("Eje45_N2").value);
    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res2-eje45", "Llene los campos.");
      insertTexto("res-eje45", "");
    } else {
      insertTexto("res-eje45", N_1 + " * " + N_2 + " = " + N_1 * N_2);
      insertTexto("res2-eje45", "");
    }
  });
  opDivision.addEventListener("click", () => {
    let N_1 = parseInt(document.getElementById("Eje45_N1").value);
    let N_2 = parseInt(document.getElementById("Eje45_N2").value);
    if (isNaN(N_1) || isNaN(N_2)) {
      insertTexto("res2-eje45", "Llene los campos.");
      insertTexto("res-eje45", "");
    } else {
      if (N_2 == 0) {
        insertTexto("res2-eje45", "La división por cero es imposible");
        insertTexto("res-eje45", "");
      } else {
        insertTexto("res-eje45", N_1 + " / " + N_2 + " = " + N_1 / N_2);
        insertTexto("res2-eje45", "");
      }
    }
  });
}

function ejercicio46() {
  document.getElementById("opEsPrimo-2").addEventListener("click", () => {
    let valor = parseInt(document.getElementById("Eje46_N1").value);
    if (isNaN(valor)) {
      insertTexto("res-eje46", "Llene los campos");
    } else {
      if (esPrimo(valor)) {
        insertTexto("res-eje46", valor + " Es primo");
      } else {
        insertTexto("res-eje46", valor + " Es compuesto");
      }
    }
  });
  document.getElementById("opFacto-2").addEventListener("click", () => {
    let valor = parseInt(document.getElementById("Eje46_N1").value);
    if (isNaN(valor)) {
      insertTexto("res-eje46", "Llene los campos");
    } else {
      let aux = valor;
      for (let i = valor; i > 1; i--) {
        aux = aux * (i - 1);
      }
      insertTexto("res-eje46", "Factorial de " + valor + ": " + aux);
    }
  });
  document.getElementById("opTabla_Multi-2").addEventListener("click", () => {
    let valor = parseInt(document.getElementById("Eje46_N1").value);
    if (isNaN(valor)) {
      insertTexto("res-eje46", "Llene los campos");
    } else {
      let msj = "";
      for (let i = 1; i <= 10; i++) {
        msj += valor + " * " + i + " = " + valor * i + "<br>";
      }
      insertTexto("res-eje46", msj);
    }
  });
}

function ejercicio47() {
  presionarEnter('form-eje47', 'eje47_verify')
  document.getElementById("eje47_verify").addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje47_N1").value);
    if (isNaN(limite)) {
      insertTexto("res-eje47", "Llene los campos");
    } else {
      let i = 0;
      let num = 0;
      let msj = "";
      while (i < limite) {
        if (esPrimo(num)) {
          msj += num + " ";
          i++;
        }
        num++;
      }
      insertTexto("res-eje47", msj);
    }
  });
}

function ejercicio48() {
  presionarEnter('form-eje48', 'eje48_verify')
  document.getElementById("eje48_verify").addEventListener("click", () => {
    let nPersonas = parseInt(document.getElementById("Eje48_N1").value);
    let valores;
    let generoM = new Array();
    let generoF = new Array();
    if (isNaN(nPersonas)) {
      insertTexto("res-eje48", "Llene los campos");
    } else {
      if (nPersonas <= 0) {
        insertTexto("res-eje48", "Valor incorrecto");
      } else {
        for (let i = 0; i < nPersonas; i++) {
          valores = n_aleatorios2(1, 2);
          console.log(valores);
          if (valores == 1) {
            if (valores != 0) {
              generoM[i] = "M";
            }
          } else if (valores == 2) {
            generoF[i] = "F";
          }
        }
        let fltGeneroM = generoM.filter((genero) => genero != undefined);
        let fltGeneroF = generoF.filter((genero) => genero != undefined);

        let porcentajeM = (fltGeneroM.length * 100) / nPersonas;
        let porcentajeF = (fltGeneroF.length * 100) / nPersonas;
        insertTexto(
          "res-eje48",
          "<b>Porcentaje Hombres: </b><br>" +
          porcentajeM.toFixed(2) +
          "%" +
          "<br><b>Porcentaje Mujeres: </b><br>" +
          porcentajeF.toFixed(2) +
          "%"
        );
      }
    }
  });
}

function ejercicio49() {
  let msj = "";
  for (let i = 0; i < 5; i++) {
    msj +=
      '<label for="Eje49_N' +
      (i + 1) +
      '">Número ' +
      (i + 1) +
      '</label><input type="number" name="Eje49_N" id="Eje49_N' +
      (i + 1) +
      '" placeholder="Digite un número"/>';
  }
  insertTexto("form-eje49", msj);
  presionarEnter('form-eje49', 'eje49_verify')
  document.getElementById("eje49_verify").addEventListener("click", () => {
    let valores = new Array();
    let suma = 0;
    let iteraciones = "";
    for (let i = 0; i < 5; i++) {
      valores[i] = parseFloat(
        document.getElementById("Eje49_N" + (i + 1)).value
      );
    }
    for (let i = 0; i < valores.length; i++) {
      suma += valores[i];
      iteraciones++;
      iteraciones = "Iteraciones: " + (i + 1);
    }
    if (isNaN(suma) == false) {
      insertTexto("res-eje49", iteraciones);
      insertTexto("res1-eje49", "<b>Suma: </b>" + suma);
    } else {
      insertTexto("res-eje49", "Llene los campos");
      insertTexto("res1-eje49", "");
    }
  });
}

function ejercicio50() {
  presionarEnter('form-eje50', 'eje50_verify')
  document.getElementById("eje50_verify").addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje50_N1").value);
    let num = 1;
    let i = 0;
    let msj = "";
    if (isNaN(limite)) {
      insertTexto("res-eje50", "Llene los campos");
    } else {
      while (i < limite) {
        if (num % 2 == 0) {
          msj += num + " ";
          i++;
        }
        num++;
      }
      insertTexto("res-eje50", msj);
    }
  });
}

function ejercicio51() {
  presionarEnter('form-eje51', 'eje51_verify')
  document.getElementById("eje51_verify").addEventListener("click", () => {
    let valores = new Array();
    let v550 = new Array();
    let v200_550 = new Array();
    let promedio1 = 0;
    let promedio2 = 0;
    let msj = "";
    for (let i = 0; i < 15; i++) {
      valores[i] = n_aleatorios2(200, 800);
    }

    for (let i = 0; i < valores.length; i++) {
      if (valores[i] >= 550) {
        v550[i] = valores[i];
      } else if (valores[i] > 200 && valores[i] <= 550) {
        v200_550[i] = valores[i];
      }
      msj += "$" + valores[i] + " ";
    }

    let fltV550 = v550.filter((venta) => venta != undefined);
    let fltV200_550 = v200_550.filter((venta) => venta != undefined);
    let suma1 = 0;
    let suma2 = 0;

    for (let i = 0; i < fltV550.length; i++) {
      suma1 += fltV550[i];
      promedio1 = suma1 / fltV550.length;
    }

    for (let i = 0; i < fltV200_550.length; i++) {
      suma2 += fltV200_550[i];
      promedio2 = suma2 / fltV200_550.length;
    }
    insertTexto("res1-eje51", "<b>Ventas</b><br>" + msj);
    insertTexto(
      "res2-eje51",
      "<b>Ventas Mayores a 550: </b><br>" +
      fltV550.length +
      "<br><b>Promedio: </b><br>$" +
      promedio1.toFixed(2)
    );
    insertTexto(
      "res3-eje51",
      "<b>Ventas Mayores a 200 y Menores-Iguales a 550: </b><br>" +
      fltV200_550.length +
      "<br><b>Promedio: </b><br>$" +
      promedio2.toFixed(2)
    );
  });
}

function ejercicio52() {
  presionarEnter('form-eje52', 'eje52_verify')
  document.getElementById("eje52_verify").addEventListener("click", () => {
    let valores = new Array();
    let msj = "";
    let suma = 0;
    for (let i = 0; i < 10; i++) {
      valores[i] = n_aleatorios2(1, 100);
      msj += valores[i] + " ";
      suma += valores[i];
    }
    insertTexto("res1-eje52", "<b>Valores: </b><br>" + msj);
    insertTexto("res2-eje52", "<b>Suma: </b><br>" + suma);
  });
}

function ejercicio53() {
  let btn1 = document.getElementById("eje53_verify");
  let btn2 = document.getElementById("eje53_verify2");
  let btn3 = document.getElementById("eje53_reload");
  let bxAlm = document.getElementById("Eje53_span");
  btn2.style.display = "none";
  btn3.style.display = "none";
  presionarEnter('form-eje53', 'eje53_verify');
  presionarEnter('form-eje53', 'eje53_verify2')
  btn1.addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje53_N1").value);

    if (isNaN(limite)) {
      insertTexto("res-eje53", "Llene los campos");
    } else {
      insertTexto("res-eje53", "");
      document.getElementById("Eje53_N1").disabled = true;
      let msj = "";
      let inpValores = new Array();

      btn1.style.display = "none";
      btn2.style.display = "block";

      for (let i = 0; i < limite; i++) {
        msj +=
          '<label for="Eje53-alm_N' +
          (i + 1) +
          '">Edad Alumno ' +
          (i + 1) +
          '</label><input type="number" name="Eje53_N" id="Eje53-alm_N' +
          (i + 1) +
          '" placeholder="Digite un número"/>';
      }
      bxAlm.innerHTML = msj;

      for (let i = 0; i < limite; i++) {
        inpValores[i] = document.getElementById("Eje53-alm_N" + (i + 1));
      }
      btn2.addEventListener("click", () => {
        let valores = inpValores.map((input) => input.value);
        let suma = 0;
        let promedio = 0;
        for (let i = 0; i < valores.length; i++) {
          suma += parseInt(valores[i]);
        }

        if (isNaN(suma)) {
          insertTexto("res-eje53", "Llene los campos");
        } else {
          btn2.style.display = "none";
          btn3.style.display = "block";
          bxAlm.style.display = "none";
          promedio = suma / valores.length;
          insertTexto("res-eje53", "Promedio: " + promedio.toFixed());
          btn3.addEventListener("click", () => {
            document.getElementById("Eje53_N1").disabled = false;
            document.getElementById("Eje53_N1").focus();
            bxAlm.style.display = "flex";
            btn1.style.display = "block";
            bxAlm.innerHTML = "";
            btn3.style.display = "none";
            insertTexto("res-eje53", "");
          });
        }
      });
    }
  });
}

function ejercicio54() {
  presionarEnter('form-eje54', 'eje54_verify')
  document.getElementById("eje54_verify").addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje54_N1").value);
    if (isNaN(limite)) {
      insertTexto("res-eje54", "Llene los campos");
      insertTexto("res1-eje54", "");
    } else {
      let valores = new Array();
      let suma = 0;
      let promedio = 0;
      let msj = "";
      for (let i = 0; i < limite; i++) {
        valores[i] = n_aleatorios2(150, 200);
      }
      for (let i = 0; i < valores.length; i++) {
        suma += parseInt(valores[i]);
        msj += valores[i] + "cm" + " ";
      }
      promedio = suma / valores.length;
      insertTexto("res-eje54", "<b>Estaturas</b><br>" + msj);
      insertTexto(
        "res1-eje54",
        "<b>Promedio: </b><br>" + promedio.toFixed() + "cm"
      );
    }
  });
}

function ejercicio55() {
  let btn1 = document.getElementById("opAhorr-2");
  let btn2 = document.getElementById("opAhorrSem-2");
  let btn3 = document.getElementById("opAhorrMes-2");
  let btn4 = document.getElementById("opAhorrAno-2");
  let btn5 = document.getElementById("eje55_reload");
  let btnAhorrar = document.getElementById("eje55_verify");
  let bx = document.getElementById("panel");
  let bx1 = document.getElementById("panel1");
  let bx2 = document.getElementById("panel2");
  let bx3 = document.getElementById("panel3");
  let inf1 = "nSemana2";
  let inf2 = "nSemana";
  let inf3 = "nMes";
  let inf4 = "nAno";

  let monto;
  let ahorrSem = 0;
  let ahorrTotSem = 0;
  let ahorrMes = 0;
  let ahorrAno = 0;

  let nSemana = 0;
  let nMes = 0;
  let nAno = 0;
  btn5.style.display = "none";
  bx.style.display = "none";
  bx1.style.display = "none";
  bx2.style.display = "none";
  bx3.style.display = "none";

  presionarEnter('panel', 'eje55_verify')
  btn1.addEventListener("click", () => {
    btn5.style.display = "block";
    bx.style.display = "flex";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
  });

  btnAhorrar.addEventListener("click", () => {
    monto = parseFloat(document.getElementById("Eje55_N1").value);
    if (isNaN(monto)) {
      insertTexto("res-eje55", "Llene los campos");
    } else {
      ahorrSem = monto;
      ahorrTotSem += monto;
      nSemana++;
      insertTexto("res-eje55", "Monto ahorrado");
      insertTexto(inf1, nSemana);
      insertTexto(inf2, nSemana);
      if (nSemana >= 4) {
        nMes++;
        nSemana = 0;
        ahorrMes += ahorrTotSem;
        ahorrTotSem = 0;
        insertTexto(inf3, nMes);
        if (nMes >= 12) {
          nAno++;
          nMes = 0;
          ahorrAno += ahorrMes;
          ahorrMes = 0;
          insertTexto(inf4, nAno);
        }
      }
    }
  });

  btn2.addEventListener("click", () => {
    btn5.style.display = "flex";
    bx1.style.display = "flex";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    insertTexto("res2-eje55", "$" + ahorrSem);
  });

  btn3.addEventListener("click", () => {
    btn5.style.display = "flex";
    bx2.style.display = "flex";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    insertTexto("res3-eje55", "$" + ahorrTotSem);
  });

  btn4.addEventListener("click", () => {
    btn5.style.display = "flex";
    bx3.style.display = "flex";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    insertTexto("res4-eje55", "$" + ahorrAno);
  });

  btn5.addEventListener("click", () => {
    btn5.style.display = "none";
    btn1.style.display = "flex";
    btn2.style.display = "flex";
    btn3.style.display = "flex";
    btn4.style.display = "flex";
    bx.style.display = "none";
    bx1.style.display = "none";
    bx2.style.display = "none";
    bx3.style.display = "none";
    insertTexto("res-eje55", "");
  });
}

function ejercicio56() {
  presionarEnter('form-eje56', 'eje56_verify')
  document.getElementById("eje56_verify").addEventListener("click", () => {
    let limite = parseInt(document.getElementById("Eje56_N1").value);
    if (isNaN(limite)) {
      insertTexto("res-eje56", "Llene los campos");
    } else {
      if (limite < 0) {
        insertTexto("res-eje56", "Valor Incorrecto");
      } else {
        let num1 = 0;
        let num2 = 1;
        let num3 = 0;
        let i = 3;
        let msj = "";
        msj = num1 + " " + num2;
        while (i <= limite) {
          num3 = num1 + num2;
          msj += " " + num3;
          insertTexto("res-eje56", msj);
          num1 = num2;
          num2 = num3;
          i++;
        }
      }
    }
  });
}

function ejercicio57() {
  let dias = 0;
  let totHoras = 0;
  let pagoTotal = 0;
  let pagoHoras;
  let span = "n2Dia";
  let btn1 = document.getElementById("eje57_verify");
  let btn2 = document.getElementById("eje57_verify2");

  let bx1 = document.getElementById("bx-Hrs");
  let bx2 = document.getElementById("form-eje57");
  let bxVolver = document.getElementById('eje57_reload');

  bx1.style.display = "none";
  bxVolver.style.display = 'none';
  presionarEnter('form-eje57', 'eje57_verify')
  presionarEnter('bx-Hrs', 'eje57_verify2')
  btn1.addEventListener("click", () => {
    pagoHoras = parseFloat(document.getElementById("Eje57_N1").value);
    if (isNaN(pagoHoras)) {
      insertTexto("res-eje57", "Llene los campos");
    } else if (pagoHoras < 0) {
      insertTexto("res-eje57", "Valor Incorrecto");
    } else {
      bx1.style.display = "flex";
      bxVolver.style.display = 'block';
      bx2.style.display = "none";
    }
  });

  btn2.addEventListener("click", () => {
    let horas = parseFloat(document.getElementById("Eje57_N2").value);
    if (isNaN(horas)) {
      insertTexto("res-eje57", "Llene los campos");
    } else {
      if (horas < 0) {
        insertTexto("res-eje57", "Valor Incorrecto");
      } else {
        dias++;
        insertTexto(span, dias);
        totHoras += horas;
        if (dias >= 7) {
          btn2.style.display = "none";
          document.getElementById("Eje57_N2").disabled = true;
          pagoTotal = pagoHoras * totHoras;
          insertTexto("res-eje57", "<b>Total Horas: </b><br>" + totHoras + "Hrs<br><b>Valor a pagar: </b><br>$" + pagoTotal);
        }
        bxVolver.addEventListener('click', () => {
          bx1.style.display = "none";
          bx2.style.display = "flex";
          bxVolver.style.display = 'none';
          btn2.style.display = "block";
          document.getElementById("Eje57_N2").disabled = false;
          insertTexto("res-eje57", "");
          dias = 0;
          totHoras = 0;
          insertTexto(span, dias);
        })
      }

    }
  });
}

function ejercicio58() {
  presionarEnter('form-eje58', 'eje58_verify')
  document.getElementById('eje58_verify').addEventListener('click', () => {
    let bandera = true;
    let msj1 = '';
    let msj2 = '';
    let D1 = 70;
    let D2 = 150;
    let dis;
    while (bandera) {
      D1++;
      D2--;
      msj1 += D1 + " ";
      msj2 += D2 + " ";
      if (D1 == D2) {
        dis = D1;
        bandera = false;
      }
    }
    insertTexto('res1-eje58', "<b>Distancia Persona 1:</b><br>" + msj1);
    insertTexto('res2-eje58', "<b>Distancia Persona 2:</b><br>" + msj2);
    insertTexto('res3-eje58', "<b>Distancia a la que se encontraron:</b><br>" + dis + "Km");
  })
}

function ejercicio59() {
  presionarEnter('form-eje59', 'eje59_verify')
  document.getElementById('eje59_verify').addEventListener('click', () => {
    let limite = parseInt(document.getElementById('Eje59_N1').value);
    if (isNaN(limite)) {
      insertTexto('res-eje59', "Llene los campos");
      insertTexto('res1-eje59', "");
      insertTexto('res2-eje59', "");
      insertTexto('res3-eje59', "");
      insertTexto('res4-eje59', "");
      insertTexto('res5-eje59', "");
      insertTexto('res6-eje59', "");
      insertTexto('res7-eje59', "");
      insertTexto('res8-eje59', "");
    } else if (limite < 0) {
      insertTexto('res-eje59', "Valor incorrecto");
      insertTexto('res1-eje59', "");
      insertTexto('res2-eje59', "");
      insertTexto('res3-eje59', "");
      insertTexto('res4-eje59', "");
      insertTexto('res5-eje59', "");
      insertTexto('res6-eje59', "");
      insertTexto('res7-eje59', "");
      insertTexto('res8-eje59', "");
    } else {
      insertTexto('res-eje59', "");
      let valores = new Array();
      let msj = '';
      let vM1000;
      let vM500_1000;
      let vMn500;
      let valorG1 = 0;
      let valorG2 = 0;
      let valorG3 = 0;
      let valorTot = 0;

      for (let i = 0; i < limite; i++) {
        valores[i] = n_aleatorios2(200, 2000);
      }
      for (let i = 0; i < valores.length; i++) {
        msj += "$" + valores[i] + " ";
        valorTot += valores[i];
      }
      vM1000 = valores.filter((valor) => valor > 1000);
      vM500_1000 = valores.filter((valor) => valor > 500 && valor <= 1000);
      vMn500 = valores.filter((valor) => valor < 500);
      for (let i = 0; i < vM1000.length; i++) {
        valorG1 += vM1000[i];
      }
      for (let i = 0; i < vM500_1000.length; i++) {
        valorG2 += vM500_1000[i];
      }
      for (let i = 0; i < vMn500.length; i++) {
        valorG3 += vMn500[i];
      }
      insertTexto('res1-eje59', "<b>Ventas</b><br>" + msj)
      insertTexto('res2-eje59', "<b>Ventas Mayores a 1000: </b><br>" + vM1000.length)
      insertTexto('res3-eje59', "<b>Ventas Mayores a 500 y Menores-Iguales a 1000: </b><br>" + vM500_1000.length)
      insertTexto('res4-eje59', "<b>Ventas Menores a 500: </b><br>" + vMn500.length)
      insertTexto('res5-eje59', "<b>Valor Mayores a 1000: </b><br>$" + valorG1);
      insertTexto('res6-eje59', "<b>Valor Mayores a 500 y Menores-Iguales a 1000: </b><br>$" + valorG2);
      insertTexto('res7-eje59', "<b>Valor Menores a 500: </b><br>$" + valorG3);
      insertTexto('res8-eje59', "<b>Valor Total: </b><br>$" + valorTot);
    }
  })
}

function ejercicio60() {
  let btn1 = document.getElementById('eje60_verify');
  let btn2 = document.getElementById('eje60_verify2');
  let span = 'contEmpleado';
  btn2.style.display = 'none';

  let empleado = 1;
  let costo = 30000;
  let pago = 0;
  presionarEnter('form-eje60', 'eje60_verify')
  presionarEnter('box-mEjer60', 'eje60_verify2')
  btn1.addEventListener('click', () => {
    let horas = parseFloat(document.getElementById('Eje60_N1').value);
    if (isNaN(horas)) {
      insertTexto('res-eje60', "Llene los campos");
    } else if (horas < 0) {
      insertTexto('res-eje60', "Valor Incorrecto");
    } else {
      pago = (costo * horas);
      insertTexto('res-eje60', "<b>Pago: </b>$" + pago.toFixed(2));
      btn1.style.display = 'none';
      btn2.style.display = 'block';
    }
  });

  btn2.addEventListener('click', () => {
    if (empleado >= 50) {
      btn1.style.display = 'none';
      btn2.style.display = 'none';
      insertTexto('res-eje60', "Nomina Cancelada");
    } else {
      btn1.style.display = 'block';
      btn2.style.display = 'none';
      insertTexto('res-eje60', "");
      empleado++;
      insertTexto(span, empleado);
      document.getElementById('Eje60_N1').value = "";
      document.getElementById('Eje60_N1').focus();
    }
  });
}

function ejercicio61() {
  let btnRegistrar = document.getElementById('eje61_verify');
  let btnFactura = document.getElementById('eje61_verify2');
  let btnAgregar = document.getElementById('eje61_verify3');
  let bxPrincipal = document.getElementById('form-eje61');
  let bxRegistro = document.getElementById('bx-registro');
  let bxReload = document.getElementById('eje61_reload');
  let bxPreview = document.getElementById('preview-productos');
  let bxFacturas = document.getElementById('vista-facturas');

  let opcion;
  let cantidadProducto = 0;
  let cantidadFacturas = 0;
  let valorProducto = new Array();
  let valoresTotales = new Array();
  let total = 0;

  btnAgregar.style.display = 'none';
  bxRegistro.style.display = 'none';
  bxReload.style.display = 'none';
  bxPreview.style.display = 'none';
  bxFacturas.style.display = 'none';

  btnRegistrar.addEventListener('click', () => {
    bxPrincipal.style.display = 'none';
    bxRegistro.style.display = 'flex';
    bxRegistro.style.flexDirection = 'column';
    btnAgregar.style.display = 'block'
    bxReload.style.display = 'block';

    document.getElementById('Eje61_N1').focus();
  })
  presionarEnter('bx-registro', 'eje61_verify3')
  btnAgregar.addEventListener('click', () => {
    opcion = parseInt(document.getElementById('Eje61_N1').value);
    if (isNaN(opcion)) {
      insertTexto('res-eje61', "Llene los campos");
    } else {
      bxPreview.style.display = 'flex';
      insertTexto('res-eje61', "");
      switch (opcion) {
        case 1:
          valorProducto[cantidadProducto] = 10;
          cantidadProducto++;
          break;
        case 2:
          valorProducto[cantidadProducto] = 12;
          cantidadProducto++;
          break;
        case 3:
          valorProducto[cantidadProducto] = 7;
          cantidadProducto++;
          break;
        case 4:
          valorProducto[cantidadProducto] = 9;
          cantidadProducto++;
          break;
        case 5:
          cantidadFacturas++;
          total = 0;
          cantidadProducto = 0;
          valorProducto = new Array();

          bxPreview.style.display = 'none';
          bxRegistro.style.display = 'none';
          bxReload.style.display = 'none';
          bxPrincipal.style.display = 'flex';

          document.getElementById('Eje61_N1').value = "";
          insertTexto('panelProductos', "")
          insertTexto('eje61_sub', "");
          insertTexto('eje61_iva', "");
          insertTexto('eje61_tot', "");
          break;
        default:
          insertTexto('res-eje61', "Opción incorrecta");
          break;
      }
      document.getElementById('Eje61_N1').value = "";
      document.getElementById('Eje61_N1').focus();
      let contenedor = document.getElementById('panelProductos');
      let msj = '';
      total = 0;
      for (let i = 0; i < cantidadProducto; i++) {
        msj += '<p>' + (i + 1) + '. Producto $' + valorProducto[i] + '</p>';
        total += valorProducto[i];
      }
      contenedor.innerHTML = msj
      insertTexto('eje61_sub', (total - (total * 0.19)).toFixed(2));
      insertTexto('eje61_iva', (total * 0.19).toFixed(2));
      insertTexto('eje61_tot', total.toFixed(2));
      valoresTotales[cantidadFacturas] = total;
    }
  })

  btnFactura.addEventListener('click', () => {
    bxPrincipal.style.display = 'none';
    bxReload.style.display = 'block';
    bxFacturas.style.display = 'flex';
    let msj = '';
    total = 0;
    for (let i = 0; i < cantidadFacturas; i++) {
      msj += '<p>' + (i + 1) + '. Factura: $' + valoresTotales[i] + '</p>';
      total += valoresTotales[i];
    }
    insertTexto('info-facturas', msj);
    insertTexto('eje61_sub-2', (total - (total * 0.19)).toFixed(2));
    insertTexto('eje61_iva-2', (total * 0.19).toFixed(2));
    insertTexto('eje61_tot-2', total.toFixed(2));
  })

  bxReload.addEventListener('click', () => {
    bxPrincipal.style.display = 'flex';
    bxRegistro.style.display = 'none';
    bxReload.style.display = 'none';
    bxPreview.style.display = 'none';
    bxFacturas.style.display = 'none';

    document.getElementById('Eje61_N1').value = "";
  })
}

function ejercicio62() {
  presionarEnter('form-eje62', "eje62_verify")
  document.getElementById('eje62_verify').addEventListener('click', () => {
    let valores = n_aleatorios(10);
    let msj = '';
    let suma = 0;
    for (let i = 0; i < valores.length; i++) {
      msj += valores[i] + " ";
      suma += valores[i];
    }
    insertTexto('res-eje62', "<b>Valores</b><br>" + msj);
    insertTexto('res2-eje62', "<b>Suma Total:</b> " + suma);
  })
}

function ejercicio63() {
  presionarEnter('form-eje63', "eje63_verify")
  document.getElementById('eje63_verify').addEventListener('click', () => {
    let limite = parseInt(document.getElementById('Eje63_N1').value);
    if (isNaN(limite)) {
      insertTexto('res-eje63', "Llene los campos");
    } else if (limite < 0) {
      insertTexto('res-eje63', "Valor Incorrecto");
    } else {
      let valores = new Array();
      let msj = '';
      for (let i = 0; i < limite; i++) {
        valores[i] = n_aleatorios2(-20, 20);
        msj += valores[i] + " ";
      }
      let positivos = valores.filter((valor) => valor > 0);
      let negativos = valores.filter((valor) => valor <= 0);

      insertTexto('res-eje63', "<b>Valores</b><br>" + msj);
      insertTexto('res1-eje63', "<b>Cantidad Positivos</b><br>" + positivos.length);
      insertTexto('res2-eje63', "<b>Cantidad Negativos</b><br>" + negativos.length);
    }
  })
}

function ejercicio64() {
  let contValor;
  let i = 0;
  let btn = document.getElementById('eje64_verify');
  let bxReload = document.getElementById('eje64_reload');
  let valores = new Array();
  bxReload.style.display = 'none';
  presionarEnter('form-eje64', "eje64_verify")
  btn.addEventListener('click', () => {
    let valor = parseInt(document.getElementById('Eje64_N1').value);

    if (isNaN(valor)) {
      insertTexto('res-eje64', "Llene los campos");
    } else {
      if (i < 10) {
        valores[i] = valor;
        i++;
        contValor++;
        if (contValor <= 10) {
          insertTexto('eje64_span', contValor);
        } else {
          document.getElementById('Eje64_N1').disabled = true;
          btn.style.display = 'none';
          bxReload.style.display = 'block';
          insertTexto('res-eje64', "<b>Vector</b><br>[" + valores + "]")
        }
      }
      document.getElementById('Eje64_N1').value = "";
      document.getElementById('Eje64_N1').focus();
    }
  })

  bxReload.addEventListener('click', () => {
    document.getElementById('Eje64_N1').disabled = false;
    document.getElementById('Eje64_N1').value = "";
    btn.style.display = 'block';
    bxReload.style.display = 'none';
    valores = new Array();
    contValor = 1;
    i = 0;
    insertTexto('res-eje64', "");
    insertTexto('eje64_span', contValor);
  })
}

function ejercicio65() {
  let bxValores = document.getElementById('eje65-valores');
  bxValores.style.display = 'none';

  let bxForm = document.getElementById('form-eje65');
  let btnLimite = document.getElementById('eje65_verify');
  let btnAgregar = document.getElementById('eje65_verify2');
  let btnReload = document.getElementById('eje65_reload');
  btnReload.style.display = 'none';
  let limite;

  let positivo = new Array();
  let negativo = new Array();

  let sumaPositivos = 0;
  let sumaNegativos = 0;
  let i = 0;
  let j = 0;
  let x = 0;
  let contValor = 1;
  presionarEnter('form-eje65', "eje65_verify")
  presionarEnter('eje65-valores', "eje65_verify2")
  btnLimite.addEventListener('click', () => {
    limite = parseInt(document.getElementById('Eje65_N1').value);
    if (isNaN(limite)) {
      insertTexto('res-eje65', "Llene los campos");
    } else if (limite < 0) {
      insertTexto('res-eje65', "Valor incorrecto");
    } else {
      bxValores.style.display = 'flex';
      bxForm.style.display = 'none';
    }
  })

  btnAgregar.addEventListener('click', () => {
    let valor = parseFloat(document.getElementById('Eje65_N2').value);

    let msj1 = '';
    let msj2 = '';
    if (isNaN(valor)) {
      insertTexto('res-eje65', "Llene los campos");
    } else {
      if (x < limite) {
        if (valor > 0) {
          positivo[i] = valor;
          i++
        } else {
          negativo[j] = valor;
          j++;
        }
        x++;
        contValor++;
        if (contValor <= limite) {
          insertTexto('eje65-span', contValor);
          document.getElementById('Eje65_N2').value = "";
          document.getElementById('Eje65_N2').focus();

        } else {
          bxValores.style.display = 'none';

          btnReload.style.display = 'block';
          for (let i = 0; i < positivo.length; i++) {
            sumaPositivos += positivo[i];
            msj1 += positivo[i] + " ";
          }
          for (let i = 0; i < negativo.length; i++) {
            sumaNegativos += negativo[i];
            msj2 += negativo[i] + " ";
          }
          insertTexto('res-eje65', "");
          insertTexto('res1-eje65', "<b>Valores Positivos:</b><br> " + msj1 + "<br><b>Número Mayor: </b>" + Math.max(...positivo) + "<br><b>Número Menor: </b>" + Math.min(...positivo) + "<br><b>Suma: </b>" + sumaPositivos);
          insertTexto('res2-eje65', "<b>Valores Negativos:</b><br> " + msj2 + "<br><b>Número Mayor: </b>" + Math.max(...negativo) + "<br><b>Número Menor: </b>" + Math.min(...negativo) + "<br><b>Suma: </b>" + sumaNegativos);
        }
      }
    }
  })

  btnReload.addEventListener('click', () => {
    sumaNegativos = 0;
    sumaPositivos = 0;
    insertTexto('res1-eje65', "");
    insertTexto('res2-eje65', "");
    positivo = new Array();
    negativo = new Array();
    contValor = 1;
    i = 0;
    j = 0;
    x = 0;
    insertTexto('eje65-span', contValor);

    document.getElementById('Eje65_N2').value = "";
    document.getElementById('Eje65_N1').focus();
    document.getElementById('Eje65_N1').value = "";
    bxForm.style.display = 'flex';
    bxValores.style.display = 'none';
    btnReload.style.display = 'none';
  })
}

function ejercicio66() {
  presionarEnter('form-eje66', "eje66_verify")
  document.getElementById('eje66_verify').addEventListener('click', () => {
    let valor = parseInt(document.getElementById('Eje66_N1').value);
    let valores = new Array();
    let vEncontrado;
    let posicion;
    let encontrado = true;

    if (isNaN(valor)) {
      insertTexto('res-eje66', "Llene los campos");
      insertTexto('res1-eje66', "");
      insertTexto('res2-eje66', "");
    } else {
      //Llenar Array
      for (let i = 0; i < 100; i++) {
        valores[i] = i + 1;
      }
      for (let i = 0; i < valores.length; i++) {
        if (valores[i] == valor) {
          vEncontrado = valores[i];
          posicion = i;
          encontrado = true;
          break;
        } else {
          encontrado = false
        }
      }
      if (encontrado) {
        insertTexto('res-eje66', "");
        insertTexto('res1-eje66', "<b>Valor</b><br>" + vEncontrado);
        insertTexto('res2-eje66', "<b>Posición</b><br>[" + posicion + "]");
      } else {
        insertTexto('res-eje66', "Valor no encontrado");
        insertTexto('res1-eje66', "");
        insertTexto('res2-eje66', "");
      }
    }
  })
}

function ejercicio67() {
  let valores = new Array();
  let msj = '';
  for (let i = 0; i < 25; i++) {
    valores[i] = n_aleatorios2(1, 50);
  }
  for (let valor of valores) {
    msj += valor + " ";
  }
  insertTexto('res-eje67', "<b>Vector Original</b><br>" + msj);
  presionarEnter('form-eje67', "eje67_verify")
  document.getElementById('eje67_verify').addEventListener('click', () => {
    let nuevoVector = new Array();
    let msj2 = '';
    for (let i = 24; i >= 0; i--) {
      nuevoVector.push(valores[i])
    }
    for (let valor of nuevoVector) {
      msj2 += valor + " ";
    }
    insertTexto('res2-eje67', "<b>Nuevo Vector</b><br>" + msj2);
  })
}

function ejercicio68() {
  let valor = parseFloat(document.getElementById('Eje68_N1').value);
  let mValor = document.getElementById('Eje68_N1');
  let bxReload = document.getElementById('eje68_reload');
  bxReload.style.display = 'none';

  if (valor > 0) {
    insertTexto('res-eje68', valor + " es positivo");
    mValor.value = "";
    mValor.focus();
  } else if (valor < 0) {
    insertTexto('res-eje68', "Se ingresó un valor negativo");
    mValor.disabled = true;
    bxReload.style.display = 'block';
  }

  bxReload.addEventListener('click', () => {
    mValor.disabled = false;
    bxReload.style.display = 'none';
    mValor.value = "";
    mValor.focus();
    insertTexto('res-eje68', "");
  })
}

function ejercicio69() {
  let filas = 5;
  let columnas = 5;
  let Notas = new Array(filas);

  let msj = '';
  let msj2 = '';
  for (let i = 0; i < filas; i++) {
    Notas[i] = new Array(columnas);
  }
  for (let f = 0; f < 5; f++) {
    for (let c = 0; c < 5; c++) {
      Notas[f][c] = n_decimalesAleatorios(1, 5).toFixed(1);
      msj += Notas[f][c] + " ";
    }
    msj += "<br>";
  }

  for (let f = 0; f < 5; f++) {
    for (let c = 0; c < 5; c++) {
      if (Notas[f][c] >= 3.5) {
        msj2 += Notas[f][c] + " ";
      }
    }
    msj2 += "<br>";
  }
  insertTexto('res-eje69', msj);
  insertTexto('res2-eje69', msj2);
  document.getElementById('eje69_reload').addEventListener('click', () => {
    ejercicio69();
  })
}

function ejercicio70() {
  let filas = 5;
  let columnas = 5;
  let valores = new Array(filas);
  let lista = new Array();
  let msj1 = '';
  let msj2 = '';
  for (let i = 0; i < 5; i++) {
    valores[i] = new Array(columnas);
  }
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      valores[f][c] = n_aleatorios2(1, 100);
      msj1 += valores[f][c] + " ";
    }
    msj1 += "<br>";
  }
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      lista[f * 5 + c] = valores[f][c];
    }
  }
  lista.sort(compararNumeros);
  let i = 24;
  for (let f = 0; f < filas; f++) {
    for (let c = 0; c < columnas; c++) {
      msj2 += lista[i] + " ";
      i--;
    }
    msj2 += "<br>";
  }

  insertTexto('res-eje70', msj1);
  insertTexto('res2-eje70', msj2);
  insertTexto('res3-eje70', "<b>Número Mayor</b><br>" + Math.max(...lista));
  insertTexto('res4-eje70', "<b>Número Menor</b><br>" + Math.min(...lista));
  document.getElementById('eje70_reload').addEventListener('click', () => {
    ejercicio70();
  })
}

function ejercicio71() {
  let filas = 3;
  let columnas = 3;
  let cont;
  let Matriz1 = new Array(filas);
  let Matriz2 = new Array(filas);
  let Matriz3 = new Array(filas);

  let smFilas = [];
  let smColumnas = [];
  let bx1 = document.getElementById('eje71-bx3');
  let bxReload = document.getElementById('eje71_reload');

  let msj1 = '';
  let msj2 = '';
  let msj3 = '';
  let msj4 = '';
  let msj5 = '';
  bx1.style.display = 'none';
  bxReload.style.display = 'none';
  let btn = document.getElementById('eje71_verify');

  btn.addEventListener('click', () => {
    btn.style.display = 'none';
    bx1.style.display = 'flex';
    bxReload.style.display = 'flex';
    for (let i = 0; i < columnas; i++) {
      Matriz1[i] = new Array(columnas);
      Matriz2[i] = new Array(columnas);
      Matriz3[i] = new Array(columnas);
    }
    cont = 1;
    for (let f = 0; f < filas; f++) {
      for (let c = 0; c < columnas; c++) {
        let valor = parseFloat(prompt('Valor ' + cont + ' Matriz 1'))
        if (isNaN(valor)) {
          alert("Llene los campos")
        } else {
          Matriz1[f][c] = valor;
          cont++;
        }
      }
    }
    cont = 1;
    for (let f = 0; f < filas; f++) {
      for (let c = 0; c < columnas; c++) {
        let valor = parseFloat(prompt('Valor ' + cont + ' Matriz 2'))
        if (isNaN(valor)) {
          alert("Llene los campos")
        } else {
          Matriz2[f][c] = valor;
          cont++;
        }
      }
    }

    for (let f = 0; f < filas; f++) {
      for (let c = 0; c < filas; c++) {
        Matriz3[f][c] = 0;
        for (let i = 0; i < filas; i++) {
          Matriz3[f][c] += Matriz1[f][i] * Matriz2[i][c];
        }
      }
    }

    smFilas = [0];
    smColumnas = [0];
    for (let f = 0; f < filas; f++) {
      for (let c = 0; c < columnas; c++) {
        msj1 += Matriz1[f][c] + " ";
        msj2 += Matriz2[f][c] + " ";
        msj3 += Matriz3[f][c] + " ";
      }
      msj1 += "<br>";
      msj2 += "<br>";
      msj3 += "<br>";
    }

    for (let f = 0; f < filas; f++) {
      smFilas.push(0);
      smColumnas.push(0);
      for (let c = 0; c < columnas; c++) {
        smFilas[f] += Matriz3[f][c];
        smColumnas[c] += Matriz3[f][c];
        console.log(smFilas);
        console.log(smColumnas);
      }
    }

    for (let i = 0; i < filas; i++) {
      msj4 += smFilas[i] + " ";
      msj5 += smColumnas[i] + " ";
    }

    insertTexto('res4-eje71', "<b>MATRIZ 1</b><br>" + msj1);
    insertTexto('res5-eje71', "<b>MATRIZ 2</b><br>" + msj2);
    insertTexto('res1-eje71', msj3);
    insertTexto('res2-eje71', msj5);
    insertTexto('res3-eje71', msj4);
  })

  bxReload.addEventListener('click', () => {
    btn.style.display = 'block';
    bx1.style.display = 'none';
    bxReload.style.display = 'none';
    Matriz1 = new Array(filas).fill(0).map(() => new Array(columnas).fill(0));
    Matriz2 = new Array(filas).fill(0).map(() => new Array(columnas).fill(0));
    Matriz3 = new Array(filas).fill(0).map(() => new Array(columnas).fill(0));

    smFilas = [];
    smColumnas = [];
    cont = 0;
  })
}