import { ColorRing } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className="loader h-[100vh]">
     <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['lightblue', 'cyan', 'blue', 'white', "darkblue"]}
/>
    </div>
  );
};

export default Loader;
