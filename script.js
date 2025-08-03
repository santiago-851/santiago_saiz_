document.addEventListener('DOMContentLoaded', function() {
    // Get references to the DOM elements

    // pregunta 1

    const calculateButton = document.getElementById('calculateButton');
    const inputH = document.getElementById('inputH');
    const inputBeta = document.getElementById('inputBeta');
    const inputX = document.getElementById('inputX');
    const calculationResult = document.getElementById('calculationResult');
    const calculationImage = document.getElementById('calculation-image');
      
    // Event listener for the calculate button
    if (calculateButton) {
        calculateButton.addEventListener('click', function() {
            console.log("Calculate button clicked!"); // DEBUGGING LINE
            calculateButton.textContent = 'Calcular'; // DEBUGGING LINE - Visual feedback

            performCalculation();
        });
    }


    // Function to get input values, perform calculation, and display result
    function performCalculation() {
        // Get values from input fields
        const h = parseFloat(inputH.value);
        const beta = parseFloat(inputBeta.value);
        const x = parseFloat(inputX.value);

        // Validate inputs
        if (isNaN(h) || isNaN(beta) || isNaN(x)) {
            calculationResult.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult.style.color = 'red';
            return;
        }

        // Implement the calculation logic from the Python code
        // angulo = radians(B+90)  => (beta + 90) * PI / 180
        const angleRad = (beta + 90) * Math.PI / 180;

        // a = sqrt((x**2)+(h**2)-2*x*h*cos(angulo))
        let a = Math.sqrt(Math.pow(x, 2) + Math.pow(h, 2) - (2 * x * h * Math.cos(angleRad)));

        // a = round(a,2)
        a = Math.round(a * 100) / 100; // Rounds to 2 decimal places

        // Display the result
        calculationResult.textContent = 'La distancia a es: ' + a.toFixed(2);
        calculationResult.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 2

    const calculateButton2 = document.getElementById('calculateButton2');
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    const inputC = document.getElementById('inputC');
    const calculationResult2 = document.getElementById('calculationResult2');
    const calculationImage2 = document.getElementById('calculation-image');

    if (calculateButton2) {
        calculateButton2.addEventListener('click', function() {
            console.log("Calculate button clicked!"); // DEBUGGING LINE
            calculateButton2.textContent = 'Calcular'; // DEBUGGING LINE - Visual feedback

            performCalculation2();
        });
    }

    function performCalculation2() {

        const A = parseFloat(inputA.value);
        const B = parseFloat(inputB.value);
        const C = parseFloat(inputC.value);

        if (isNaN(A) || isNaN(B) || isNaN(C)) {
            calculationResult2.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult2.style.color = 'red';
            return;
        }

        const a_radian = A*Math.PI/180;
        const c_radian = C*Math.PI/180;

        const x_1 = B/Math.tan(a_radian);
        const x_2 = B/Math.tan(c_radian);
        
        const x_total = Math.round((x_1 + x_2)*100)/100;

        // Display the result
        calculationResult2.textContent = 'El valor de x es: ' + x_total;
        calculationResult2.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 3

    const calculateButton3 = document.getElementById('calculateButton3');
    const inputLongitud_es = document.getElementById('inputLongitud_es');
    const inputBase_es = document.getElementById('inputBase_es');
    const calculationResult3 = document.getElementById('calculationResult3');
    const calculationImage3 = document.getElementById('calculation-image');

    if (calculateButton3) {
        calculateButton3.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton3.textContent = 'Calcular'; 

            performCalculation3();
        });
    }

    function performCalculation3() {

        const Length = parseFloat(inputLongitud_es.value);
        const Base = parseFloat(inputBase_es.value);

        if (isNaN(Length) || isNaN(Base)) {
            calculationResult3.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult3.style.color = 'red';
            return;
        }

        const angulo_en_rad = Math.acos(Base / Length);
        const angulo_en_grados = Math.round(angulo_en_rad * 180 / Math.PI*10)/10;

        const altura = Math.round(Math.sqrt(Length**2-Base**2)*10)/10;

        calculationResult3.textContent = `El ángulo de elevación es: ${angulo_en_grados}. La altura que alcanza la escalera es: ${altura}.`;
        calculationResult3.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 4

    const calculateButton4 = document.getElementById('calculateButton4');
    const input_dist_millas = document.getElementById('input_dist_millas');
    const input_angulo_1 = document.getElementById('input_angulo_1');
    const input_angulo_2 = document.getElementById('input_angulo_2');
    const calculationResult4 = document.getElementById('calculationResult4');
    const calculationImage4 = document.getElementById('calculation-image');

    if (calculateButton4) {
        calculateButton4.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton4.textContent = 'Calcular'; 

            performCalculation4();
        });
    }

    function performCalculation4() {

        const millas = parseFloat(input_dist_millas.value);
        const angle1 = parseFloat(input_angulo_1.value);
        const angle2 = parseFloat(input_angulo_2.value);

        if (isNaN(millas) || isNaN(angle1) || isNaN(angle2)) {
            calculationResult4.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult4.style.color = 'red';
            return;
        }
        const angle1_rad = angle1 * Math.PI / 180;
        const angle2_rad = angle2 * Math.PI / 180;
        const angle3_rad = (180 - angle1 - angle2) * Math.PI / 180;
        const dist_plane_a = millas*Math.sin(angle2_rad)/Math.sin(angle3_rad);
        const dist_plane_b = millas*Math.sin(angle1_rad)/Math.sin(angle3_rad);

        calculationResult4.textContent = `Distancia del avión al punto A es: ${dist_plane_a.toFixed(2)}. Distancia del avión al punto B es: ${dist_plane_b.toFixed(2)}.`;
        calculationResult4.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 5

    const calculateButton5 = document.getElementById('calculateButton5');
    const inputmeter = document.getElementById('inputmeter');
    const input_ang_1 = document.getElementById('input_ang_1');
    const input_ang_2 = document.getElementById('input_ang_2');
    const calculationResult5 = document.getElementById('calculationResult5');
    const calculationImage5 = document.getElementById('calculation-image');

    if (calculateButton5) {
        calculateButton5.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton5.textContent = 'Calcular'; 

            performCalculation5();
        });
    }

    function performCalculation5() {

        const metros = parseFloat(inputmeter.value);
        const angle_1 = parseFloat(input_ang_1.value);
        const angle_2 = parseFloat(input_ang_2.value);

        if (isNaN(metros) || isNaN(angle_1) || isNaN(angle_2)) {
            calculationResult5.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult5.style.color = 'red';
            return;
        }
        const angle_1rad = angle_1 * Math.PI / 180;
        const angle_2rad = angle_2 * Math.PI / 180;

        const altura_helicoptero = (metros*Math.tan(angle_2rad)*Math.tan(angle_1rad))/(Math.tan(angle_2rad)+Math.tan(angle_1rad))
        

        calculationResult5.textContent = `La altura del helicóptero es: ${altura_helicoptero.toFixed(2)}`;
        calculationResult5.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 6

    const calculateButton6 = document.getElementById('calculateButton6');
    const input_lado1 = document.getElementById('input_lado1');
    const input_lado2 = document.getElementById('input_lado2');
    const input_angulo_paralelogramo = document.getElementById('input_angulo_paralelogramo');
    const calculationResult6 = document.getElementById('calculationResult6');
    const calculationImage6 = document.getElementById('calculation-image');

    if (calculateButton6) {
        calculateButton6.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton6.textContent = 'Calcular'; 

            performCalculation6();
        });
    }

    function performCalculation6() {

        const lado1 = parseFloat(input_lado1.value);
        const lado2 = parseFloat(input_lado2.value);
        const angle = parseFloat(input_angulo_paralelogramo.value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(angle)) {
            calculationResult6.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult6.style.color = 'red';
            return;
        }
        const angle_rad = angle * Math.PI / 180;

        const area = lado1 * lado2 * Math.sin(angle_rad);
        

        calculationResult6.textContent = `El área es: ${area.toFixed(2)}`;
        calculationResult6.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 7

    const calculateButton7 = document.getElementById('calculateButton7');
    const input_lado_1 = document.getElementById('input_lado_1');
    const input_lado_2 = document.getElementById('input_lado_2');
    const input_angulo_paralelo_gramo = document.getElementById('input_angulo_paralelo_gramo');
    const calculationResult7 = document.getElementById('calculationResult7');
    const calculationImage7 = document.getElementById('calculation-image');

    if (calculateButton7) {
        calculateButton7.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton7.textContent = 'Calcular'; 

            performCalculation7();
        });
    }

    function performCalculation7() {

        const lado1 = parseFloat(input_lado_1.value);
        const lado2 = parseFloat(input_lado_2.value);
        const angle = parseFloat(input_angulo_paralelo_gramo.value);

        if (isNaN(lado1) || isNaN(lado2) || isNaN(angle)) {
            calculationResult7.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult7.style.color = 'red';
            return;
        }
        const angle_rad = angle * Math.PI / 180;

        const longitud = Math.sqrt((lado1 ** 2) + (lado2 ** 2) + (2 * lado1 * lado2 * Math.cos(angle_rad)));
        

        calculationResult7.textContent = `La longitud es: ${longitud.toFixed(2)}`;
        calculationResult7.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 8

    const calculateButton8 = document.getElementById('calculateButton8');
    const input_angulo_rh = document.getElementById('input_angulo_rh');
    const input_elevacion = document.getElementById('input_elevacion');
    const input_800pies = document.getElementById('input_800pies');
    const calculationResult8 = document.getElementById('calculationResult8');
    const calculationImage8 = document.getElementById('calculation-image');

    if (calculateButton8) {
        calculateButton8.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton8.textContent = 'Calcular'; 

            performCalculation8();
        });
    }

    function performCalculation8() {

        const angle = parseFloat(input_angulo_rh.value);
        const elevacion = parseFloat(input_elevacion.value);
        const base = parseFloat(input_800pies.value);

        if (isNaN(angle) || isNaN(elevacion) || isNaN(base)) {
            calculationResult8.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult8.style.color = 'red';
            return;
        }
        const angle_rad = angle * Math.PI / 180;

        const longitud = Math.sqrt((base+(elevacion/Math.tan(angle_rad)))**2+(elevacion)**2);
        

        calculationResult8.textContent = `La longitud es: ${longitud.toFixed(2)}`;
        calculationResult8.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 9

    const calculateButton9 = document.getElementById('calculateButton9');
    const inputhb = document.getElementById('inputhb');
    const inputangled = document.getElementById('inputangled');
    const inputanglee = document.getElementById('inputanglee');
    const calculationResult9 = document.getElementById('calculationResult9');
    const calculationImage9 = document.getElementById('calculation-image');

    if (calculateButton9) {
        calculateButton9.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton9.textContent = 'Calcular'; 

            performCalculation9();
        });
    }

    function performCalculation9(){

        const altura = parseFloat(inputhb.value);
        const angle_inferior = parseFloat(inputangled.value);
        const angle_superior = parseFloat(inputanglee.value);

        if (isNaN(altura) || isNaN(angle_inferior) || isNaN(angle_superior)) {
            calculationResult9.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult9.style.color = 'red';
            return;
        }
        const angle_inferior_rad = angle_inferior * Math.PI / 180;
        const angle_superior_rad = angle_superior * Math.PI / 180;


        const valor = (altura / (Math.tan(angle_inferior_rad)+Math.tan(angle_superior_rad)));
        

        calculationResult9.textContent = `La distancia es: ${valor.toFixed(1)}`;
        calculationResult9.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 10

    const calculateButton10 = document.getElementById('calculateButton10');
    const inputlado_hexagono = document.getElementById('inputlado_hexagono');
    const calculationResult10 = document.getElementById('calculationResult10');
    const calculationImage10 = document.getElementById('calculation-image');

    if (calculateButton10) {
        calculateButton10.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton10.textContent = 'Calcular'; 

            performCalculation10();
        });
    }

    function performCalculation10(){

        const x = parseFloat(inputlado_hexagono.value);

        if (isNaN(x)) {
            calculationResult10.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult10.style.color = 'red';
            return;
        }

        angle= 120*Math.PI / 180;
        const valor = Math.sqrt(((x/2)**2)+((x)**2)-(2*(x/2)*x*Math.cos(angle)));
        

        calculationResult10.textContent = `La medida es: ${valor.toFixed(2)}`;
        calculationResult10.style.color = 'green'; // Or your preferred color for success
    }

        // pregunta 11

    const calculateButton11 = document.getElementById('calculateButton11');
    const input_velocidad = document.getElementById('input_velocidad');
    const calculationResult11 = document.getElementById('calculationResult11');
    const calculationImage11 = document.getElementById('calculation-image');

    if (calculateButton11) {
        calculateButton11.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton11.textContent = 'Calcular'; 

            performCalculation11();
        });
    }

    function performCalculation11(){

        const x = parseFloat(input_velocidad.value);

        if (isNaN(x)) {
            calculationResult11.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult11.style.color = 'red';
            return;
        }

        angle= 135*Math.PI / 180;
        const valor = Math.sqrt(((x/2)**2)+((x)**2)-(2*(x/2)*x*Math.cos(angle)));
        

        calculationResult11.textContent = `La medida es: ${valor.toFixed(1)}`;
        calculationResult11.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 17

    const calculateButton12 = document.getElementById('calculateButton12');
    const input_h_avion = document.getElementById('input_h_avion');
    const input_angulo_avion = document.getElementById('input_angulo_avion');
    const calculationResult12 = document.getElementById('calculationResult12');
    const calculationImage12 = document.getElementById('calculation-image');

    if (calculateButton12) {
        calculateButton12.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton12.textContent = 'Calcular'; 

            performCalculation12();
        });
    }

    function performCalculation12(){

        const altura = parseFloat(input_h_avion.value);
        const angle = parseFloat(input_angulo_avion.value);

        if (isNaN(angle) || isNaN(altura)) {
            calculationResult12.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult12.style.color = 'red';
            return;
        }

        angle_rad = angle*Math.PI / 180;
        const valor = altura / Math.sin(angle_rad);

        calculationResult12.textContent = `La distancia es: ${valor.toFixed(2)}`;
        calculationResult12.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 18

    const calculateButton13 = document.getElementById('calculateButton13');
    const input_long1 = document.getElementById('input_long1');
    const input_long2 = document.getElementById('input_long2');
    const input_angle_s = document.getElementById('input_angle_s');
    const calculationResult13 = document.getElementById('calculationResult13');
    const calculationImage13 = document.getElementById('calculation-image');

    if (calculateButton13) {
        calculateButton13.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton13.textContent = 'Calcular'; 

            performCalculation13();
        });
    }

    function performCalculation13(){

        const long1 = parseFloat(input_long1.value);
        const long2 = parseFloat(input_long2.value);
        const angle = parseFloat(input_angle_s.value);

        if (isNaN(long1) || isNaN(long2) || isNaN(angle)) {
            calculationResult13.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult13.style.color = 'red';
            return;
        }

        angle_rad = angle*Math.PI / 180;
        const h = long1*Math.sin(angle_rad); 
        const cable1 = long1*Math.cos(angle_rad);
        const cable2 = Math.sqrt((long2**2) - (h**2));
        const valor = cable1 + cable2;

        calculationResult13.textContent = `La distancia es: ${valor.toFixed(1)}`;
        calculationResult13.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 21

    const calculateButton14 = document.getElementById('calculateButton14');
    const input_valora = document.getElementById('input_valora');
    const input_valorb = document.getElementById('input_valorb');
    const calculationResult14 = document.getElementById('calculationResult14');

    if (calculateButton14) {
        calculateButton14.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton14.textContent = 'Calcular'; 

            performCalculation14();
        });
    }

    function performCalculation14(){

        const a = parseFloat(input_valora.value);
        const beta = parseFloat(input_valorb.value);

        if (isNaN(a) || isNaN(beta)) {
            calculationResult14.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult14.style.color = 'red';
            return;
        }

        angle_rad = beta*Math.PI / 180;
        const b = a*Math.tan(angle_rad);
        const r = a/Math.cos(angle_rad);
        const alpha = 90-beta;

        calculationResult14.textContent = `b= ${b.toFixed(2)}, r= ${r.toFixed(2)}, alpha α= ${alpha}`;
        calculationResult14.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 22

    const calculateButton15 = document.getElementById('calculateButton15');
    const input_15 = document.getElementById('input_15');
    const input_18 = document.getElementById('input_18');
    const input_108 = document.getElementById('input_108');
    const calculationResult15 = document.getElementById('calculationResult15');

    if (calculateButton15) {
        calculateButton15.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton15.textContent = 'Calcular'; 

            performCalculation15();
        });
    }

    function performCalculation15(){

        const a = parseFloat(input_15.value);
        const b_1 = parseFloat(input_18.value);
        const c = parseFloat(input_108.value);

        if (isNaN(a) || isNaN(b_1) || isNaN(c)) {
            calculationResult15.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult15.style.color = 'red';
            return;
        }

        angle_rad = c*Math.PI / 180;
        const x = Math.sqrt(a**2 + b_1**2 - 2*a*b_1*Math.cos(angle_rad));

        calculationResult15.textContent = `x= ${x.toFixed(2)} o x= ${x.toFixed(1)}`;
        calculationResult15.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 23

    const calculateButton16 = document.getElementById('calculateButton16');
    const inputvalorac = document.getElementById('inputvalorac');
    const inputvalorcb = document.getElementById('inputvalorcb');
    const inputvalorang = document.getElementById('inputvalorang');
    const calculationResult16 = document.getElementById('calculationResult16');

    if (calculateButton16) {
        calculateButton16.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton16.textContent = 'Calcular'; 

            performCalculation16();
        });
    }

    function performCalculation16(){

        const ca = parseFloat(inputvalorac.value);
        const cb = parseFloat(inputvalorcb.value);
        const angulo = parseFloat(inputvalorang.value);

        if (isNaN(ca) || isNaN(cb) || isNaN(angulo)) {
            calculationResult16.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult16.style.color = 'red';
            return;
        }

        angle_rad = (angulo*Math.PI / 180);
        const angulo_b = ((Math.asin(ca/(cb/Math.sin(angle_rad)))*(180/Math.PI)));
        const angulo_c = (180 - angulo - angulo_b);
        const angulo_c_rad = angulo_c * Math.PI / 180;
        const longitud = ((cb/Math.sin(angle_rad))*Math.sin(angulo_c_rad));

        calculationResult16.textContent = `La distancia entre A y B es ${longitud.toFixed(1)}`;
        calculationResult16.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 24

    const calculateButton17 = document.getElementById('calculateButton17');
    const inputlongitudcable1 = document.getElementById('inputlongitudcable1');
    const inputlongitudcable2 = document.getElementById('inputlongitudcable2');
    const inputbarcoremolcador = document.getElementById('inputbarcoremolcador');
    const calculationResult17 = document.getElementById('calculationResult17');

    if (calculateButton17) {
        calculateButton17.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton17.textContent = 'Calcular'; 

            performCalculation17();
        });
    }

    function performCalculation17(){

        const b = parseFloat(inputlongitudcable1.value);
        const c = parseFloat(inputlongitudcable2.value);
        const a = parseFloat(inputbarcoremolcador.value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            calculationResult17.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult17.style.color = 'red';
            return;
        }

        const angulo = Math.acos((b**2+c**2-a**2)/(2*b*c));
        const angulo_rad = angulo * 180 / Math.PI;

        calculationResult17.textContent = `El ángulo es ${angulo_rad.toFixed(2)}°`;
        calculationResult17.style.color = 'green'; // Or your preferred color for success
    }

    // pregunta 25

    const calculateButton18 = document.getElementById('calculateButton18');
    const input_inclinacion_colina = document.getElementById('input_inclinacion_colina');
    const input_elevacion_globo_caliente = document.getElementById('input_elevacion_globo_caliente');
    const input_elevacion_globo = document.getElementById('input_elevacion_globo');
    const input_distancia_millas_colina = document.getElementById('input_distancia_millas_colina');
    const calculationResult18 = document.getElementById('calculationResult18');

    if (calculateButton18) {
        calculateButton18.addEventListener('click', function() {
            console.log("Calculate button clicked!"); 
            calculateButton18.textContent = 'Calcular'; 

            performCalculation18();
        });
    }

    function performCalculation18(){

        const inclinacion = parseFloat(input_inclinacion_colina.value);
        const globo_caliente = parseFloat(input_elevacion_globo_caliente.value);
        const globo = parseFloat(input_elevacion_globo.value);
        const distancia_millas = parseFloat(input_distancia_millas_colina.value);

        if (isNaN(inclinacion) || isNaN(globo_caliente) || isNaN(globo) || isNaN(distancia_millas)) {
            calculationResult18.textContent = 'Por favor, ingrese números válidos en todos los campos.';
            calculationResult18.style.color = 'red';
            return;
        }

        const xp = -distancia_millas*Math.cos(inclinacion*Math.PI/180);
        const yp = -distancia_millas*Math.sin(inclinacion*Math.PI/180);

        //xb*(tan(globo)-tan(globocaliente))= yp-tan(globocaliente)*xp Con esto podemos hallar xb

        const xb= (yp - Math.tan(globo_caliente * Math.PI / 180) * xp) / (Math.tan(globo * Math.PI / 180) - Math.tan(globo_caliente * Math.PI / 180));
        const yb= xb*(Math.tan(globo * Math.PI / 180));

        //por lo tanto la distancia es la hipotenusa de xb y yb
        const distancia = Math.sqrt(xb**2 + yb**2);

        calculationResult18.textContent = `La distancia es ${distancia.toFixed(2)} unidades.`;
        calculationResult18.style.color = 'green'; // Or your preferred color for success
    }





    // Example: How you might change the image and associate specific calculations later
    // For now, this is just a conceptual note.
    // function loadImageAndCalculation(imageSrc, calculationFunction) {
    //     calculationImage.src = imageSrc;
    //     // currentCalculation would be a variable holding the function to execute
    //     // currentCalculation = calculationFunction;
    //     inputValue1.value = '';
    //     inputValue2.value = '';
    //     calculationResult.textContent = 'El resultado aparecerá aquí.';
    //     calculationResult.style.color = 'black';
    // }

    // Example of a specific calculation function (to be defined by user later)
    // function calculateAreaOfRectangle(length, width) {
    //     return length * width;
    // }
});
