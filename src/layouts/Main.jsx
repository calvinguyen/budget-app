import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../helpers';
import wave from '../assets/images/wave.svg'
import Nav from '../components/Nav';

export function mainLoader() {
  const userName = fetchData('userName');
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className='layout'>
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="" />
    </div>
  );
};
export default Main;