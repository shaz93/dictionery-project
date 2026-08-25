import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = React.useState("");

    function seacrh(event) {
        event.preventDefault();
        alert(`Searching for: ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={seacrh}>
                <input
                    type="text"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="Enter a word..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}