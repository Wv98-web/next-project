import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { startClock } from '../../redux/actions/timerActions';
import Examples from '../../components/example';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <>
      <Examples />
      <Link href="/state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  );
};

export default Index;
