import heidi from './assets/heidi.png'


function App() {

  return (
    <div className="app">
      <div className="flex h-30 w-90 bg-indigo-400 rounded-2xl mx-auto my-40">
        <div className="bg-green-400 w-27">
          <img 
          className='w-20 aspect-square rounded-full object-cover mx-3 my-3'
          src={heidi}
          alt='profile picture'/>
        </div>
        <div className="bg-blue-400 w-63">b</div>
      </div>
    </div>
  )
}

export default App