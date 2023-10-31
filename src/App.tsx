
import { ImagesContainer, Navbar, TodosList, Input } from '@/components'
import { Providers } from './Providers'

function App() {

  return (
    <Providers>
      <ImagesContainer />
      <div className='container mx-auto max-w-lg px-4'>
        <Navbar />
        <main>
          <div className="flex flex-col gap-4">
            <Input />
            <TodosList />
            <footer className="my-5">
              <h6 className="font-semibold text-center text-gray-500/80">Drag and drop to reorder list</h6>
            </footer>
          </div>
        </main>
      </div>
    </Providers>
  )
}

export default App