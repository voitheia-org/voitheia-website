/* ==========================================================================
   VOITHEIA REPORTS ENGINE (Pagination & Search Integration)
   ========================================================================== */

const reportsDatabase = [
    { year: "2026", title: "Home Sweet Home Orphanage", description: "Providing a nurturing environment and resources for orphaned children.", link:"https://drive.google.com/file/d/1f2srUk2LeiZudDvrK2fYwMC4JyXPI5Tl/view?usp=sharing"},
    { year: "2026", title: "Sol Beach Cleaup - 2", description: "Restoring shorelines and protecting marine ecosystems through community action.", link: "https://drive.google.com/file/d/1wdfFrifiiG6fojiFKX8DYzg0vpGc1N34/view?usp=sharing"},
    { year: "2025", title: "Life Cause Primary School", description: "Empowering young minds through foundational education and community support.", link: "https://drive.google.com/file/d/1nsd6zHZ117h-UVxpfyJzpqFOatHaQ0PY/view?usp=sharing" },
    { year: "2025", title: "Sol Beach Cleaup - 1", description: "Empowering communities through coastal restoration and environmental stewardship.", link: "https://drive.google.com/file/d/1UokTrxRPnNgiUA2MNtYQCXwgIqQjegs5/view?usp=sharing" },
    { year: "2025", title: "F8 Ballers Academy", description: "Empowering youth through sports, equipment, and financial transparency.", link: "https://drive.google.com/file/d/1Kg-wXgUeVtAMY-7R8qi6csir4nXLpYrP/view?usp=drive_link" },
    { year: "2024", title: "Children Center", description: "Providing a safe, supportive environment for children’s growth, learning, and well-being.", link:"https://drive.google.com/file/d/1YqYKMhXf57v-QTUGuzW91nKi7jS2lmio/view?usp=sharing"},
    { year: "2024", title: "Indian Language School", description: "Restoring our school to a pristine state by cleaning and organizing after a successful event.", link: "https://drive.google.com/file/d/1Rj7nKjSrsDXkboyqYMygg-Wr_bUJLm2i/view?usp=sharing"},
    { year: "2024", title: "Baba Salam Orphanage", description: "Providing care, shelter, and hope to vulnerable orphaned children.", link: "https://drive.google.com/file/d/1jolj9qQWF3bhQBI2RMb4l-AMmM2y9Gbh/view?usp=sharing"},
    { year: "2024", title: "Heritage Homes and Little Saints Orphanage", description: "Providing essential supplies and educational support to vulnerable children.", link: "https://drive.google.com/file/d/1IXgj0sLayR7IMnup-46NNTilSRo1Jhwd/view?usp=sharing"}
    // Add as many as you want here!
];

// STATE 
let currentSelectedYear = "All";
let currentLimit = 5; // Start by showing 5 items

document.addEventListener("DOMContentLoaded", () => {
    buildYearFilters();
    handleFilterChange();
});

// BUILD SLEEK DROPDOWN
function buildYearFilters() {
    const filterContainer = document.getElementById("yearFilters");
    const uniqueYears = [...new Set(reportsDatabase.map(report => report.year))].sort((a, b) => b - a);
    
    let html = `
        <div class="custom-select-wrapper">
            <select id="yearDropdown" class="year-dropdown" onchange="setYearFilter(this.value)">
                <option value="All">Year: All</option>
    `;
    
    uniqueYears.forEach(year => {
        html += `<option value="${year}">${year}</option>`;
    });

    html += `</select><i class="fa-solid fa-chevron-down select-icon"></i></div>`;
    filterContainer.innerHTML = html;
}

function setYearFilter(year) {
    currentSelectedYear = year;
    currentLimit = 5; // Reset to 5 when user changes the year
    handleFilterChange();
}

// MAIN FILTER LOGIC
function handleFilterChange(resetLimit = true) {
    // If the user types in the search bar, reset the view back to 5 items
    if (resetLimit) currentLimit = 5;

    const searchTerm = document.getElementById('reportSearch').value.toLowerCase();
    
    // 1. Search the ENTIRE database first
    const filteredData = reportsDatabase.filter(report => {
        const matchesYear = (currentSelectedYear === "All" || report.year === currentSelectedYear);
        const matchesSearch = report.title.toLowerCase().includes(searchTerm) || 
                              report.description.toLowerCase().includes(searchTerm);
        
        return matchesYear && matchesSearch;
    });

    // 2. Render the top matches based on the current limit
    renderReports(filteredData);
}

// RENDER LIST AND HANDLE LOAD MORE BUTTON
function renderReports(data) {
    const listContainer = document.getElementById("reportsList");
    const noResults = document.getElementById("noResults");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    
    if (data.length === 0) {
        listContainer.innerHTML = "";
        noResults.style.display = "block";
        loadMoreBtn.style.display = "none";
        return;
    }

    noResults.style.display = "none";
    
    // Slice the array to only show the allowed amount
    const itemsToRender = data.slice(0, currentLimit);
    let html = "";

    itemsToRender.forEach(report => {
        html += `
            <a href="${report.link}" target="_blank" rel="noopener noreferrer" class="report-list-item">
                <div class="report-info">
                    <span class="report-year-tag">${report.year}</span>
                    <h3 class="report-name">${report.title}</h3>
                    <p class="report-desc">${report.description}</p>
                </div>
                <div class="report-action">
                    <span>View PDF</span>
                    <i class="fa-solid fa-file-pdf"></i>
                </div>
            </a>
        `;
    });

    listContainer.innerHTML = html;

    // Show "Load More" only if there are still hidden items in the filtered list
    if (data.length > currentLimit) {
        loadMoreBtn.style.display = "inline-block";
    } else {
        loadMoreBtn.style.display = "none";
    }
}

// LOAD MORE FUNCTION
function loadMore() {
    currentLimit += 5; // Add 5 more items to the limit
    handleFilterChange(false); // Run filter again, but DO NOT reset the limit
}