import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div>
                {/* Nombre y correo del usuario */}
                <p>Bienvenido, {session.user.name}!</p>
                <p>{session.user.email}</p>

                {/* Botón para cerrar sesión */}
                <button onClick={() => signOut()}>Cerrar sesión</button>
            </div>
        );
    }

    // Si no hay sesión, mostrar el botón para iniciar sesión
    return (
        <div>
            <p>No estás logeado</p>
            <button onClick={() => signIn("google")}>Iniciar sesión con Google</button>
        </div>
    );
}