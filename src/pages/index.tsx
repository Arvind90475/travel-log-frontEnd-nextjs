import GlobalWrapper from "../components/GlobalWrapper";
import NestedMenu from "../components/NestedMenu";
import { useAllLogEntriesQuery } from "../generated/graphql";

const Index = () => {
  const { data, loading, error } = useAllLogEntriesQuery({
    variables: {
      options: {limit: 10}
    }
  });

  if (loading) return <h1>Loading...</h1>;

  return (
    <GlobalWrapper>
      {error ? (
        <h1>{error.message}</h1>
      ) : (
        <>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <NestedMenu />
        </>
      )}
    </GlobalWrapper>
  );
};

export default Index;
