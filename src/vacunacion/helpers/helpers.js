import * as yup from 'yup';
yup.addMethod(yup.string, 'integerOnString', function () {
    return this.matches(/^\d+$/, 'La cadena de caracteres solo debe tener números')
})
yup.addMethod(yup.string, 'onlyLetters', function () {
    return this.matches(/^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/, 'La cadena de caracteres solo debe tener letras o espacios')
})

export const schema = yup.object().shape({
    names: yup.string().onlyLetters().required(),
    cedula: yup.string().integerOnString().required().length(10, "La cédula debe contener 10 dígitos"),
    lastnames: yup.string().onlyLetters().required(),
    email: yup.string().email(),
  });

export const drawerWidth = 240;

export const generalOptions = [
    {
        label: "Cerrar Sesión",
        route: "/"
    }
]

export const menuByRole = (roleId) =>{
    const prefix = roleId === 1 ? "/admin/employes" : "/employed"
    const menu = [
        {
            roleId: 1,
            label: "Crear un empleado",
            route: `${prefix}/create`
        },
        {
            roleId: 1,
            label: "Ver empleado",
            route: `${prefix}/all`
        },
        {
            roleId: 2,
            label: "Actualizar Información",
            route: `${prefix}/update`
        }
    ]
    return menu.filter(opt => opt.roleId === roleId)
} 