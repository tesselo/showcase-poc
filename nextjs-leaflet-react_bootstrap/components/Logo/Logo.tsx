import Image from 'next/image'

const Logo = (props: any) => {
  return (
    <div className={props.className}>
      <Image src="/logo.png" alt={props.alt} width={props.width} height={props.height}/> 
    </div>
  )
}

export default Logo
