import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import data from './assets/data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            openSpots = {item.openSpots}
        />
    )
})  
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
          {cards}
      </section>
    </>
  )
}

export default App
