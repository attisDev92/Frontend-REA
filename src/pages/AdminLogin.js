
const AdminLogin = () => {

    return (
        <form className="login__formulario col" action="" method="post" onsubmit="return validarFormulario()">
            <fieldset>
                <legend className="formulario__titulo">Administrador REA</legend>

                <input type="mail" name="usuario" id="usuario" placeholder="Correo electrónico"/>
                <p className="alert" id="mensaje-alert-usuario" style={{ display: "none" }}>Este correo ya se encuentra registrado.</p>

                <input type="password" name="password" id="password" placeholder="Contraseña"/>
                <p className="alert" id="mensaje-alert-pass" style={{ display: "none" }}>La contraseña es incorrecta.</p>

                <input className="btn" type="submit" value="Ingresar"/>


            </fieldset>
        </form>
    )
}

export default AdminLogin;