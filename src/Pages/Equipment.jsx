import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import EquipmentCard from "../components/EquipmentCard";
import EquipmentModal from "../components/EquipmentModal";
import BackButton from "../components/BackButton";
import items from "../data/equipment.json";

const PER_PAGE = 12;
const STORAGE_KEY = "swarali_equipment_state";

function getSavedState() {
  if (typeof window === "undefined") {
    return {
      query: "",
      category: "All",
      availability: "All",
      page: 1,
      scrollY: 0,
    };
  }

  try {
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return {
        query: "",
        category: "All",
        availability: "All",
        page: 1,
        scrollY: 0,
      };
    }

    const parsed = JSON.parse(saved);
    return {
      query: parsed.query || "",
      category: parsed.category || "All",
      availability: parsed.availability || "All",
      page: parsed.page || 1,
      scrollY: parsed.scrollY || 0,
    };
  } catch {
    return {
      query: "",
      category: "All",
      availability: "All",
      page: 1,
      scrollY: 0,
    };
  }
}

function Equipment() {
  const prefersReducedMotion = useReducedMotion();
  const [initialState] = useState(() => getSavedState());
  const [query, setQuery] = useState(initialState.query);
  const [category, setCategory] = useState(initialState.category);
  const [availability, setAvailability] = useState(initialState.availability);
  const [page, setPage] = useState(initialState.page);
  const [selected, setSelected] = useState(null);

  // Refs for deterministic scroll-on-pagination
  const equipmentGridRef = useRef(null);
  const paginationRef = useRef(null);
  // Tracks the scroll intent from the last pagination interaction
  const pageScrollIntentRef = useRef(null);

  useEffect(() => {
    if (initialState.scrollY > 0) {
      const timer = window.setTimeout(() => {
        window.scrollTo(0, initialState.scrollY);
      }, 80);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [initialState.scrollY]);

  useEffect(() => {
    window.sessionStorage.setItem(
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

  // Scroll to the right position after a pagination click
  useEffect(() => {
    const intent = pageScrollIntentRef.current;
    if (!intent) return;
    pageScrollIntentRef.current = null;

    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (intent === "prev") {
      // Previous → scroll near the pagination controls so user sees last row + pagination
      paginationRef.current?.scrollIntoView({ behavior, block: "end" });
    } else {
      // Next or individual page → scroll to top of equipment listing
      equipmentGridRef.current?.scrollIntoView({ behavior, block: "start" });
    }
  }, [page, prefersReducedMotion]);

  const categories = ["All", ...new Set(items.map((item) => item.category))];
  const availabilityOptions = ["All", "Available", "Limited Stock", "Unavailable"];

  const filtered = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return items.filter((item) => {
      const matchesQuery =
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);

      const matchesCategory = category === "All" || item.category === category;
      const matchesAvailability = availability === "All" || item.availability === availability;

      return matchesQuery && matchesCategory && matchesAvailability;
    });
  }, [availability, category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const activeFilters = [category !== "All" ? category : null, availability !== "All" ? availability : null, query ? `“${query}”` : null].filter(Boolean);

  return (
    <section className="section premium-page-bg section-surface section-surface-light">
      <div className="container">
        <BackButton />
        <motion.div className="premium-page-head" initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45 }}>
          <span className="tag premium-tag">Medical Equipment on Rent & Sale</span>
          <h1>Browse Equipment For Home Patient Care</h1>
          <p>
            Explore hospital-grade home care equipment available for rent or purchase
            with quick enquiry support on WhatsApp.
          </p>
        </motion.div>

        <motion.div className="premium-filter-box card liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.35 }}>
          <div className="filters filters-3">
            <input
              placeholder="Search equipment"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
            />

            <select
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
                setPage(1);
              }}
            >
              {categories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <select
              value={availability}
              onChange={(event) => {
                setAvailability(event.target.value);
                setPage(1);
              }}
            >
              {availabilityOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="filter-summary">
            <p>Showing <strong>{paged.length}</strong> of <strong>{filtered.length}</strong> matching equipment items.</p>
            <div className="filter-chip-row">
              {activeFilters.length > 0 ? activeFilters.map((item) => (
                <span className="filter-chip" key={item}>{item}</span>
              )) : <span className="filter-chip">All equipment</span>}
            </div>
          </div>
        </motion.div>

        {paged.length > 0 ? (
          <>
            <div ref={equipmentGridRef} className="equipment-grid premium-equipment-grid">
              {paged.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.28, delay: index * 0.03 }}
                >
                  <EquipmentCard item={item} onView={setSelected} />
                </motion.div>
              ))}
            </div>

            <div ref={paginationRef} className="pagination premium-pagination">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => {
                  pageScrollIntentRef.current = "prev";
                  setPage((current) => Math.max(1, current - 1));
                }}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  type="button"
                  key={index + 1}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => {
                    pageScrollIntentRef.current = "page-click";
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => {
                  pageScrollIntentRef.current = "next";
                  setPage((current) => Math.min(totalPages, current + 1));
                }}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <motion.div className="card empty-state liquid-glass" initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <h3>No equipment found</h3>
            <p>Try changing your search term or filters.</p>
          </motion.div>
        )}

        <EquipmentModal item={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}

export default Equipment;
