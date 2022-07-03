
import About from './pageComponents/About'
import Experience from './pageComponents/Experience'
import Education from './pageComponents/Education'
import Projects from './pageComponents/Projects'
import Contact from './pageComponents/Contact'

export default function Home() {
  return (
      <main className='container mx-auto'>
        <a class="anchor" name="about"></a>
        <section className='py-20'><About /></section>
        <a class="anchor" name="experience"></a>
        <section className='py-20'><Experience /></section>
        <a class="anchor" name="projects"></a>
        <section className='py-20'><Projects /> </section>
        <a class="anchor" name="education"></a>
        <section className='py-20'><Education /></section>
        <a class="anchor" name="contact"></a>
        <section className='py-20'><Contact /></section>
      </main>
  )
}
