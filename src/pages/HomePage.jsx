import { useState } from "react";
import Tip from "../Components/Tip"
import { tips } from "../helpers/tips.json"
import HeaderHome from "../Components/HeaderHome";


function HomePage() {

  const [tip, setTip] = useState({})

  setTimeout(() => setTip(tips[Math.floor(Math.random() * tips.length)]), 3000)

  return (
    <>
      <HeaderHome />
      <section className="bg-black text-white">
        <Tip tip={tip} />
      </section>
    </>

  )
}

export default HomePage
