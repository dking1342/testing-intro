import useFetchAll from "../../customHooks/useFetchAll";

const Photos: any = () => {
  let { loading, error, payloads } = useFetchAll(
    "https://jsonplaceholder.typicode.com/photos/"
  );

  if (loading) {
    return <div>loading</div>;
  }
  if (!loading && error) {
    return <div>{error}</div>;
  }
  if (!loading && payloads) {
    let truncatedList = payloads!.slice(0, 9);
    return (
      <div>
        <h1>Photos</h1>
        {truncatedList.map((item) => (
          <div key={item.id}>
            <p>Title: {item.title}</p>
            <img src={item.thumbnailUrl} alt={item.title} />
          </div>
        ))}
      </div>
    );
  }
  if (!loading && !payloads && !error) {
    return <div>Nothing to see</div>;
  }
};

export default Photos;
