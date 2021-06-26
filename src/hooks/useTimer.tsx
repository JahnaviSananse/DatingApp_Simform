import {useCallback, useEffect, useState} from 'react';

const useTimer = (callback: () => void, delay: number, duration: number) => {
  const [time, setTime] = useState(0);

  const tick = useCallback(() => {
    if (time <= duration && duration > 0) {
      setTime(time + delay);
      callback();
    }
  }, [callback, delay, duration, time]);

  useEffect(() => {
    const interval = setInterval(tick, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay, tick]);
};

export default useTimer;
