import React, { useState, useEffect, useRef } from "react";

const items = [
  "Butwal Multiple Campus",
  "Kathmandu Model Campus",
  "Tilottama Campus",
];

function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
    Array(a.length + 1).fill(0)
  );

  for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}

function fuzzySearch(query, choices, maxDistance = 2) {
  const results = [];

  for (const choice of choices) {
    const distance = levenshteinDistance(
      query.toLowerCase(),
      choice.toLowerCase()
    );
    if (distance <= maxDistance) {
      results.push({ match: choice, distance });
    }
  }

  return results.sort((a, b) => a.distance - b.distance);
}

const FuzzySearchInput = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (query.trim() && isFocused) {
      const results = fuzzySearch(query, items, 10);
      setMatches(results);
      setActiveIndex(-1);
    } else {
      setMatches([]);
    }
  }, [query, isFocused]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % matches.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + matches.length) % matches.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      let finalValue = query;

      if (activeIndex >= 0 && activeIndex < matches.length) {
        finalValue = matches[activeIndex].match;
        setQuery(finalValue);
      }

      setMatches([]);
      setActiveIndex(-1);
      inputRef.current.blur();

      if (onSubmit) onSubmit(finalValue); // ✅ Send value to parent
    } else if (e.key === "Escape") {
      setMatches([]);
      setActiveIndex(-1);
      inputRef.current.blur();
    }
  };

  const handleBlur = () => {
    setTimeout(() => setMatches([]), 100);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (query.trim()) {
      const results = fuzzySearch(query, items, 10);
      setMatches(results);
    }
  };

  const handleClick = (match) => {
    setQuery(match);
    setMatches([]);
    setActiveIndex(-1);
    inputRef.current.blur();

    if (onSubmit) onSubmit(match); // ✅ Send clicked value to parent
  };

  return (
    <div className="pcSearchBar">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Search colleges . . ."
            style={{
              width: "25vw",
              height: "30px",
              borderRadius: "10px",
              padding: "3px",
              paddingLeft: "10px",
              border: "2px solid gray",
              fontSize: "15px",
              backgroundColor: "#fff",
              position: "relative",
              top: "3px",
            }}
          />
          {matches.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                margin: 0,
                padding: "8px 0",
                listStyle: "none",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderTop: "none",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                zIndex: 10,
                // Removed scroll behavior
              }}
            >
              {matches.map((result, index) => (
                <li
                  key={index}
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevent blur before click
                    handleClick(result.match);
                  }}
                  style={{
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "15px",
                    backgroundColor: index === activeIndex ? "#f0f0f0" : "#fff",
                  }}
                >
                  {result.match}
                  <span style={{ color: "#999" }}>
                    {" "}
                    (distance: {result.distance})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuzzySearchInput;
