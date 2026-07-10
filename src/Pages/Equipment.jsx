import { useEffect, useMemo, useState } from "react";
import items from "../data/equipment.json";
import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";

const PER_PAGE = 12;
const STORAGE_KEY = "swarali_equipment_state";

function Equipment() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setQuery(parsed.query || "");
      setCategory(parsed.category || "All");
      setAvailability(parsed.availability || "All");
      setPage(parsed.page || 1);

      setTimeout(() => {
        if (parsed.scrollY) window.scrollTo(0, parsed.scrollY);
      }, 80);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        query,
        category,
        availability,
        page,
        scrollY: window.scrollY,
      })
    );
  }, [query, category, availability, page]);

  const categories = ["All", ...new Set(items.map((i) => i.category))];
  const availabilityOptions = ["All", "Available", "Limited Stock", "Unavailable"];

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const q = query.toLowerCase();
      const matchesQuery =
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      const matchesCategory = category === "All" || item.category === category;
      const matchesAvailability =
        availability === "All" || item.availability === availability;

      return matchesQuery && matchesCategory && matchesAvailability;
    });
  }, [query, category, availability]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="section premium-page-bg">
      <div className="container">
        <div className="premium-page-head" data-aos="fade-up">
          <span className="tag premium-tag">Medical Equipment on Rent & Sale</span>
          <h1>Browse Equipment For Home Patient Care</h1>
          <p>
            Explore hospital-grade home care equipment available for rent or purchase
            with quick enquiry support on WhatsApp.
          </p>
        </div>

        <div className="premium-filter-box card glass-premium-card" data-aos="fade-up">
          <div className="filters filters-3">
            <input
              placeholder="Search equipment"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={availability}
              onChange={(e) => {
                setAvailability(e.target.value);
                setPage(1);
              }}
            >
              {availabilityOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {paged.length > 0 ? (
          <>
            <div className="equipment-grid premium-equipment-grid">
              {paged.map((item, index) => (
                <div key={item.id} data-aos="fade-up" data-aos-delay={index * 50}>
                  <EquipmentCard item={item} onView={setSelected} />
                </div>
              ))}
            </div>

            <div className="pagination premium-pagination">
              <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={page === i + 1 ? "active" : ""}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="card empty-state glass-premium-card">
            <h3>No equipment found</h3>
            <p>Try changing your search term or filters.</p>
          </div>
        )}

        <EquipmentModal item={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}

export default Equipment;