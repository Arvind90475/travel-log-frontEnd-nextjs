import GlobalWrapper from "../components/GlobalWrapper";
import { useAllLogEntriesQuery } from "../generated/graphql";

const Index = () => {
  const { data, error } = useAllLogEntriesQuery();

  return (
    <>
      <GlobalWrapper />
      <pre>{JSON.stringify(data?.allLogEntries, null, 2)}</pre>
    </>
  );
};

export default Index;
