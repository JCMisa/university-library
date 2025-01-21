import BookList from "@/components/custom/BookList";
import BookOverview from "@/components/custom/BookOverview";
import { sampleBooks } from "@/constants";

const Home = async () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
