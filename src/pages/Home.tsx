import React from 'react'
import TableHome from '../components/TableHome';

const Home = () => {
  return (
    <div>
      <p className="text-xl text-bold">Italthai Public Ltd.</p>
      <hr className="my-4" />
      <div className="px-5">
        <TableHome />
      </div>
    </div>
  );
}

export default Home