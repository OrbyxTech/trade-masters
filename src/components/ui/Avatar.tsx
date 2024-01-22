
'use client';

import { useSession } from "next-auth/react"

function Avatar() {

    const { data, status } = useSession()

    return (
        status === "loading"
            ?
            <div className="w-32 aspect-square rounded-lg bg-slate-300 animate-pulse"></div>
            :
            data && data.user?.image && status === "authenticated"
                ?
                <img
                    alt=""
                    src={data.user.image}
                    loading="lazy"
                    className="w-32 aspect-square rounded-lg"
                />
                :
                <img
                    alt=""
                    src={'/avatar.jpg'}
                    loading="lazy"
                    className="w-32 aspect-square rounded-lg"
                />

    )
}

export default Avatar