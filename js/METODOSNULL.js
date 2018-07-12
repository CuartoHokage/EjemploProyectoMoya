function metodoMixto() {
    debugger;
    google.charts.load('current', {'packages': ['scatter']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        //VARIABLES DEL FORMULARIO
        var x = document.getElementById("semilla").value;
        var a = document.getElementById("multiplicativo").value;
        var c = parseInt(document.getElementById("constante").value);
        var m = document.getElementById("modulo").value;
        var l = document.getElementById("limite").value;


        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Número de Iteraciones');
        data.addColumn('number', 'R');
        data.addColumn('number', 'Números Aleatorios');

        //CREANDO LA TABLA PARA EL METODO
        var tabla = '<table >'
        tabla += '<caption>Tabla de Iteciones';
        tabla += '<th>n</th><th>Xn</th><th>R</th>';

        var semilla = x;

        for (var i = 1; i <= l; i++) {
            var x = (a * x + c) % m
            var r = (x + 1) / m

            var estado;

            if (semilla == x || estado > 0) {
                //Cuando se empiezan a repetir los diferencia por un color
                tabla += '<tr  class="repetido" title="Número aleatorio empieza a repetirse"><td>' + i + '</td><td>' + x + '</td><td>' + r.toFixed(2);
                +'</td></tr>';
                estado = 1;
                data.addRows([
                    [i, r, x]
                ]);
                console.log("# " + i + "   Aleatorio... " + x + "   R: " + r);

            } else {
                tabla += '<tr><td>' + i + '</td><td>' + x + '</td><td>' + r.toFixed(2);
                +'</td></tr>';
                data.addRows([
                    [i, r, x]
                ]);
            }
        }
        tabla += '</table>';
        document.getElementById('tablas').innerHTML = tabla;

        var options = {
            width: 800,
            height: 500,
            chart: {
                title: 'Resolución del Método Mixto',
                subtitle: 'Representación Gráfica',
            },
            hAxis: {title: 'Número de Iteraciones'},
            vAxis: {title: 'Número aleatorio'},
        };

        var chart = new google.charts.Scatter(document.getElementById('scatterchart_material'));
        chart.draw(data, options);
    }
}
function metodoMultiplicar() {
    debugger;
    google.charts.load('current', {'packages': ['scatter']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        //VARIABLES DEL FORMULARIO
        var x = document.getElementById("semilla").value;
        var a = document.getElementById("multiplicativo").value;
        var m = document.getElementById("modulo").value;
        var l = document.getElementById("limite").value;


        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Número de Iteraciones');
        data.addColumn('number', 'R');
        data.addColumn('number', 'Números Aleatorios');

        //CREANDO LA TABLA PARA EL METODO
        var tabla = '<table>';
        tabla += '<caption>Tabla de Iteciones';
        tabla += '<th>n</th><th>Xn</th><th>R</th>';

        var semilla = x;

        for (var i = 1; i <= l; i++) {
            var x = (a * x) % m
            var r = x / (m)

            var estado;

            if (semilla == x || estado > 0) {

                //Cuando se empiezan a repetir los diferencia por color rojo
                tabla += '<tr class="repetido" title="Número aleatorio empieza a repetirse"><td>' + i + '</td><td>' + x + '</td><td>' + r.toFixed(2);
                +'</td></tr>';
                estado = 1;
                data.addRows([
                    [i, r, x]
                ]);
                console.log("# " + i + "   Aleatorio... " + x + "   R: " + r);

            } else {
                tabla += '<tr><td>' + i + '</td><td>' + x + '</td><td>' + r.toFixed(2);
                +'</td></tr>';
                data.addRows([
                    [i, r, x]
                ]);
            }
        }
        tabla += '</table>';
        document.getElementById('tablas').innerHTML = tabla;

        var options = {
            width: 800,
            height: 500,
            chart: {
                title: 'Resolución del Método Mixto',
                subtitle: 'Representación Gráfica',
            },
            hAxis: {title: 'Número de Iteraciones'},
            vAxis: {title: 'Número aleatorio'},
        };

        var chart = new google.charts.Scatter(document.getElementById('scatterchart_material'));
        chart.draw(data, options);
    }
}
function metodoAditivo() {
    debugger;
    google.charts.load('current', {'packages': ['scatter']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        //VARIABLES DEL FORMULARIO
        var m = document.getElementById("modulo").value;
        var l = document.getElementById("limite").value;


        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Número de Iteraciones');
        data.addColumn('number', 'R');
        data.addColumn('number', 'Números Aleatorios');

        //CREANDO LA TABLA PARA EL METODO
        var tabla = '<table>';
        tabla += '<caption>Tabla de Iteciones';
        tabla += '<th>n</th><th>Xn</th><th>R</th>';


        var semillas = [];
        var semillas = document.getElementById("semilla").value.split(',');
        var todo = semillas.map(Number);

        var semilla = todo[0];

        for (var i = 0; i <= l; i++) {

            final = todo.length - 1;
            xf = todo[final];
            x1 = todo[i];
            x = (xf + x1) % 100;

            var r = x / (m - 1)

            var estado;
            var ii = i + 1;

            if (semilla == x || estado > 0) {
                tabla += '<tr class="repetido" title="Número aleatorio empieza a repetirse"><td>' + ii + '</td><td>' + x + '</td><td>' + r.toFixed(2);
                +'</td></tr>';
                todo.push(x);
                estado = 1;
                data.addRows([
                    [i, r, x]
                ]);


            } else {
                tabla += '<tr><td>' + ii + '</td><td>' + x + '</td><td>' + r.toFixed(2);
                +'</td></tr>';
                todo.push(x);
                data.addRows([
                    [i, r, x]
                ]);
            }
            var ii = i + 1;
            console.log("# " + ii + "   Aleatorio... " + x + "   R: " + r);
        }
        tabla += '</table>';
        document.getElementById('tablas').innerHTML = tabla;

        var options = {
            width: 800,
            height: 500,
            chart: {
                title: 'Resolución del Método Mixto',
                subtitle: 'Representación Gráfica',
            },
            hAxis: {title: 'Número de Iteraciones'},
            vAxis: {title: 'Número aleatorio'},
        };

        var chart = new google.charts.Scatter(document.getElementById('scatterchart_material'));
        chart.draw(data, options);
    }
}
function metodoMixtoLimpio() {
    debugger;
    //VARIABLES DEL FORMULARIO
    /*        var x=document.getElementById("semilla").value;
     var a=document.getElementById("multiplicativo").value;
     var c=parseInt(document.getElementById("constante").value);
     var m=document.getElementById("modulo").value;
     var l=document.getElementById("limite").value;*/

    var x = 4;
    var a = 5;
    var c = 7;
    var m = 8;
    var l = 10;

    //CREANDO LA TABLA PARA EL METODO
    var tabla = '<table>'
    tabla += '<caption>Tabla de Iteciones';
    tabla += '<th>n</th><th>Xn</th><th>R</th>';

    var semilla = x;

    var mixtoMontecarlo = [];

    for (var i = 1; i <= l; i++) {
        var x = (a * x + c) % m
        var r = (x + 1) / m

        var rr = r.toFixed(2)
        mixtoMontecarlo.push(rr);
        var estado;

        if (semilla == x || estado > 0) {
            //Cuando se empiezan a repetir los diferencia por un color
            tabla += '<tr  class="repetido" title="Número aleatorio empieza a repetirse"><td>' + i + '</td><td>' + x + '</td><td>' + r.toFixed(2);
            +'</td></tr>';
            estado = 1;

            console.log("# " + i + "   Aleatorio... " + x + "   R: " + r);

        } else {
            tabla += '<tr><td>' + i + '</td><td>' + x + '</td><td>' + r.toFixed(2);
            +'</td></tr>';
        }
        m = m + 1;

    }

    console.log(mixtoMontecarlo);
    monteCarlo();
    console.log('aquiii' + aleatorios);

    tabla += '</table>';
    document.getElementById('tablaMixto').innerHTML = tabla;
}

function MetodoSimulacionMonteCarlo() {
    MOSTRAR_PROCESAR();
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

    var tabla = '<table>';
    tabla += '<caption>Monte Carlo - Datos</caption>';
    tabla += '<th>Área</th><th>Cantidad</th><th>P</th><th>Acumuada</th><th>Desde</th><th>Hasta</th><th>F</th>';

    //Obtengo la probabilidad dividiendo para el total, luego obtengo la acumulada sumando valor anterior con valor actual
    for (var x = 0; x < miercoles.length; x++) {

        proba = miercoles[x] / total;
        probabilidad.push(proba.toFixed(2));

        acumula = proba + inicial;

        tabla += '<tr><td>' + area[x] + '</td><td>' + miercoles[x] + '</td><td>' + proba.toFixed(2) + '</td><td>' + acumula.toFixed(2) + '</td><td>' + inicial.toFixed(2) + '</td><td>' + acumula.toFixed(2) + '</td><td id="frecuencia' + x + '"</td></tr>';

        acumulada.push(acumula.toFixed(2));
        inicial = acumula;

    }
    tabla += '</table>';
    document.getElementById('datos').innerHTML = tabla;

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
    document.getElementById('tablas').innerHTML = tabla;

    var arrayFrecuencias = [f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12];

    tablaf = '<table>';
    tablaf += '<caption>F</thead>';
    tablaf += '<th>Frecuencia</th>';
    var frec;
    var frecuen;
    for (var i = 0; i < area.length; i++) {
        area[i];
        frec = 'frecuencia' + i;
        frecuen = arrayFrecuencias[i];
        document.getElementById(frec).innerHTML = frecuen;

        tablaf += '<tr><td>' + arrayFrecuencias[i] + '</td></tr>';
    }
    console.log('Frecuencia confirma' + arrayFrecuencias);
    tablaf += '</table>';
    //  document.getElementById('tablasf').innerHTML = tablaf;

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

    $('#container').highcharts({
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
    OCULTAR_PROCESAR();
}
