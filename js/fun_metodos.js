
//metodos funcionales 

function MetodoInventarioAleatorio() {
    MOSTRAR_PROCESAR();
    var i_inicial = document.getElementById('i_inicial').value;
    var q_pedido = document.getElementById('q_pedido').value;
    var costo_ordenar = document.getElementById('costo_ordenar').value;
    var costo_mantener = document.getElementById('costo_mantener').value;
    var reorden = document.getElementById('reorden').value;
    var costo_faltante = document.getElementById('costo_faltante').value;
    var eventos = document.getElementById('eventos').value;

    //Demanda Diaria
    var miercoles = [];
    var miercoles = document.getElementById("cuadro_demanda").value.split(',');
    var miercoles = miercoles.map(Number);

    //Demanda Diaria
    var cuadro_tiempo = [];
    var cuadro_tiempo = document.getElementById("cuadro_tiempo").value.split(',');
    var cuadro_tiempo = cuadro_tiempo.map(Number);


    var total_demanda_cuadro = 0;
    var total_tiempo_cuadro = 0;

    //Suma total de los cuadros
    for (var x = 0; x < miercoles.length; x++) {
        total_demanda_cuadro += miercoles[x];
    }
    for (var x = 0; x < cuadro_tiempo.length; x++) {
        total_tiempo_cuadro += cuadro_tiempo[x];
    }

    var probabilidad_demanda = [];
    var acumulada_demanda = [];
    var inicial_demanda = 0;

    var probabilidad_tiempo = [];
    var acumulada_tiempo = [];
    var inicial_tiempo = 0;

    var tabla = '<table>';
    tabla += '<caption>Demanda</caption>';
    tabla += '<th>Demanda</th><th>Probabilidad</th><th>Acumulada</th><th>Desde</th><th>Hasta</th>';


    for (var x = 0; x < miercoles.length; x++) {

        //DATOS DE DEMANDA 
        proba_demanda = miercoles[x] / total_demanda_cuadro;
        probabilidad_demanda.push(proba_demanda.toFixed(2));

        acumula = proba_demanda + inicial_demanda;
        tabla += '<tr><td>' + miercoles[x] + '</td><td>' + proba_demanda.toFixed(2) + '</td><td>' + acumula.toFixed(2) + '</td><td>' + inicial_demanda.toFixed(2) + '</td><td>' + acumula.toFixed(2) + '</td></tr>';

        acumulada_demanda.push(acumula.toFixed(2));
        inicial_demanda = acumula;

    }

    tabla += '</table>';
    document.getElementById('tablas_demanda').innerHTML = tabla;

    var tabla_tiempo = '<table>';
    tabla_tiempo += '<caption>Tiempo</caption>';
    tabla_tiempo += '<th>Tiempo</th><th>Probabilidad</th><th>Acumulada</th><th>Desde</th><th>Hasta</th>';

    for (var x = 0; x < cuadro_tiempo.length; x++) {


        //DATOS DE TIEMPO DE ESPERA
        proba_tiempo = cuadro_tiempo[x] / total_tiempo_cuadro;
        probabilidad_tiempo.push(proba_tiempo.toFixed(2));

        acumula_tiempo = proba_tiempo + inicial_tiempo;
        tabla_tiempo += '<tr><td>' + cuadro_tiempo[x] + '</td><td>' + proba_tiempo.toFixed(2) + '</td><td>' + acumula_tiempo.toFixed(2) + '</td><td>' + inicial_tiempo.toFixed(2) + '</td><td>' + acumula_tiempo.toFixed(2) + '</td></tr>';

        acumulada_tiempo.push(acumula_tiempo.toFixed(2));
        inicial_tiempo = acumula_tiempo;
    }

    tabla_tiempo += '</table>';
    document.getElementById('tablas_tiempo').innerHTML = tabla_tiempo;


    var aleatorio_demanda = [];
    var aleatorio_tiempo = [];

    for (var i = 0; i < eventos; i++) {

        var a_demanda = Math.random();
        var a_tiempo = Math.random();
        aleatorio_demanda.push(a_demanda.toFixed(3));
        aleatorio_tiempo.push(a_tiempo.toFixed(3));

    }

    var limite1_demanda = acumulada_demanda[0];
    var limite2_demanda = acumulada_demanda[1];
    var limite3_demanda = acumulada_demanda[2];
    var limite4_demanda = acumulada_demanda[3];
    var limite5_demanda = acumulada_demanda[4];
    var limite6_demanda = acumulada_demanda[5];
    var limite7_demanda = acumulada_demanda[6];
    var limite8_demanda = acumulada_demanda[7];
    var limite9_demanda = acumulada_demanda[8];
    var limite10_demanda = acumulada_demanda[9];
    var limite11_demanda = acumulada_demanda[10];
    var limite12_demanda = acumulada_demanda[11];

    var limite1_tiempo = acumulada_tiempo[0];
    var limite2_tiempo = acumulada_tiempo[1];
    var limite3_tiempo = acumulada_tiempo[2];
    var limite4_tiempo = acumulada_tiempo[3];
    var limite5_tiempo = acumulada_tiempo[4];
    var limite6_tiempo = acumulada_tiempo[5];
    var limite7_tiempo = acumulada_tiempo[6];
    var limite8_tiempo = acumulada_tiempo[7];
    var limite9_tiempo = acumulada_tiempo[8];
    var limite10_tiempo = acumulada_tiempo[9];
    var limite11_tiempo = acumulada_tiempo[10];
    var limite12_tiempo = acumulada_tiempo[11];

    //FRECUENCIAS 
    var f0 = 0;
    var f1 = 0;
    var f2 = 0;
    var f3 = 0;
    var f4 = 0;
    var f5 = 0;
    var f6 = 0;
    var f7 = 0;
    var f8 = 0;
    var f9 = 0;
    var f10 = 0;
    var f11 = 0;
    var f12 = 0;

    //CREANDO LA TABLA PARA EL METODO
    var tabla_inventario = '<table>';
    tabla_inventario += '<thead><caption>Inventario</caption>';
    tabla_inventario += '<th>Ev.</th><th>Aleatorio</th><th>Demanda</th><th>I.inicial</th><th>Ingreso</th><th>I.final</th><th>Mantenimiento</th><th>Faltante</th><th>Co.Faltante</th><th>Co</th><th>Aleatorio</th><th>Entrega</th><th>Dia_Entrega</th></thead>';
    var i_final = reorden + 1;
    var t_entrega = 0;
    var d_entrega = 0;
    var c_mantener = 0;
    var c_faltante = 0;
    var pedido = 0;
    var inicial = 0;
    var bandera = 0;

    var dd_entrega = 0;
    var c_faltante_final = 0;
    var c_mantener_final = 0;
    var costo_ordenar_final = 0;
    var faltante_final = 0;
    var ch = 0;
    var i_final_total = 0;

    for (var x = 0; x <= eventos; x++) {
        var semana = x + 1;
        var valor = aleatorio_demanda[x];
        var valor_tiempo = aleatorio_tiempo[x];

        if (valor_tiempo <= limite1_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[0];

        } else if (valor_tiempo <= limite2_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[1];

        } else if (valor_tiempo <= limite3_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[2];

        } else if (valor_tiempo <= limite4_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[3];

        } else if (valor_tiempo <= limite5_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[4];

        } else if (valor_tiempo <= limite6_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[5];

        } else if (valor_tiempo <= limite7_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[6];

        } else if (valor_tiempo <= limite8_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[7];

        } else if (valor_tiempo <= limite9_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[8];

        } else if (valor_tiempo <= limite10_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[9];

        } else if (valor_tiempo <= limite11_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[10];

        } else if (valor_tiempo <= limite11_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[11];

        } else if (valor_tiempo <= limite11_tiempo) {
            var valor_tiempo_ = cuadro_tiempo[12];
        }
        //console.log(valor_tiempo +' ->'+ valor_tiempo_);

        if (semana == dd_entrega || bandera == 1) {

            //TABLA DE TIEMPO DE PEDIDO
            if (valor <= limite1_demanda) {
                i_final = i_inicial - miercoles[0];

                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[0] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f0 += 1;

                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[0];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[0] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[0] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[0] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    ii_final = i_final;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[0] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }
            } else
            if (valor <= limite2_demanda) {
                i_final = i_inicial - miercoles[1];

                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[1] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    //i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;

                ii_final = i_final;
                d_entrega = semana + valor_tiempo_ + 1;

                f1 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[1];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[1] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        //i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[1] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[1] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    ii_final = i_final;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[1] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }
            } else
            if (valor <= limite3_demanda) {
                i_final = i_inicial - miercoles[2];

                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[2] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f2 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[2];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[2] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[2] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[2] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }
                    ii_final = i_final;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[2] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }
            } else
            if (valor <= limite4_demanda) {
                i_final = i_inicial - miercoles[3];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[3] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f3 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[3];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[3] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;
                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[3] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[3] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    //dd_entrega = d_entrega;
                    ii_final = i_final;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[3] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite5_demanda) {
                i_final = i_inicial - miercoles[4];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[4] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f4 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[4];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[4] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;
                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[4] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[4] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    //dd_entrega = d_entrega;
                    ii_final = i_final;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[4] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite6_demanda) {
                i_final = i_inicial - miercoles[5];

                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[5] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f5 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[5];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[5] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[5] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[5] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }
                    //  dd_entrega = d_entrega;
                    ii_final = i_final;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[5] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite7_demanda) {
                i_final = i_inicial - miercoles[6];

                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[6] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f6 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[6];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[6] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[6] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[6] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    //dd_entrega = d_entrega;
                    ii_final = i_final;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[6] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite8_demanda) {
                i_final = i_inicial - miercoles[7];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[7] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f7 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[7];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[7] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[7] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[7] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    // dd_entrega = d_entrega;
                    ii_final = i_final;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[7] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite9_demanda) {
                i_final = i_inicial - miercoles[8];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[8] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;
                f8 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    i_final = i_inicial - miercoles[8];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[8] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;
                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[8] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[8] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }
                    //dd_entrega = d_entrega;
                    ii_final = i_final;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[8] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite10_demanda) {
                i_final = i_inicial - miercoles[9];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[9] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                d_entrega = semana + valor_tiempo_ + 1;
                //tabla_inventario += '<tr><td>'+semana+'</td><td>'+valor+'</td><td>'+miercoles[9]+'</td><td>'+i_inicial+'</td><td>'+q_pedido+'</td><td>'+i_final+'</td><td>'+c_mantener+'</td><td>'+c_faltante+'</td><td>'+costo_ordenar+'</td><td>'+valor_tiempo+'</td><td>'+cuadro_tiempo[9]+'</td><td>'+d_entrega+'</td></tr>';             
                f9 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    final = i_inicial - miercoles[9];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[9] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;
                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[9] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[9] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }
                    //dd_entrega = d_entrega;
                    ii_final = i_final;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[9] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite11_demanda) {
                i_final = i_inicial - miercoles[10];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[10] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                d_entrega = semana + valor_tiempo_ + 1;
                f10 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    final = i_inicial - miercoles[10];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[10] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[10] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[10] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    //dd_entrega = d_entrega;
                    ii_final = i_final;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[10] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite12_demanda) {
                i_final = i_inicial - miercoles[11];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[11] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;

                d_entrega = semana + valor_tiempo_ + 1;

                f11 += 1;
                if (semana == dd_entrega) {
                    i_inicial = parseInt(ii_final) + parseInt(q_pedido);
                    final = i_inicial - miercoles[11];

                    if (i_final < 0) {
                        i_final = 0;
                        var faltante = miercoles[11] - i_inicial;
                        c_faltante = faltante * costo_faltante;
                    } else {
                        i_final = i_final;
                        c_faltante = 0
                        var faltante = 0;
                    }
                    c_mantener = costo_mantener * i_final;

                    if (i_final <= reorden) {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[11] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                        dd_entrega = d_entrega;
                        ii_final = i_final;
                        bandera = 1;
                    } else {
                        tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[11] + '</td><td>' + i_inicial + '</td><td>' + q_pedido + '</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                        bandera = 0;
                    }

                    //dd_entrega = d_entrega;
                    ii_final = i_final;


                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[11] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            }



            //EMPIEZA RECORRIDO NORMAL ANTES DE QUE HAGA EL PEDIDO       
        } else {
            //TABLA DE TIEMPO DE PEDIDO
            if (valor <= limite1_demanda) {
                i_final = i_inicial - miercoles[0];

                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[0] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;

                ii_final = i_final;
                f0 += 1;
                d_entrega = semana + valor_tiempo_ + 1;

                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[0] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[0] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }
            } else
            if (valor <= limite2_demanda) {
                i_final = i_inicial - miercoles[1];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[1] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f1 += 1;
                d_entrega = semana + valor_tiempo_ + 1;

                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[1] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[1] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite3_demanda) {
                i_final = i_inicial - miercoles[2];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[2] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                //encuentraTiempo(valor_tiempo);
                d_entrega = semana + valor_tiempo_ + 1;
                f2 += 1;
                if (i_final <= reorden && bandera == 0) {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[2] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[2] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }
            } else
            if (valor <= limite4_demanda) {
                i_final = i_inicial - miercoles[3];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[3] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    var c_faltante = 0
                    faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f3 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[3] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[3] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite5_demanda) {
                i_final = i_inicial - miercoles[4];
                if (i_final < 0) {
                    i_final = 0;
                    ii_final = i_final;
                    var faltante = miercoles[4] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f4 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[4] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;
                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[4] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite6_demanda) {
                i_final = i_inicial - miercoles[5];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[5] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f5 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[5] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[5] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite7_demanda) {
                i_final = i_inicial - miercoles[6];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[6] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f6 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[6] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[6] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite8_demanda) {
                i_final = i_inicial - miercoles[7];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[7] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f7 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[7] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[7] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite9_demanda) {
                i_final = i_inicial - miercoles[8];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[8] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f8 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[8] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[8] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite10_demanda) {
                i_final = i_inicial - miercoles[9];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[9] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                //  tabla_inventario += '<tr><td>'+semana+'</td><td>'+valor+'</td><td>'+miercoles[9]+'</td><td>'+i_inicial+'</td><td>-</td><td>'+i_final+'</td><td>'+c_mantener+'</td><td>'+c_faltante+'</td><td>'+costo_ordenar+'</td><td>'+valor_tiempo_+'</td><td>'+cuadro_tiempo[9]+'</td><td>'+d_entrega+'</td></tr>';             
                f9 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[9] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo_ + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[9] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite11_demanda) {
                i_final = i_inicial - miercoles[10];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[10] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                f10 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    // encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[10] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[10] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            } else
            if (valor <= limite12_demanda) {
                i_final = i_inicial - miercoles[11];
                if (i_final < 0) {
                    i_final = 0;
                    var faltante = miercoles[11] - i_inicial;
                    c_faltante = faltante * costo_faltante;
                } else {
                    i_final = i_final;
                    c_faltante = 0
                    var faltante = 0;
                }
                c_mantener = costo_mantener * i_final;
                ii_final = i_final;
                // tabla_inventario += '<tr><td>'+semana+'</td><td>'+valor+'</td><td>'+miercoles[11]+'</td><td>'+i_inicial+'</td><td>-</td><td>'+i_final+'</td><td>'+c_mantener+'</td><td>'+c_faltante+'</td><td>'+costo_ordenar+'</td><td>'+valor_tiempo+'</td><td>'+encuentraTiempo.valor_tiempo_+'</td><td>'+cuadro_tiempo[11]+'</td><td>'+d_entrega+'</td></tr>';             
                f11 += 1;
                d_entrega = semana + valor_tiempo_ + 1;
                if (i_final <= reorden && bandera == 0) {
                    //encuentraTiempo(valor_tiempo);
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[11] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>' + c_faltante + '</td><td>' + costo_ordenar + '</td><td>' + valor_tiempo + '</td><td>' + valor_tiempo_ + '</td><td>' + d_entrega + '</td></tr>';
                    dd_entrega = d_entrega;
                    ii_final = i_final;
                    bandera = 1;

                } else {
                    tabla_inventario += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[11] + '</td><td>' + i_inicial + '</td><td>-</td><td>' + i_final + '</td><td>' + c_mantener + '</td><td>' + faltante + '</td><td>-</td><td>' + valor_tiempo + '</td><td>-</td><td>-</td></tr>';
                    ii_final = i_final;
                }

            }
            ch += c_mantener;
            console.log(c_mantener + '-> ' + ch);
        }


        i_inicial = i_final;
        i_final_total += i_final;


        c_mantener_final += parseInt(c_mantener);
        c_faltante_final += parseInt(c_faltante);
        costo_ordenar_final += parseInt(costo_ordenar);
        faltante_final += parseInt(faltante);

//Fin de For
    }
    var prom = i_final_total / eventos;


    tabla_inventario += '<tr><td></td><td></td><td></td><td></td><td>Totales:</td><td></td><td>$ ' + c_mantener_final + '</td><td>' + faltante_final + '</td><td>$ ' + c_faltante_final + '</td><td>$ ' + costo_ordenar_final + '</td><td>-</td><td>-</td><td>-</td></tr>';
    tabla_inventario += '<tr><td></td><td></td><td></td><td></td><td>Promedio:</td><td>' + prom.toFixed(1) + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    tabla_inventario += '</table>';
    document.getElementById('tabla_inventario').innerHTML = tabla_inventario;
    OCULTAR_PROCESAR();
}



function lineaEsperaAleatoria() {

    var iteraciones = document.getElementById("iteraciones").value;
    var landa = document.getElementById("landa").value;
    var miu = document.getElementById("miu").value;

    var a_llegada = [];
    var a_servicio = [];

    var tiempo_servicio = [];
    var tiempo_llegada = [];

    var hora_exacta_llegada = [];
    var h_exacta_ll = 0;

    var hora_inicio_servicio = [];
    var hora_fin_servicio = [];

    var h_fin_anterior = 0;

    var tiempo_espera = [];
    var tiempo_sistema = [];

    var suma_fin_servicio = 0;
    var suma_tiempo_espera = 0;
    var suma_tiempo_sistema = 0;

    var promedio_espera = 0;
    var promedio_sistema = 0;

    var l_s = 0;
    var l_q = 0;

    for (var i = 0; i < iteraciones; i++) {

        var numero_llegada = Math.random();
        var numero_servicio = Math.random();
        a_llegada.push(numero_llegada.toFixed(3));
        a_servicio.push(numero_servicio.toFixed(3));

        //Procedimiento de Tiempo de servicio y Tiempo de llegada
        var log = Math.log(numero_servicio);
        t_servicio = -1 / miu * log;
        tiempo_servicio.push(t_servicio.toFixed(3));

        var log_ll = Math.log(numero_llegada);
        t_llegada = -1 / landa * log_ll;
        tiempo_llegada.push(t_llegada.toFixed(3));

        //Hora Exacta de llegada
        var h_exacta_llegada = t_llegada + h_exacta_ll;
        hora_exacta_llegada.push(h_exacta_llegada.toFixed(3));
        h_exacta_ll = h_exacta_llegada;

        if (h_exacta_llegada > h_fin_anterior) {
            var h_inicio = h_exacta_llegada;
            hora_inicio_servicio.push(h_inicio.toFixed(3));

            var h_fin_servicio = t_servicio + h_inicio;
            hora_fin_servicio.push(h_fin_servicio.toFixed(3));

        } else {
            var h_inicio = h_fin_anterior;
            hora_inicio_servicio.push(h_inicio.toFixed(3));

            var h_fin_servicio = t_servicio + h_inicio;
            hora_fin_servicio.push(h_fin_servicio.toFixed(3));
        }

        h_fin_anterior = h_fin_servicio;

        var t_espera = h_inicio - h_exacta_llegada;
        tiempo_espera.push(t_espera.toFixed(3));

        var t_sistema = t_servicio + t_espera;
        tiempo_sistema.push(t_sistema.toFixed(3));

        suma_tiempo_sistema += t_sistema;
        suma_tiempo_espera += t_espera;
    }

    promedio_espera = suma_tiempo_espera / iteraciones;
    promedio_sistema = suma_tiempo_sistema / iteraciones;

    l_s = suma_tiempo_sistema / h_exacta_llegada;
    l_q = suma_tiempo_espera / h_exacta_llegada;


    var tabla = '<table>';
    tabla += '<caption>Linea de Esperas</caption>';
    tabla += '<th>#</th><th>A llegada </th><th>A servicio</th><th>T llegada</th><th>T servicio</th><th>H Exacta ll</th><th>H inicio S</th><th>H fin S</th><th>T espera</th><th>T en Sistema</th>';

    for (var i = 0; i < tiempo_llegada.length; i++) {
        var numero = i + 1;
        tabla += '<tr><td>' + numero + '</td><td>' + a_llegada[i] + '</td><td>' + a_servicio[i] + '</td><td>' + tiempo_llegada[i] + '</td><td>' + tiempo_servicio[i] + '</td><td>' + hora_exacta_llegada[i] + '</td><td>' + hora_inicio_servicio[i] + '</td><td>' + hora_fin_servicio[i] + '</td><td>' + tiempo_espera[i] + '</td><td>' + tiempo_sistema[i] + '</td></tr>';
        console.log('a_ll: ' + a_llegada[i] + ' a_se: ' + a_servicio[i] + ' T_ll: ' + tiempo_llegada[i] + ' T_se: ' + tiempo_servicio[i] + ' h_e_ll: ' + hora_exacta_llegada[i] + ' h_i: ' + hora_inicio_servicio[i] + ' h_f: ' + hora_fin_servicio[i] + ' t_es' + tiempo_espera[i] + ' t_sis: ' + tiempo_sistema[i]);
    }
    tabla += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>Totales:</td><td>' + suma_tiempo_espera.toFixed(2) + '</td><td>' + suma_tiempo_sistema.toFixed(2) + '</td></tr>';
    tabla += '<tr><td>W=</td><td>' + promedio_sistema.toFixed(2) + '</td><td></td><td>Wq=</td><td>' + promedio_espera.toFixed(2) + '</td><td></td><td></td><td>-</td><td></td><td></td></tr>';
    tabla += '<tr><td>L=</td><td>' + l_s.toFixed(2) + '</td><td></td><td>Lq=</td><td>' + l_q.toFixed(2) + '</td><td></td><td></td><td>-</td><td></td><td></td></tr>';
    tabla += '</table>';
    document.getElementById('tablas').innerHTML = tabla;
    OCULTAR_PROCESAR();
}

function MetodoLineaEsperaAleatoria() {

    MOSTRAR_PROCESAR();
    var iteraciones = document.getElementById("iteraciones").value;
    var landa = document.getElementById("landa").value;
    var miu = document.getElementById("miu").value;

    var a_llegada = [];
    var a_servicio = [];

    var tiempo_servicio = [];
    var tiempo_llegada = [];

    var hora_exacta_llegada = [];
    var h_exacta_ll = 0;

    var hora_inicio_servicio = [];
    var hora_fin_servicio = [];

    var h_fin_anterior = 0;

    var tiempo_espera = [];
    var tiempo_sistema = [];

    var suma_fin_servicio = 0;
    var suma_tiempo_espera = 0;
    var suma_tiempo_sistema = 0;

    var promedio_espera = 0;
    var promedio_sistema = 0;

    var l_s = 0;
    var l_q = 0;

    for (var i = 0; i < iteraciones; i++) {

        var numero_llegada = Math.random();
        var numero_servicio = Math.random();
        a_llegada.push(numero_llegada.toFixed(3));
        a_servicio.push(numero_servicio.toFixed(3));

        //Procedimiento de Tiempo de servicio y Tiempo de llegada
        var log = Math.log(numero_servicio);
        t_servicio = -1 / miu * log;
        tiempo_servicio.push(t_servicio.toFixed(3));

        var log_ll = Math.log(numero_llegada);
        t_llegada = -1 / landa * log_ll;
        tiempo_llegada.push(t_llegada.toFixed(3));

        //Hora Exacta de llegada
        var h_exacta_llegada = t_llegada + h_exacta_ll;
        hora_exacta_llegada.push(h_exacta_llegada.toFixed(3));
        h_exacta_ll = h_exacta_llegada;

        if (h_exacta_llegada > h_fin_anterior) {
            var h_inicio = h_exacta_llegada;
            hora_inicio_servicio.push(h_inicio.toFixed(3));

            var h_fin_servicio = t_servicio + h_inicio;
            hora_fin_servicio.push(h_fin_servicio.toFixed(3));

        } else {
            var h_inicio = h_fin_anterior;
            hora_inicio_servicio.push(h_inicio.toFixed(3));

            var h_fin_servicio = t_servicio + h_inicio;
            hora_fin_servicio.push(h_fin_servicio.toFixed(3));
        }

        h_fin_anterior = h_fin_servicio;

        var t_espera = h_inicio - h_exacta_llegada;
        tiempo_espera.push(t_espera.toFixed(3));

        var t_sistema = t_servicio + t_espera;
        tiempo_sistema.push(t_sistema.toFixed(3));

        suma_tiempo_sistema += t_sistema;
        suma_tiempo_espera += t_espera;
    }

    promedio_espera = suma_tiempo_espera / iteraciones;
    promedio_sistema = suma_tiempo_sistema / iteraciones;

    l_s = suma_tiempo_sistema / h_exacta_llegada;
    l_q = suma_tiempo_espera / h_exacta_llegada;


    var tabla = '<table >';
    tabla += '<caption>Linea de Esperas</caption>';
    tabla += '<th>#</th><th>A llegada </th><th>A servicio</th><th>T llegada</th><th>T servicio</th><th>H Exacta ll</th><th>H inicio S</th><th>H fin S</th><th>T espera</th><th>T en Sistema</th>';

    for (var i = 0; i < tiempo_llegada.length; i++) {
        var numero = i + 1;
        tabla += '<tr><td>' + numero + '</td><td>' + a_llegada[i] + '</td><td>' + a_servicio[i] + '</td><td>' + tiempo_llegada[i] + '</td><td>' + tiempo_servicio[i] + '</td><td>' + hora_exacta_llegada[i] + '</td><td>' + hora_inicio_servicio[i] + '</td><td>' + hora_fin_servicio[i] + '</td><td>' + tiempo_espera[i] + '</td><td>' + tiempo_sistema[i] + '</td></tr>';
        console.log('a_ll: ' + a_llegada[i] + ' a_se: ' + a_servicio[i] + ' T_ll: ' + tiempo_llegada[i] + ' T_se: ' + tiempo_servicio[i] + ' h_e_ll: ' + hora_exacta_llegada[i] + ' h_i: ' + hora_inicio_servicio[i] + ' h_f: ' + hora_fin_servicio[i] + ' t_es' + tiempo_espera[i] + ' t_sis: ' + tiempo_sistema[i]);
    }
    tabla += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>Totales:</td><td>' + suma_tiempo_espera.toFixed(2) + '</td><td>' + suma_tiempo_sistema.toFixed(2) + '</td></tr>';
    tabla += '<tr><td>W=</td><td>' + promedio_sistema.toFixed(2) + '</td><td></td><td>Wq=</td><td>' + promedio_espera.toFixed(2) + '</td><td></td><td></td><td>-</td><td></td><td></td></tr>';
    tabla += '<tr><td>L=</td><td>' + l_s.toFixed(2) + '</td><td></td><td>Lq=</td><td>' + l_q.toFixed(2) + '</td><td></td><td></td><td>-</td><td></td><td></td></tr>';
    tabla += '</table>';
    document.getElementById('tablas').innerHTML = tabla;

    OCULTAR_PROCESAR();
}

function MetodoNumeroAleatorio() {
    debugger;
    MOSTRAR_PROCESAR();
    var desde = document.getElementById("desde").value;
    var hasta = document.getElementById("hasta").value;
    var fin = document.getElementById("limite").value;

    //CREANDO LA TABLA PARA EL METODO
    var tabla = '<table>';
    tabla += '<caption>Tabla de Iteciones';
    tabla += '<th><i class="fa fa-ils"></i></th><th>Aleatorio</th>';

    var acumular = [];
    for (var i = 0; i < fin; i++) {

        var aleatorio = Math.round(Math.random() * (hasta - desde) + parseInt(desde));
        //aleatorio = aleatorio / 1000;
        if (acumular.indexOf(aleatorio) >= 0) {
            acumular.push(aleatorio);
            tabla += '<tr><td>' + (i + 1) + '</td><td class="repetido" title="Número aleatorio empieza a repetirse" style="background: #ea8383">' + aleatorio + '</td></tr>';
            console.log('se repite' + aleatorio);

        } else {
            acumular.push(aleatorio);
            tabla += '<tr><td>' + (i + 1) + '</td><td>' + aleatorio + '</td></tr>';
            console.log(aleatorio);

        }
    }
    tabla += '</table>';
    document.getElementById('tablas').innerHTML = tabla;
    OCULTAR_PROCESAR();
}


function MonteCarloNuevaSimulacion(contador) {

    HTML = " <div id=\"otra" + contador + "\" class=\"iteraciones sty_ite\">\n\
                    <div id=\"datos" + contador + "\"></div>\n\
                    <div id=\"tablasf" + contador + "\"></div>\n\
                    <div id=\"container" + contador + "\" class=\"iteracion_grafica\"></div>\n\
                    <div id=\"tablas" + contador + "\" class=\"iteracion_montecarlo \"></div>\n\
                </div>";
    $("#SimulacionesMultiples").append(HTML);

    var tema = document.getElementById("tema").value + " " + contador;
    var miercoles = [];
    var miercoles = document.getElementById("estudiantes").value.split(',');
    var miercoles = miercoles.map(Number);

    var area = [];
    var area = document.getElementById("areas").value.split(',');

    var semanas = document.getElementById("semanas").value;
    var aleatorios = [];
    for (var i = 0; i <= semanas; i++) {

        var numerito = Math.random()
        aleatorios.push(numerito.toFixed(2));
    }

    console.log('fresco: ' + aleatorios);

    console.log('lLEGA Miercoles: ' + miercoles);
    console.log('LLEGA Miercoles: ' + area);
    //var area = ['Bar','C.Este','C.Oeste','Sintetica', 'Ágora'];

    //var miercoles = [41,4,16,63,19];

    //var aleatorios = [0.08,0.34,0.34,0.93,0.45,0.72,0.34,0.84,0.75,0.99];
    var total = 0;

    //Suma miercoles y obtiene el total
    for (var x = 0; x < miercoles.length; x++) {
        total += miercoles[x];
    }

    console.log('Miercoles: ' + miercoles);
    console.log('Total: ' + total.toFixed(2));

    var probabilidad = [];
    var acumulada = [];
    var inicial = 0;

    var tabla = '<h2>' + tema + '</h2>';
    tabla += '<table>';
    tabla += '<caption>Monte Carlo - Datos</caption>';
    tabla += '<th>Área</th><th>Cantidad</th><th>P</th><th>Acumuada</th><th>Desde</th><th>Hasta</th><th>F</th>';

    //Obtengo la probabilidad dividiendo para el total, luego obtengo la acumulada sumando valor anterior con valor actual
    for (var x = 0; x < miercoles.length; x++) {

        proba = miercoles[x] / total;
        probabilidad.push(proba.toFixed(2));

        acumula = proba + inicial;

        tabla += '<tr><td>' + area[x] + '</td><td>' + miercoles[x] + '</td><td>' + proba.toFixed(2) + '</td><td>' + acumula.toFixed(2) + '</td><td>' + inicial.toFixed(2) + '</td><td>' + acumula.toFixed(2) + '</td><td id="' + contador + 'frecuencia' + x + '"</td></tr>';

        acumulada.push(acumula.toFixed(2));
        inicial = acumula;

    }
    tabla += '</table>';
    var concatenaIteracionDatos;
    concatenaIteracionDatos = 'datos' + contador;

    document.getElementById(concatenaIteracionDatos).innerHTML = tabla;

    console.log('Área: ' + area);
    console.log('Probabilidad: ' + probabilidad);
    console.log('Acumulada: ' + acumulada);
    console.log('Aleatorios: ' + aleatorios);

    // Declaro los limites o los rangos
    var limite1 = acumulada[0];
    var limite2 = acumulada[1];
    var limite3 = acumulada[2];
    var limite4 = acumulada[3];
    var limite5 = acumulada[4];
    var limite6 = acumulada[5];
    var limite7 = acumulada[6];
    var limite8 = acumulada[7];
    var limite9 = acumulada[8];
    var limite10 = acumulada[9];
    var limite11 = acumulada[10];
    var limite12 = acumulada[11];


    //CREANDO LA TABLA PARA EL METODO
    var tabla = '<table>';
    tabla += '<thead><caption>Monte Carlo</caption>';
    tabla += '<th>i</th><th>Aleatorio</th><th>Cantidad</th><th>Área</th></thead>';

    //FRECUENCIAS 
    var f0 = 0;
    var f1 = 0;
    var f2 = 0;
    var f3 = 0;
    var f4 = 0;
    var f5 = 0;
    var f6 = 0;
    var f7 = 0;
    var f8 = 0;
    var f9 = 0;
    var f10 = 0;
    var f11 = 0;
    var f12 = 0;

    //Recorro el array Aleatorios ya que cada numero tengo que comparar con el limite dependiendo de ello obtendre en area y el numero de estudiantes
    for (var x = 1; x < aleatorios.length; x++) {
        valor = aleatorios[x];

        var semana = x;
        if (valor <= limite1) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[0] + '</td><td>' + area[0] + '</td></tr>';
            f0 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' N: ' + miercoles[0] + ' area: ' + area[0])
        } else
        if (valor <= limite2) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[1] + '</td><td>' + area[1] + '</td></tr>';
            f1 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[1] + ' area: ' + area[1])
        } else
        if (valor <= limite3) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[2] + '</td><td>' + area[2] + '</td></tr>';
            f2 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[2] + ' area: ' + area[2])
        } else
        if (valor <= limite4) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[3] + '</td><td>' + area[3] + '</td></tr>';
            f3 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[3] + ' area: ' + area[3])
        } else
        if (valor <= limite5) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[4] + '</td><td>' + area[4] + '</td></tr>';
            f4 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[4] + ' area: ' + area[4])
        } else
        if (valor <= limite6) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[5] + '</td><td>' + area[5] + '</td></tr>';
            f5 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[5] + ' area: ' + area[5])
        } else
        if (valor <= limite7) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[6] + '</td><td>' + area[6] + '</td></tr>';
            f6 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[6] + ' area: ' + area[6])
        } else
        if (valor <= limite8) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[7] + '</td><td>' + area[7] + '</td></tr>';
            f7 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[7] + ' area: ' + area[7])
        } else
        if (valor <= limite9) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[8] + '</td><td>' + area[8] + '</td></tr>';
            f8 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[8] + ' area: ' + area[8])
        } else
        if (valor <= limite10) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[9] + '</td><td>' + area[9] + '</td></tr>';
            f9 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[9] + ' area: ' + area[9])
        } else
        if (valor <= limite11) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[10] + '</td><td>' + area[10] + '</td></tr>';
            f10 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[10] + ' area: ' + area[10])
        } else
        if (valor <= limite12) {
            tabla += '<tr><td>' + semana + '</td><td>' + valor + '</td><td>' + miercoles[11] + '</td><td>' + area[11] + '</td></tr>';
            f11 += 1;
            console.log('semana ' + semana + ' valor: ' + valor + ' M: ' + miercoles[11] + ' area: ' + area[11])
        } else {
            f12 += 1;
            console.log('no existe rango')
        }
    }
    tabla += '</table>';
    var concatenaIteracionTablas;
    concatenaIteracionTablas = 'tablas' + contador;

    document.getElementById(concatenaIteracionTablas).innerHTML = tabla;

    var arrayFrecuencias = [f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12];

    var tablaf = '<table>';
    tablaf += '<caption>F</thead>';
    tablaf += '<th>Frecuencia</th>';
    var frec;
    var frecuen;
    for (var i = 0; i < area.length; i++) {
        area[i];
        frec = contador + 'frecuencia' + i;
        tablaf += '<tr><td>' + arrayFrecuencias[i] + '</td></tr>';
        frecuen = arrayFrecuencias[i];
        document.getElementById(frec).innerHTML = frecuen;
        console.log('confirm ' + frecuen);
    }

    tablaf += '</table>';
    var concatenaIteracionTablasF;
    concatenaIteracionTablasF = 'tablasf' + contador;

    //document.getElementById(concatenaIteracionTablasF).innerHTML = tablaf;

//****************************************************************



    /*   var areas = ['bar','piscina','gym','sintetica','bar2','bar3'];
     console.log(areas);*/
    //var areass = [40,42,45,48,51,54];
    var areaDato;
    var areaValor;
    var areasYvalor = [];

    var frecuenciaDato = [];
    var probabilidadDato = [];
    for (var i = 0; i < area.length; i++) {
        areaDato = area[i];
        areaValor = miercoles[i];
        areasYvalor.push(areaDato + ' ' + areaValor);

        probabilidadDato.push(probabilidad[i]);
        frecuenciaDato.push(arrayFrecuencias[i]);
    }
    probabilidadDato = probabilidadDato.map(Number)
    console.log(areasYvalor);
    console.log(probabilidadDato, frecuenciaDato);

    var containerG;
    containerG = contador;

    $('#container' + containerG).highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Frecuencia y Probabilidad'
        },
        subtitle: {
            text: 'Técnicas y Simulación'
        },
        xAxis: {
            categories: areasYvalor
        },
        yAxis: {
            title: {
                text: 'Valores'
            },
            labels: {
                formatter: function () {
                    return this.value + '';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        series: [{
                name: 'Probabilidad',
                marker: {
                    symbol: 'square'
                },
                data: probabilidadDato

            }, {
                name: 'Frecuencia',
                marker: {
                    symbol: 'diamond'
                },
                data: frecuenciaDato
            }]
    });

}
