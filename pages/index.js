import Link from "next/link";
import {useRouter} from 'next/router'

const HomePage = () => {
  const router = useRouter()
  const gotoNext = ()=>{
    router.push({pathname:'/about'})
  }
  return (
    <div>
      <h1> The Home Page </h1>
      <ul>
        <li>
          <Link href="/portfolio"> PortFoliio </Link>
        </li>

        <li>
          <Link href="/clients"> Clients </Link>
        </li>
      </ul>
      <h1> This is the second part </h1>
      <button onClick={gotoNext}> Show About Page </button>
    </div>
  );
};

export default HomePage;
