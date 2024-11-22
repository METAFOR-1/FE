const { VITE_EXTERNAL_ORIGIN: externalOrigin } = import.meta.env;

const origin = {
  external: externalOrigin,
};

export default origin;
