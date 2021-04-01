import React, {Suspense} from 'react'
import { Posts } from './Posts'
import { useResource } from './resource'


export default function App() {
  const resource = useResource()

  return (
    <div className="container">
      <h1>Suspense for Data Fetching</h1>

      <Suspense fallback={<p>Loading</p>}>
        <Posts resourse={resource}/>
      </Suspense>
      
    </div>
  )
}
