
import About from './pageComponents/About'
import Experience from './pageComponents/Experience'
import Projects from './pageComponents/Projects'
import Contact from './pageComponents/Contact'

export default function Home() {
  return (
      <main className='container mx-auto'>
        <a className="anchor" name="About"></a>
        <section className='py-28'><About /></section>
        {/* <a className="anchor" name="Experience"></a>
        <section className='py-20'><Experience /></section>
        <a className="anchor" name="Projects"></a>
        <section className='py-20'><Projects /> </section>
        <a className="anchor" name="Contact"></a>
        <section className='py-20'><Contact /></section> */}
      </main>
  )
}
