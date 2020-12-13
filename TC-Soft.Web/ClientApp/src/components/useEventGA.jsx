import ReactGA from "react-ga";

const useEventGA = (category, action ) => {
  const trackEvent = () => {
    ReactGA.event({category, action});
  }
  return trackEvent;
}

export default useEventGA;