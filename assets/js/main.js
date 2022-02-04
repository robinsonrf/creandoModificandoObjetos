//Funcion Constructora Consultorio
function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente || [];


    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getPaciente", {
        get: function () {
            return _paciente;
        }
    });

};


//Funcion Constructora Pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    

    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre;
        }
    });

    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });


    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return _edad;
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            _edad = edad;
        }
    });


    Object.defineProperty(this, "_getRut", {
        get: function () {
            return _rut;
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            _rut = rut;
        }
    });


    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return _diagnostico;
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
};

// Metodo propiedad prototype que permita buscar paciente por su nombre
Consultorio.prototype.buscarPaciente = function (paciente_buscar) {
    var consulto = this._getNombre;
    this._getPaciente.forEach(function (element) {

        if ((element._getNombre) == paciente_buscar) {
            console.log("Paciente Encontrado con el nombre de : " + element._getNombre + " Rut : " + element._getRut + " Edad : " + element._getEdad + " Diagnostico: " + element._getDiagnostico + " en las dependencias de : " + consulto);

        }
    });

};

// Metodo propiedad prototype para mostrar total de pacientes con sus datos
Consultorio.prototype.TotalPacientes = function () {
    var consulto = this._getNombre;
    this._getPaciente.forEach(function (element) {

        console.log("Nombre : " + element._getNombre + " Rut : " + element._getRut + " Edad : " + element._getEdad + " Diagnostico : " + element._getDiagnostico + " Dependencia : " + consulto)

    })

}

// Metodo propiedad Prototype para Agregar Pacientes Mediante metodo Push
Consultorio.prototype.agregarPaciente = function(nuevo){
    this._getPaciente.push(nuevo);
};


//PROTOTYPE PACIENTES
Paciente.prototype.getPaciente = function () {
    return this._nombre;
};

Paciente.prototype.setPaciente = function (nuevoNombre) {
    this._nombre = nuevoNombre;
};

Paciente.prototype.getEdad = function () {
    return this._edad;
};

Paciente.prototype.setEdad = function (edad) {
    this._edad = edad;
};

Paciente.prototype.getRut = function () {
    return this._rut;
};

Paciente.prototype.setRut = function (rut) {
    this._rut = rut;
};

Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico;
};

Paciente.prototype.setRut = function (diagnostico) {
    this._diagnostico = diagnostico;
};

//Instanciar Pacientes Consultorio
var paciente1 = new Paciente("Pedro Perez", 36, 157026503, "Fractura Femur");
var paciente2 = new Paciente("Andrea Cordoba", 45, 232013063, "Malestar con Fiebre");
var paciente3 = new Paciente("Jesus Diaz", 52, 152730721, "Traumatismo");
var consultorio1 = new Consultorio("CESFAM San Flipe.", [paciente1, paciente2, paciente3]);
var paciente4 = new Paciente("Ramon Lopez", 24, 266832733, "Migraña");
var paciente5 = new Paciente("Mariana Gonzalez", 42, 1128362913, "Intoxicacion");
consultorio1.agregarPaciente(paciente4)
consultorio1.agregarPaciente(paciente5)



//Buscar Paciente Jesus Diaz en Consultorio 1
consultorio1.buscarPaciente("Ramon Lopez")
console.log("______________________________________")// separacion 


// listar todos  los pacientes del Consultorio
console.log("Listado de pacientes:")
consultorio1.TotalPacientes();







    