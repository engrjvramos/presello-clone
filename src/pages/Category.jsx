import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
import Spinner from "../components/Spinner";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, "listings");
        const q = query(
          listingRef,
          where("offerType", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(9),
        );
        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    }
    fetchListings();
  }, [params.categoryName]);

  async function onFetchMoreListings() {
    try {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("offerType", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(3),
      );
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);

      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listings");
    }
  }

  return (
    <main>
      <section
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url(https://www.presello.com/wp-content/uploads/2019/10/upscale-modern-townhouses-facade.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-[300px] overflow-hidden flex items-center "
      >
        <h1 className="uppercase font-semibold tracking-wider text-3xl max-w-7xl mx-auto text-white">
          {params.categoryName === "rent"
            ? "Properties for rent"
            : "Properties for sale"}
        </h1>
      </section>
      <section className="max-w-7xl mx-auto my-12">
        {loading ? (
          <Spinner />
        ) : listings && listings.length > 0 ? (
          <>
            <main>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing) => (
                  <ListingItem
                    key={listing.id}
                    id={listing.id}
                    listing={listing.data}
                  />
                ))}
              </ul>
            </main>
            {lastFetchedListing && (
              <div className="flex justify-center items-center my-6">
                <button
                  className="bg-white px-4 py-2 text-gray-700 border border-gray-300 rounded hover:border-slate-600 transition duration-150 ease-in-out"
                  onClick={onFetchMoreListings}
                >
                  Load more
                </button>
              </div>
            )}
          </>
        ) : (
          <p>
            There are no current properties for{" "}
            {params.categoryName === "rent" ? "rent" : "sale"}
          </p>
        )}
      </section>
    </main>
  );
};

export default Category;
