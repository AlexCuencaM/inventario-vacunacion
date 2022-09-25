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