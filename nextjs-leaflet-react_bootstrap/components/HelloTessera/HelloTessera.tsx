import styles from './helloTessera.module.css'

const helloTessera = () => {
  return (
    <div className={styles.heading} data-testid="HT-heading">
      <span> Hello Tesseras! </span>
      <p className='text'>This is the most simple Next.js App.</p>
    </div>
  )
}

export default helloTessera
