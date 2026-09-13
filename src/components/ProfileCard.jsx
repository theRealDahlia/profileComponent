import felix from '../assets/felix.png'
import heidi from '../assets/heidi.png'
import { SocialIcon } from 'react-social-icons'

export function ProfileCard() {
    const peopleList = [
        {
            firstName: 'Felix',
            lastName: 'Turbowitz',
            userName: '@dontshakemysalt',
            profession: 'Exotic Gummy Bear Dealer',
            profilePic: felix,
        },
        {
            firstName: 'Heidi',
            lastName: 'Kraemer',
            userName: '@bungaloShampew8)',
            profession: 'Wild Hampster Tamer',
            profilePic: heidi,

        }
    ]

    const component = peopleList.map((p, i) => {

        const profession = p.profession
        const splitWords = profession.split(' ')
        const setOne = [splitWords[0], splitWords[1]].join(' ')
        const setTwo = splitWords.filter((w, i) => i > 1 ? w : null).join(' ')

        return (
            <div key={i}>
                < div className="flex h-30 w-90 bg-violet-800 rounded-2xl mx-auto my-40 shadow-xl/60 shadow-teal-300" >
                    < div className="flex flex-col w-27 justify-center items-center" >
                        <img
                            className='w-20 aspect-square rounded-full object-cover'
                            src={p.profilePic}
                            alt='profile picture' />
                    </div >
                    < div className="w-63 flex flex-col rounded-2xl" >
                        <span className='text-2xl text-stone-300 max-w-62 px-3 pt-2'>{p.firstName} {p.lastName}</span>
                        <span className='text-sm text-stone-300 font-medium px-3 pt-1 '>{p.userName}</span>
                        <div className='pt-4 px-3 flex flex-col w-40'>
                            <span className='text-sm text-stone-300 shrink-0'>{setOne}</span>
                            <span className='text-sm text-stone-300'>{setTwo}</span>
                            <div className='flex flex-inline size-15 mx-43 mb-60 -translate-y-10 transform gap-0.5'>
                                <SocialIcon borderRadius='0' url='https://instagram.com' />
                                <SocialIcon borderRadius='0' url='https://github.com' />
                                <SocialIcon borderRadius='0' url='https://discord.com' />
                            </div>

                        </div>

                    </div >

                </div >
            </div>
        )
    })

    return (
        <>
            {component}
        </>
    )
}