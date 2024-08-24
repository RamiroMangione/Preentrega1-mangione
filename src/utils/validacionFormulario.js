import { object, string} from 'yup'

let userSchema = object({
    nombre: string().required("Eror en el nombre"),
    email: string().email().required("Error en el mail"),
    telefono: string().required("Error en el telefono"),
})

const validarFormulario = async(data) => {
    try {
        await userSchema.validate(data)
        return {status: "success"}
    } catch (error) {
        return {status: "error", error: error.message}
    }
}
export default validarFormulario