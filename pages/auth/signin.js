import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

export default function signin({ providers }) {
  return (
    <>
        <Header />
        <div className='flex justify-center space-x-7 mt-20'>
            <img 
                className='hidden object-cover md:inline-flex'
                src=''
                alt='login-image'
            />
            <div className='' >
                <p className='mb-4'>This app is created for learning purposes</p>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name} className='text-center'>
                        <img src='' alt='' />
                        
                        <button 
                            className='bg-blue-400 rounded-lg p-3 text-white mb-4 hover:bg-blue-600' 
                            onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

// use server side render => faster than using useEffect (render inside browser)
export async function getServerSideProps(context){
    const providers = await getProviders()
    return {
        props: {providers}
    }
}