CREATE DATABASE IF NOT EXISTS zona_azul;

USE zona_azul;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dni VARCHAR(9) NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(50),
    numero_cuenta VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS vehiculos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    matricula VARCHAR(10) NOT NULL,
    tipo ENUM ('Coche', 'Motocicleta', 'Furgoneta'),
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE IF NOT EXISTS zonas (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    horario VARCHAR(50),
    precio DECIMAL(4,2),
    limite INT UNSIGNED,
    obseraciones VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS registros (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    hora_llegada DATETIME,
    hora_salida DATETIME,
    sobrepaso_limite BOOLEAN DEFAULT FALSE,
    multa DECIMAL(4,2) DEFAULT NULL,
    id_vehiculo INT UNSIGNED,
    FOREIGN KEY (id_vehiculo) REFERENCES vehiculos (id)
);

CREATE TABLE IF NOT EXISTS reclamaciones (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fecha DATETIME, 
    motivo VARCHAR(200),
    tramitacion BOOLEAN,
    tramitacion_aceptada BOOLEAN,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    id_registro INT UNSIGNED,
    FOREIGN KEY (id_registro) REFERENCES registros (id)
);

CREATE TABLE IF NOT EXISTS vehiculo_zona (
	id_vehiculo INT UNSIGNED,
	FOREIGN KEY (id_vehiculo) REFERENCES vehiculos (id),
    id_zona INT UNSIGNED,
    FOREIGN KEY (id_zona) REFERENCES zonas (id),
    PRIMARY KEY (id_vehiculo, id_zona)
);

SET FOREIGN_KEY_CHECKS = 1;