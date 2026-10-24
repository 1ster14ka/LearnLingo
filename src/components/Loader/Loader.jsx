import { DNA } from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderOverlay}>
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass={s.loader}
      />
    </div>
  );
};

export default Loader;
