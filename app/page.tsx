import Image from 'next/image'
import ImagePublic from '@/public/next.svg'

export default function HomePage(){
  return (
    <div>
      <h1>Hello Next.js!</h1>
      <br/>
      <h2>Local Image</h2>
      <Image 
      src= {ImagePublic} 
      alt="This image NEXT" 
      width={200}
      height={200}
      />

      <br />
      <h1>Remote Image</h1>
      <Image 
      src="https://images.unsplash.com/photo-1738168279272-c08d6dd22002?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Picture of the author"
      width={300}
      height={0}
      />
    </div>
  )
}