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
      <div className="flex h-30 w-90 bg-indigo-400 rounded-2xl mx-auto my-40">
        <div className="w-27 flex flex-col justify-center items-center">
          <img
            className='w-20 aspect-square rounded-full object-cover '
            src={heidiProf.profilePic}
            alt='profile picture' />
          <span className='text-white-200 text-sm '>Username</span>
        </div>
        <div className="bg-blue-400 w-63">b</div>
      </div>
    </div>
  )
}

export default App