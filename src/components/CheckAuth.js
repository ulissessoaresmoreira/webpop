import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {useSession} from 'next-auth/react'


const CheckAuth = ({Component, pageProps}) => {
    const {data: getSession, loading} = useSession()
    const router = useRouter()

    useEffect(() => {
        if (loading) return
        
        if(!getSession){
            router.push('/auth/signin')
        }

    }, [getSession, loading])

    if (getSession) {
        return <Component {...pageProps} />
    }

    return 'Carregando...'
}

export default CheckAuth