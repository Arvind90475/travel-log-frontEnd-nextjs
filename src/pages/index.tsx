import GlobalWrapper from "../components/GlobalWrapper";
import { useAllLogEntriesQuery, useMeQuery } from "../generated/graphql";

const Index = () => {
  const { data } = useAllLogEntriesQuery();
  const { data: res, error } = useMeQuery();

  return (
    <>
      <GlobalWrapper />
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        <>
          <pre>{JSON.stringify(res?.me, null, 2)}</pre>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default Index;
