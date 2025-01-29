"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User, LogIn } from "lucide-react"

export default function LoginBtn() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Button variant="ghost">Cargando...</Button>
  }

  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
              <AvatarFallback>{session.user?.name ? session.user.name[0].toUpperCase() : "U"}</AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline-block font-medium">{session.user?.name || session.user?.email}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem className="flex-col items-start">
            <div className="font-medium">{session.user?.name}</div>
            <div className="text-sm text-muted-foreground">{session.user?.email}</div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()} className="text-red-600">
            <LogIn className="mr-2 h-4 w-4 rotate-180" />
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button onClick={() => signIn("google")} className="flex items-center space-x-2">
      <LogIn className="h-4 w-4" />
      <span>Iniciar sesión con Google</span>
    </Button>
  )
}

