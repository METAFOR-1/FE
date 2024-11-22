const { VITE_EXTERNAL_ORIGIN: externalOrigin, VITE_API_ORIGIN: apiOrigin } =
  import.meta.env;

const origin = {
  api: apiOrigin,
  external: externalOrigin,
};

export default origin;
