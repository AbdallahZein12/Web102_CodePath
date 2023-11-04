import './App.css'

import CreatePost from './routes/CreatePost.jsx'
import {createClient} from '@supabase/supabase-js'
import SideNav from './components/sideNav'


const supaURL = 'https://dwnpjtkhauarljuueowu.supabase.co'
const supaAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3bnBqdGtoYXVhcmxqdXVlb3d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNzM3NzQsImV4cCI6MjAxNDY0OTc3NH0.VNwL1H4oG-CF7H8icw-CIqS1sNtHvxNIoXw82db1qZg'

function App() {
  const supabase = createClient(supaURL,supaAPI)

  return (
   <div className='create-CrewMates'>
    <SideNav/>
    <h1 className='title'>Among us!</h1>
   </div>
  )
}

export default App
