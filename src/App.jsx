import heidi from './assets/heidi.png'
import felix from './assets/felix.png'


function App() {

  const felixProf = {
    firstName: 'Felix',
    lastName: 'Turbowitz',
    userName: '@dontshakemysalt',
    profession: 'Exotic Arms Dealer',
    profilePic: felix,
  }
  const heidiProf = {
    firstName: 'Heidi',
    lastName: 'Kraemer',
    userName: '@bungaloShampew8)',
    profession: 'Wild Hampster Tamer',
    profilePic: heidi,
  }

  return (
    <div className="app">

      {/* profile card */}
      <div className="flex h-30 w-90 bg-indigo-400 rounded-2xl mx-auto my-40">

        {/* avatar section */}
        <div className="flex flex-col w-27 pt-2 justify-center items-center">
          <img
            className='w-20 aspect-square rounded-full object-cover '
            src={heidiProf.profilePic}
            alt='profile picture' />

          {/* username */}
          <div className='pt-1'>
            <span className='inline-block w-25 truncate text-sm font-medium '>{heidiProf.userName}</span>
          </div>

        </div>

        {/* Name and profession */}
        <div className="bg-blue-400 w-63">b</div>

      </div>

    </div>
  )
}

export default App