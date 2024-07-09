import './App.css'
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"



function App() {
  

  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            hi
          </SheetContent>
        </Sheet>

      </div>
    </>
  )
}

export default App
