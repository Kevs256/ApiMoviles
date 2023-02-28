import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Student from '../interfaces/IStudent';

const students: Student[] = [
    {
        "nombre": "Ana García",
        "correo": "ana.garcia@example.com",
        "contraseña": "123456",
        "carrera": "Ingeniería de Sistemas",
        "promedio": 4.5,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Juan Martinez",
        "correo": "juan.martinez@example.com",
        "contraseña": "abcdef",
        "carrera": "Arquitectura",
        "promedio": 4.2,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Luisa Rodriguez",
        "correo": "luisa.rodriguez@example.com",
        "contraseña": "ghijkl",
        "carrera": "Medicina",
        "promedio": 4.8,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Pedro Gómez",
        "correo": "pedro.gomez@example.com",
        "contraseña": "mnopqr",
        "carrera": "Derecho",
        "promedio": 4.0,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "María Sanchez",
        "correo": "maria.sanchez@example.com",
        "contraseña": "stuvwx",
        "carrera": "Ingeniería Industrial",
        "promedio": 4.6,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "José Torres",
        "correo": "jose.torres@example.com",
        "contraseña": "yzabcd",
        "carrera": "Administración de Empresas",
        "promedio": 4.3,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Luisa Rodriguez",
        "correo": "luisa.rodriguez@example.com",
        "contraseña": "ghijkl",
        "carrera": "Medicina",
        "promedio": 4.8,
        "imagen": "https://via.placeholder.com/150"
    }, {
        "nombre": "Ana García",
        "correo": "ana.garcia@example.com",
        "contraseña": "123456",
        "carrera": "Ingeniería de Sistemas",
        "promedio": 4.5,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Juan Martinez",
        "correo": "juan.martinez@example.com",
        "contraseña": "abcdef",
        "carrera": "Arquitectura",
        "promedio": 4.2,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Luisa Rodriguez",
        "correo": "luisa.rodriguez@example.com",
        "contraseña": "ghijkl",
        "carrera": "Medicina",
        "promedio": 4.8,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Pedro Gómez",
        "correo": "pedro.gomez@example.com",
        "contraseña": "mnopqr",
        "carrera": "Derecho",
        "promedio": 4.0,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "María Sanchez",
        "correo": "maria.sanchez@example.com",
        "contraseña": "stuvwx",
        "carrera": "Ingeniería Industrial",
        "promedio": 4.6,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "José Torres",
        "correo": "jose.torres@example.com",
        "contraseña": "yzabcd",
        "carrera": "Administración de Empresas",
        "promedio": 4.3,
        "imagen": "https://via.placeholder.com/150"
    },
    {
        "nombre": "Luisa Rodriguez",
        "correo": "luisa.rodriguez@example.com",
        "contraseña": "ghijkl",
        "carrera": "Medicina",
        "promedio": 4.8,
        "imagen": "https://via.placeholder.com/150"
    }
]

function buscarEstudiantePorCorreo(correo: string): Student | undefined {
    return students.find((student) => student.correo === correo);
}

function buscarEstudiantePorContraseña(contraseña: string): Student | undefined {
    return students.find((student) => student.contraseña === contraseña);
}

const secretKey = 'secreto123';
const verifyKey = 'verificar123';

const Login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("entro bien")
        const { email, password } = req.body;
        const _useremail = buscarEstudiantePorCorreo(email);
        if (_useremail === null) return res.json({ 'error': 2, 'message': 'Correo no registrado' });
        const _userpassword = buscarEstudiantePorContraseña(password);
        if (!_userpassword) return res.json({ 'error': 3, 'message': 'Contraseña incorrecta' });
        else {
            const user = {
                nombre: _userpassword.nombre,
                carrera: _userpassword.carrera,
                promedio: _userpassword.promedio,
            };

            const options = {
                expiresIn: '1h',
                //alg: 'HS256'
            };

            var token = jwt.sign(user, secretKey, options);

            console.log("hasta despues del token")
            console.log(token);

            res.status(200).json({ 'error': 0, data: token })
        }
    } catch (error) {
        res.status(500).json({ 'error': 1, 'message': 'no se pudo' })
    }
}

const ListView = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("entro bien")
        //console.log(req.body)
    } catch (error) {
        console.log("eynoooo")
    }
}

export default {
    Login,
    ListView
}