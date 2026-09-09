import heidi from './assets/heidi.png'
import felix from './assets/felix.png'
import { SocialIcon } from 'react-social-icons'

function App() {

  const felixProf = {
    firstName: 'Felix',
    lastName: 'Turbowitz',
    userName: '@dontshakemysalt',
    profession: 'Exotic Arms Dealer',
    blurb: '',
    profilePic: felix,
  }
  const heidiProf = {
    firstName: 'Heidi',
    lastName: 'Kraemer',
    userName: '@bungaloShampew8)',
    profession: 'Wild Hampster Tamer',
    blurb: '',
    profilePic: heidi,

  }

  const heidiProfession = heidiProf.profession
  const splitWords = heidiProfession.split(' ')
  const setOne = [splitWords[0], splitWords[1]].join(' ')
  const setTwo = splitWords.filter((w, i) => i > 1 ? w : null).join(' ')


  return (
    <div className="app">

      {/* profile card */}
      <div className="flex h-30 w-90 bg-indigo-400 rounded-2xl mx-auto my-40">

        {/* avatar section */}
        <div className="flex flex-col w-27 justify-center items-center">
          <img
            className='w-20 aspect-square rounded-full object-cover '
            src={heidiProf.profilePic}
            alt='profile picture' />
        </div>

        {/* Name and profession */}
        <div className="w-63 flex flex-col ">
          <span className='text-2xl text-stone-300 max-w-62 px-3 pt-2'>{heidiProf.firstName} {heidiProf.lastName}</span>
          <span className='text-sm text-stone-300 font-medium px-3 pt-1 '>{heidiProf.userName}</span>

          <div className='pt-4 px-3 flex flex-col w-40'>
            <span className='text-sm text-stone-300 shrink-0'>{setOne}</span>
            <span className='text-sm text-stone-300'>{setTwo}</span>

            <div className='flex flex-inline size-15 mx-43 mb-60 -translate-y-10 transform gap-0.5'>
              <SocialIcon borderRadius='0' url='https://instagram.com' />
              <SocialIcon borderRadius='0' url='https://github.com' />
              <SocialIcon borderRadius='0' url='https://discord.com' />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App