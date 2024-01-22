
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./button"

function User() {

    const { data, status } = useSession()

    console.log(data)

    return (
        <>
            {
                status === "loading"
                    ?
                    <div className="w-10 aspect-square rounded-full bg-slate-300 animate-pulse"></div>
                    :
                    status === "authenticated" && data.user
                        ?
                        <div className="flex items-center gap-x-2">
                            {
                                data?.user?.image
                                    ?
                                    <>
                                        <img
                                            alt=""
                                            src={data.user.image}
                                            loading="lazy"
                                            className="w-10 h-10 object-center object-cover rounded-full"
                                        />

                                        <p className="text-xs text-foreground/60 font-medium">{data.user.name}</p>

                                        <Button
                                            size="sm"
                                            onClick={() => signOut()}
                                            className="ml-4 text-xs"
                                        >
                                            Sign Out
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <div className="w-10 aspect-square rounded-full grid place-items-center bg-foreground/20">
                                            <p className="text-xs text-foreground/60 font-medium">{data?.user?.name?.[0]}</p>
                                        </div>

                                        <div className="w-10 aspect-square rounded-full grid place-items-center bg-foreground/20">
                                            <p className="text-xs text-foreground/60 font-medium">{data.user.name}</p>
                                        </div>
                                    </>

                            }
                        </div>
                        :
                        <Button
                            size="sm"
                            onClick={() => signIn()}
                        >
                            Sign In
                        </Button>
            }
        </>
    )
}

export default User